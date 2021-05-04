/**
 * Tournesol API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ConstantsSerializerV2 from './model/ConstantsSerializerV2';
import ContextEnum from './model/ContextEnum';
import Degree from './model/Degree';
import DegreeOfPoliticalEngagementEnum from './model/DegreeOfPoliticalEngagementEnum';
import Disagreement from './model/Disagreement';
import EmailDomain from './model/EmailDomain';
import ExpertRatingsSerializerV2 from './model/ExpertRatingsSerializerV2';
import Expertise from './model/Expertise';
import ExpertiseKeyword from './model/ExpertiseKeyword';
import Feature from './model/Feature';
import GenderEnum from './model/GenderEnum';
import GenericError from './model/GenericError';
import GenericErrorDetailEnum from './model/GenericErrorDetailEnum';
import Inconsistencies from './model/Inconsistencies';
import MoralPhilosophyEnum from './model/MoralPhilosophyEnum';
import NationalityEnum from './model/NationalityEnum';
import NumberOfThanks from './model/NumberOfThanks';
import OnlineResponse from './model/OnlineResponse';
import OnlyUsername from './model/OnlyUsername';
import OnlyUsernameAndID from './model/OnlyUsernameAndID';
import PaginatedDisagreementList from './model/PaginatedDisagreementList';
import PaginatedEmailDomainList from './model/PaginatedEmailDomainList';
import PaginatedExpertRatingsSerializerV2List from './model/PaginatedExpertRatingsSerializerV2List';
import PaginatedExpertiseList from './model/PaginatedExpertiseList';
import PaginatedInconsistenciesList from './model/PaginatedInconsistenciesList';
import PaginatedOnlyUsernameAndIDList from './model/PaginatedOnlyUsernameAndIDList';
import PaginatedOnlyUsernameList from './model/PaginatedOnlyUsernameList';
import PaginatedUserInformationPublicSerializerV2List from './model/PaginatedUserInformationPublicSerializerV2List';
import PaginatedUserPreferencesSerializerV2List from './model/PaginatedUserPreferencesSerializerV2List';
import PaginatedVerifiableEmailList from './model/PaginatedVerifiableEmailList';
import PaginatedVideoCommentsSerializerV2List from './model/PaginatedVideoCommentsSerializerV2List';
import PaginatedVideoRateLaterSerializerV2List from './model/PaginatedVideoRateLaterSerializerV2List';
import PaginatedVideoRatingsSerializerV2List from './model/PaginatedVideoRatingsSerializerV2List';
import PaginatedVideoRatingsStatisticsSerializerV2List from './model/PaginatedVideoRatingsStatisticsSerializerV2List';
import PaginatedVideoSerializerV2List from './model/PaginatedVideoSerializerV2List';
import PatchedChangePassword from './model/PatchedChangePassword';
import PatchedDegree from './model/PatchedDegree';
import PatchedExpertRatingsSerializerV2 from './model/PatchedExpertRatingsSerializerV2';
import PatchedExpertise from './model/PatchedExpertise';
import PatchedExpertiseKeyword from './model/PatchedExpertiseKeyword';
import PatchedLogin from './model/PatchedLogin';
import PatchedOnlyUsernameAndID from './model/PatchedOnlyUsernameAndID';
import PatchedResetPassword from './model/PatchedResetPassword';
import PatchedUserInformationPublicSerializerV2 from './model/PatchedUserInformationPublicSerializerV2';
import PatchedUserPreferencesSerializerV2 from './model/PatchedUserPreferencesSerializerV2';
import PatchedVerifiableEmail from './model/PatchedVerifiableEmail';
import PatchedVideo from './model/PatchedVideo';
import PatchedVideoCommentsSerializerV2 from './model/PatchedVideoCommentsSerializerV2';
import PatchedVideoRateLaterDelete from './model/PatchedVideoRateLaterDelete';
import PoliticalAffiliationEnum from './model/PoliticalAffiliationEnum';
import PrivateOrPublic from './model/PrivateOrPublic';
import RaceEnum from './model/RaceEnum';
import RatingModeEnum from './model/RatingModeEnum';
import Register from './model/Register';
import ReligionEnum from './model/ReligionEnum';
import ResidenceEnum from './model/ResidenceEnum';
import Samplevideov3Error from './model/Samplevideov3Error';
import Samplevideov3ErrorDetailEnum from './model/Samplevideov3ErrorDetailEnum';
import SingleFeatureRating from './model/SingleFeatureRating';
import SliderChangeSerializerV2 from './model/SliderChangeSerializerV2';
import StatisticsSerializerV2 from './model/StatisticsSerializerV2';
import StatusEnum from './model/StatusEnum';
import UserInformationPublicSerializerV2 from './model/UserInformationPublicSerializerV2';
import UserInformationSerializerNameOnly from './model/UserInformationSerializerNameOnly';
import UserPreferencesSerializerV2 from './model/UserPreferencesSerializerV2';
import VerifiableEmail from './model/VerifiableEmail';
import VideoCommentsSerializerV2 from './model/VideoCommentsSerializerV2';
import VideoRateLaterSerializerV2 from './model/VideoRateLaterSerializerV2';
import VideoRatingsSerializerV2 from './model/VideoRatingsSerializerV2';
import VideoRatingsStatisticsSerializerV2 from './model/VideoRatingsStatisticsSerializerV2';
import VideoSerializerV2 from './model/VideoSerializerV2';
import ConstantsApi from './api/ConstantsApi';
import EmailDomainApi from './api/EmailDomainApi';
import ExpertRatingsApi from './api/ExpertRatingsApi';
import LoginSignupApi from './api/LoginSignupApi';
import RateLaterApi from './api/RateLaterApi';
import StatisticsApi from './api/StatisticsApi';
import UserInformationApi from './api/UserInformationApi';
import UserPreferencesApi from './api/UserPreferencesApi';
import VideoCommentsApi from './api/VideoCommentsApi';
import VideoRatingsApi from './api/VideoRatingsApi';
import VideosApi from './api/VideosApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TournesolApi = require('index'); // See note below*.
* var xxxSvc = new TournesolApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TournesolApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TournesolApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TournesolApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ConstantsSerializerV2 model constructor.
     * @property {module:model/ConstantsSerializerV2}
     */
    ConstantsSerializerV2,

    /**
     * The ContextEnum model constructor.
     * @property {module:model/ContextEnum}
     */
    ContextEnum,

    /**
     * The Degree model constructor.
     * @property {module:model/Degree}
     */
    Degree,

    /**
     * The DegreeOfPoliticalEngagementEnum model constructor.
     * @property {module:model/DegreeOfPoliticalEngagementEnum}
     */
    DegreeOfPoliticalEngagementEnum,

    /**
     * The Disagreement model constructor.
     * @property {module:model/Disagreement}
     */
    Disagreement,

    /**
     * The EmailDomain model constructor.
     * @property {module:model/EmailDomain}
     */
    EmailDomain,

    /**
     * The ExpertRatingsSerializerV2 model constructor.
     * @property {module:model/ExpertRatingsSerializerV2}
     */
    ExpertRatingsSerializerV2,

    /**
     * The Expertise model constructor.
     * @property {module:model/Expertise}
     */
    Expertise,

    /**
     * The ExpertiseKeyword model constructor.
     * @property {module:model/ExpertiseKeyword}
     */
    ExpertiseKeyword,

    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature,

    /**
     * The GenderEnum model constructor.
     * @property {module:model/GenderEnum}
     */
    GenderEnum,

    /**
     * The GenericError model constructor.
     * @property {module:model/GenericError}
     */
    GenericError,

    /**
     * The GenericErrorDetailEnum model constructor.
     * @property {module:model/GenericErrorDetailEnum}
     */
    GenericErrorDetailEnum,

    /**
     * The Inconsistencies model constructor.
     * @property {module:model/Inconsistencies}
     */
    Inconsistencies,

    /**
     * The MoralPhilosophyEnum model constructor.
     * @property {module:model/MoralPhilosophyEnum}
     */
    MoralPhilosophyEnum,

    /**
     * The NationalityEnum model constructor.
     * @property {module:model/NationalityEnum}
     */
    NationalityEnum,

    /**
     * The NumberOfThanks model constructor.
     * @property {module:model/NumberOfThanks}
     */
    NumberOfThanks,

    /**
     * The OnlineResponse model constructor.
     * @property {module:model/OnlineResponse}
     */
    OnlineResponse,

    /**
     * The OnlyUsername model constructor.
     * @property {module:model/OnlyUsername}
     */
    OnlyUsername,

    /**
     * The OnlyUsernameAndID model constructor.
     * @property {module:model/OnlyUsernameAndID}
     */
    OnlyUsernameAndID,

    /**
     * The PaginatedDisagreementList model constructor.
     * @property {module:model/PaginatedDisagreementList}
     */
    PaginatedDisagreementList,

    /**
     * The PaginatedEmailDomainList model constructor.
     * @property {module:model/PaginatedEmailDomainList}
     */
    PaginatedEmailDomainList,

    /**
     * The PaginatedExpertRatingsSerializerV2List model constructor.
     * @property {module:model/PaginatedExpertRatingsSerializerV2List}
     */
    PaginatedExpertRatingsSerializerV2List,

    /**
     * The PaginatedExpertiseList model constructor.
     * @property {module:model/PaginatedExpertiseList}
     */
    PaginatedExpertiseList,

    /**
     * The PaginatedInconsistenciesList model constructor.
     * @property {module:model/PaginatedInconsistenciesList}
     */
    PaginatedInconsistenciesList,

    /**
     * The PaginatedOnlyUsernameAndIDList model constructor.
     * @property {module:model/PaginatedOnlyUsernameAndIDList}
     */
    PaginatedOnlyUsernameAndIDList,

    /**
     * The PaginatedOnlyUsernameList model constructor.
     * @property {module:model/PaginatedOnlyUsernameList}
     */
    PaginatedOnlyUsernameList,

    /**
     * The PaginatedUserInformationPublicSerializerV2List model constructor.
     * @property {module:model/PaginatedUserInformationPublicSerializerV2List}
     */
    PaginatedUserInformationPublicSerializerV2List,

    /**
     * The PaginatedUserPreferencesSerializerV2List model constructor.
     * @property {module:model/PaginatedUserPreferencesSerializerV2List}
     */
    PaginatedUserPreferencesSerializerV2List,

    /**
     * The PaginatedVerifiableEmailList model constructor.
     * @property {module:model/PaginatedVerifiableEmailList}
     */
    PaginatedVerifiableEmailList,

    /**
     * The PaginatedVideoCommentsSerializerV2List model constructor.
     * @property {module:model/PaginatedVideoCommentsSerializerV2List}
     */
    PaginatedVideoCommentsSerializerV2List,

    /**
     * The PaginatedVideoRateLaterSerializerV2List model constructor.
     * @property {module:model/PaginatedVideoRateLaterSerializerV2List}
     */
    PaginatedVideoRateLaterSerializerV2List,

    /**
     * The PaginatedVideoRatingsSerializerV2List model constructor.
     * @property {module:model/PaginatedVideoRatingsSerializerV2List}
     */
    PaginatedVideoRatingsSerializerV2List,

    /**
     * The PaginatedVideoRatingsStatisticsSerializerV2List model constructor.
     * @property {module:model/PaginatedVideoRatingsStatisticsSerializerV2List}
     */
    PaginatedVideoRatingsStatisticsSerializerV2List,

    /**
     * The PaginatedVideoSerializerV2List model constructor.
     * @property {module:model/PaginatedVideoSerializerV2List}
     */
    PaginatedVideoSerializerV2List,

    /**
     * The PatchedChangePassword model constructor.
     * @property {module:model/PatchedChangePassword}
     */
    PatchedChangePassword,

    /**
     * The PatchedDegree model constructor.
     * @property {module:model/PatchedDegree}
     */
    PatchedDegree,

    /**
     * The PatchedExpertRatingsSerializerV2 model constructor.
     * @property {module:model/PatchedExpertRatingsSerializerV2}
     */
    PatchedExpertRatingsSerializerV2,

    /**
     * The PatchedExpertise model constructor.
     * @property {module:model/PatchedExpertise}
     */
    PatchedExpertise,

    /**
     * The PatchedExpertiseKeyword model constructor.
     * @property {module:model/PatchedExpertiseKeyword}
     */
    PatchedExpertiseKeyword,

    /**
     * The PatchedLogin model constructor.
     * @property {module:model/PatchedLogin}
     */
    PatchedLogin,

    /**
     * The PatchedOnlyUsernameAndID model constructor.
     * @property {module:model/PatchedOnlyUsernameAndID}
     */
    PatchedOnlyUsernameAndID,

    /**
     * The PatchedResetPassword model constructor.
     * @property {module:model/PatchedResetPassword}
     */
    PatchedResetPassword,

    /**
     * The PatchedUserInformationPublicSerializerV2 model constructor.
     * @property {module:model/PatchedUserInformationPublicSerializerV2}
     */
    PatchedUserInformationPublicSerializerV2,

    /**
     * The PatchedUserPreferencesSerializerV2 model constructor.
     * @property {module:model/PatchedUserPreferencesSerializerV2}
     */
    PatchedUserPreferencesSerializerV2,

    /**
     * The PatchedVerifiableEmail model constructor.
     * @property {module:model/PatchedVerifiableEmail}
     */
    PatchedVerifiableEmail,

    /**
     * The PatchedVideo model constructor.
     * @property {module:model/PatchedVideo}
     */
    PatchedVideo,

    /**
     * The PatchedVideoCommentsSerializerV2 model constructor.
     * @property {module:model/PatchedVideoCommentsSerializerV2}
     */
    PatchedVideoCommentsSerializerV2,

    /**
     * The PatchedVideoRateLaterDelete model constructor.
     * @property {module:model/PatchedVideoRateLaterDelete}
     */
    PatchedVideoRateLaterDelete,

    /**
     * The PoliticalAffiliationEnum model constructor.
     * @property {module:model/PoliticalAffiliationEnum}
     */
    PoliticalAffiliationEnum,

    /**
     * The PrivateOrPublic model constructor.
     * @property {module:model/PrivateOrPublic}
     */
    PrivateOrPublic,

    /**
     * The RaceEnum model constructor.
     * @property {module:model/RaceEnum}
     */
    RaceEnum,

    /**
     * The RatingModeEnum model constructor.
     * @property {module:model/RatingModeEnum}
     */
    RatingModeEnum,

    /**
     * The Register model constructor.
     * @property {module:model/Register}
     */
    Register,

    /**
     * The ReligionEnum model constructor.
     * @property {module:model/ReligionEnum}
     */
    ReligionEnum,

    /**
     * The ResidenceEnum model constructor.
     * @property {module:model/ResidenceEnum}
     */
    ResidenceEnum,

    /**
     * The Samplevideov3Error model constructor.
     * @property {module:model/Samplevideov3Error}
     */
    Samplevideov3Error,

    /**
     * The Samplevideov3ErrorDetailEnum model constructor.
     * @property {module:model/Samplevideov3ErrorDetailEnum}
     */
    Samplevideov3ErrorDetailEnum,

    /**
     * The SingleFeatureRating model constructor.
     * @property {module:model/SingleFeatureRating}
     */
    SingleFeatureRating,

    /**
     * The SliderChangeSerializerV2 model constructor.
     * @property {module:model/SliderChangeSerializerV2}
     */
    SliderChangeSerializerV2,

    /**
     * The StatisticsSerializerV2 model constructor.
     * @property {module:model/StatisticsSerializerV2}
     */
    StatisticsSerializerV2,

    /**
     * The StatusEnum model constructor.
     * @property {module:model/StatusEnum}
     */
    StatusEnum,

    /**
     * The UserInformationPublicSerializerV2 model constructor.
     * @property {module:model/UserInformationPublicSerializerV2}
     */
    UserInformationPublicSerializerV2,

    /**
     * The UserInformationSerializerNameOnly model constructor.
     * @property {module:model/UserInformationSerializerNameOnly}
     */
    UserInformationSerializerNameOnly,

    /**
     * The UserPreferencesSerializerV2 model constructor.
     * @property {module:model/UserPreferencesSerializerV2}
     */
    UserPreferencesSerializerV2,

    /**
     * The VerifiableEmail model constructor.
     * @property {module:model/VerifiableEmail}
     */
    VerifiableEmail,

    /**
     * The VideoCommentsSerializerV2 model constructor.
     * @property {module:model/VideoCommentsSerializerV2}
     */
    VideoCommentsSerializerV2,

    /**
     * The VideoRateLaterSerializerV2 model constructor.
     * @property {module:model/VideoRateLaterSerializerV2}
     */
    VideoRateLaterSerializerV2,

    /**
     * The VideoRatingsSerializerV2 model constructor.
     * @property {module:model/VideoRatingsSerializerV2}
     */
    VideoRatingsSerializerV2,

    /**
     * The VideoRatingsStatisticsSerializerV2 model constructor.
     * @property {module:model/VideoRatingsStatisticsSerializerV2}
     */
    VideoRatingsStatisticsSerializerV2,

    /**
     * The VideoSerializerV2 model constructor.
     * @property {module:model/VideoSerializerV2}
     */
    VideoSerializerV2,

    /**
    * The ConstantsApi service constructor.
    * @property {module:api/ConstantsApi}
    */
    ConstantsApi,

    /**
    * The EmailDomainApi service constructor.
    * @property {module:api/EmailDomainApi}
    */
    EmailDomainApi,

    /**
    * The ExpertRatingsApi service constructor.
    * @property {module:api/ExpertRatingsApi}
    */
    ExpertRatingsApi,

    /**
    * The LoginSignupApi service constructor.
    * @property {module:api/LoginSignupApi}
    */
    LoginSignupApi,

    /**
    * The RateLaterApi service constructor.
    * @property {module:api/RateLaterApi}
    */
    RateLaterApi,

    /**
    * The StatisticsApi service constructor.
    * @property {module:api/StatisticsApi}
    */
    StatisticsApi,

    /**
    * The UserInformationApi service constructor.
    * @property {module:api/UserInformationApi}
    */
    UserInformationApi,

    /**
    * The UserPreferencesApi service constructor.
    * @property {module:api/UserPreferencesApi}
    */
    UserPreferencesApi,

    /**
    * The VideoCommentsApi service constructor.
    * @property {module:api/VideoCommentsApi}
    */
    VideoCommentsApi,

    /**
    * The VideoRatingsApi service constructor.
    * @property {module:api/VideoRatingsApi}
    */
    VideoRatingsApi,

    /**
    * The VideosApi service constructor.
    * @property {module:api/VideosApi}
    */
    VideosApi
};
