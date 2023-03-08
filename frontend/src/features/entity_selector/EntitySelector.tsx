import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Typography } from '@mui/material';

import { useCurrentPoll } from 'src/hooks/useCurrentPoll';
import { UserRatingPublicToggle } from 'src/features/videos/PublicStatusAction';
import EntityCard from 'src/components/entity/EntityCard';
import EmptyEntityCard from 'src/components/entity/EmptyEntityCard';
import { ActionList } from 'src/utils/types';
import { extractVideoId } from 'src/utils/video';
import {
  UsersService,
  ContributorRating,
  PollsService,
  Recommendation,
} from 'src/services/openapi';
import { UID_YT_NAMESPACE, YOUTUBE_POLL_NAME } from 'src/utils/constants';

import AutoEntityButton from './AutoEntityButton';
import EntityInput from './EntityInput';
import { useLoginState } from 'src/hooks';

import useIsAvailable from '../../hooks/useIsAvailable';
import { getVideoForComparison } from 'src/utils/video';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
  },
  controls: {
    margin: 4,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  input: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  },
  overlay: {
    display: 'flex',
    // flexDirection="column"
    aspectRatio: '16/9',
    background: 'rgba(0,0,0,.5)',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
}));

interface Props {
  title: string;
  value: SelectorValue;
  onChange: (newValue: SelectorValue) => void;
  otherUid: string | null;
  variant?: 'regular' | 'noControl';
  autoFill?: boolean;
  onEntityCheckedError?: CallableFunction;
  onEntityCheckedSuccess?: CallableFunction;
}

export interface SelectorValue {
  uid: string | null;
  rating: ContributorRating | null;
  ratingIsExpired?: boolean;
}

const isUidValid = (uid: string | null) =>
  uid === null ? false : uid.match(/\w+:.+/);

const EntitySelector = ({
  title,
  value,
  onChange,
  otherUid,
  variant = 'regular',
  autoFill = false,
  onEntityCheckedError,
  onEntityCheckedSuccess,
}: Props) => {
  const classes = useStyles();
  const { isLoggedIn } = useLoginState();

  return (
    <div className={classes.root}>
      {isLoggedIn ? (
        <EntitySelectorInnerAuth
          title={title}
          value={value}
          onChange={onChange}
          otherUid={otherUid}
          variant={variant}
          autoFill={autoFill}
          onEntityCheckedError={onEntityCheckedError ?? undefined}
          onEntityCheckedSuccess={onEntityCheckedSuccess ?? undefined}
        />
      ) : (
        <EntitySelectorInnerAnonymous value={value} />
      )}
    </div>
  );
};

/**
 * Display the content of an EntitySelector for anonymous users.
 */
const EntitySelectorInnerAnonymous = ({ value }: { value: SelectorValue }) => {
  const { isLoggedIn } = useLoginState();
  const { name: pollName } = useCurrentPoll();

  const { uid } = value;
  const [entityFallback, setEntityFallback] = useState<Recommendation>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getEntity() {
      return await PollsService.pollsEntitiesRetrieve({
        name: pollName,
        uid: uid || '',
      });
    }

    // Wait for a not null / not empty UID before making an HTTP request.
    if (uid) {
      getEntity().then((entity) => {
        setLoading(false);
        setEntityFallback(entity);
      });
    }
  }, [isLoggedIn, pollName, uid]);

  return entityFallback ? (
    <EntityCard compact entity={entityFallback} settings={undefined} />
  ) : (
    <EmptyEntityCard compact loading={loading} />
  );
};

const EntitySelectorInnerAuth = ({
  title,
  value,
  onChange,
  otherUid,
  variant,
  autoFill,
  onEntityCheckedError,
  onEntityCheckedSuccess,
}: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { name: pollName, options } = useCurrentPoll();

  const { uid, rating, ratingIsExpired } = value;

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value.uid);

  const { entityIsChecking, entityIsAvailable } = useIsAvailable(
    value.uid ?? ''
  );
  const [newEntityIsLoading, setNewEntityIsLoading] = useState(false);
  const [seamlessLoad, setSeamlessLoad] = useState(true);
  let showEntityInput = true;
  let showRatingControl = true;

  switch (variant) {
    case 'noControl':
      showEntityInput = false;
      showRatingControl = false;
  }

  useEffect(() => {
    if (!entityIsAvailable && !entityIsChecking) {
      if (onEntityCheckedError) onEntityCheckedError();
      if (seamlessLoad && !newEntityIsLoading) {
        setNewEntityIsLoading(true);

        getVideoForComparison(otherUid, uid).then((newUid) => {
          onChange({ uid: 'yt:' + newUid, rating: null });
          setTimeout(() => {
            setNewEntityIsLoading(false);
          }, 1000);
        });
      }
    }
  }, [
    uid,
    entityIsAvailable,
    entityIsChecking,
    newEntityIsLoading,
    onEntityCheckedError,
    seamlessLoad,
    otherUid,
    onChange,
  ]);

  const loadRating = useCallback(async () => {
    setLoading(true);

    try {
      const contributorRating =
        await UsersService.usersMeContributorRatingsRetrieve({
          pollName,
          uid: uid || '',
        });
      onChange({
        uid,
        rating: contributorRating,
        ratingIsExpired: false,
      });
    } catch (err) {
      if (err?.status === 404) {
        try {
          const contributorRating =
            await UsersService.usersMeContributorRatingsCreate({
              pollName,
              requestBody: {
                uid: uid || '',
                is_public: options?.comparisonsCanBePublic === true,
              },
            });
          onChange({
            uid,
            rating: contributorRating,
            ratingIsExpired: false,
          });
        } catch (err) {
          console.error('Failed to initialize contributor rating.', err);
        }
      } else {
        console.error('Failed to retrieve contributor rating.', err);
      }
    }
    setLoading(false);
  }, [onChange, options?.comparisonsCanBePublic, pollName, uid]);

  useEffect(() => {
    if (entityIsAvailable) {
      if (onEntityCheckedSuccess) onEntityCheckedSuccess();
      if (isUidValid(uid) && rating == null) {
        loadRating();
      }
    }
  }, [entityIsAvailable, onEntityCheckedSuccess, loadRating, rating, uid]);

  useEffect(() => {
    // Reload rating after the parent (comparison) form has been submitted.
    if (ratingIsExpired) {
      loadRating();
    }
  }, [loadRating, ratingIsExpired]);

  useEffect(() => {
    // Update input value when "uid" has been changed by the parent component
    setInputValue((previousValue) => {
      if (previousValue !== uid) {
        return uid;
      }
      return previousValue;
    });
  }, [uid]);

  const handleChange = (value: string) => {
    if (value === '') {
      setInputValue('');
      onChange({
        uid: '',
        rating: null,
      });
      return;
    }
    setSeamlessLoad(false);

    const videoIdFromValue =
      pollName === YOUTUBE_POLL_NAME ? extractVideoId(value) : null;
    const newUid = videoIdFromValue
      ? UID_YT_NAMESPACE + videoIdFromValue
      : value.trim();

    setInputValue(newUid);
    onChange({
      uid: newUid,
      rating: null,
    });
  };

  const handleRatingUpdate = useCallback(
    (newValue: ContributorRating) => {
      onChange({
        uid: newValue.entity.uid,
        rating: newValue,
      });
    },
    [onChange]
  );

  const toggleAction: ActionList = useMemo(() => {
    return rating?.is_public != null
      ? [
          <UserRatingPublicToggle
            key="isPublicToggle"
            uid={rating.entity.uid}
            nComparisons={rating.n_comparisons}
            isPublic={rating.is_public}
            onChange={handleRatingUpdate}
          />,
        ]
      : [];
  }, [handleRatingUpdate, rating]);

  return (
    <>
      {showEntityInput && (
        <>
          <Box
            mx={1}
            marginTop="4px"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Typography
              variant="h6"
              color="secondary"
              flexGrow={1}
              sx={{ '&:first-letter': { textTransform: 'capitalize' } }}
            >
              {title}
            </Typography>
            <AutoEntityButton
              disabled={loading}
              currentUid={uid}
              otherUid={otherUid}
              onClick={() => {
                setSeamlessLoad(true);
                setInputValue('');
                setLoading(true);
              }}
              onResponse={(uid) => {
                uid ? onChange({ uid, rating: null }) : setLoading(false);
              }}
              autoFill={autoFill}
            />
          </Box>

          <Box mx={1} marginBottom={1}>
            <EntityInput
              value={inputValue || uid || ''}
              onChange={handleChange}
              otherUid={otherUid}
            />
          </Box>
        </>
      )}
      <Box position="relative">
        {rating && (entityIsAvailable || !seamlessLoad) ? (
          <EntityCard
            compact
            entity={rating.entity}
            settings={showRatingControl ? toggleAction : undefined}
          ></EntityCard>
        ) : (
          <EmptyEntityCard compact loading={loading || !entityIsAvailable} />
        )}
        {rating && !entityIsAvailable && !seamlessLoad && (
          <Box className={classes.overlay}>
            <Typography textAlign="center" fontSize="inherit">
              {t('video.loadAnother')}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default EntitySelector;
