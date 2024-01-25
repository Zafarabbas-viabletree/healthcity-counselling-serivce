import _ from "lodash";
import {
  ANXIETY_TEXT,
  DEPRESSION_LOW_MOOD_TEXT,
  QUESTIONAIRE_ONE,
  QUESTIONAIRE_THREE,
  QUESTIONAIRE_TWO,
  ROUTES,
} from "../constants";
import {
  PREMIUM_SERVICES_SLUG,
  QUALIFIED_SERVICES_SLUG,
  TRAINEE_SERVICES_SLUG,
} from "../pages/BookingForm/BookingFormController";
import DataHandler from "../services/DataHandler";
import { getCardIntentRequest } from "../actions/PaymentActions";
import { Images } from "../theme";
import { text } from "@fortawesome/fontawesome-svg-core";

const getManipulatedTeamList = (data) => {
  const finalData = [];

  data.forEach((element) => {
    finalData.push({
      id: element.id,
      name: element.name,
      titles: element.titles,
      description: element.description,
      profileImage: element.profile_image,
    });
  });

  return finalData;
};

const getServiceImage = (serviceName) => {
  let img = Images.trainee_icon;
  if (serviceName === TRAINEE_SERVICES_SLUG) {
    img = Images.trainee_icon;
  }

  if (serviceName === PREMIUM_SERVICES_SLUG) {
    img = Images.premium_icon;
  }

  if (serviceName === QUALIFIED_SERVICES_SLUG) {
    img = Images.qualified_icon;
  }

  return img;
};

const getSelectedServiceImage = (serviceName) => {
  let img = Images.trainee_icon_selected;
  if (serviceName === TRAINEE_SERVICES_SLUG) {
    img = Images.trainee_icon_selected;
  }

  if (serviceName === PREMIUM_SERVICES_SLUG) {
    img = Images.premium_icon_selected;
  }

  if (serviceName === QUALIFIED_SERVICES_SLUG) {
    img = Images.qualified_icon_selected;
  }

  return img;
};

const getQuestionnaireDataById = (questionnairId) => {
  let finalData = null;

  if (questionnairId == 1) {
    finalData = _.cloneDeep(QUESTIONAIRE_ONE);
  } else if (questionnairId == 2) {
    finalData = _.cloneDeep(QUESTIONAIRE_TWO);
  } else if (questionnairId == 3) {
    finalData = _.cloneDeep(QUESTIONAIRE_THREE);
  }

  return finalData;
};

const getQuestionnaireResultHeadingById = (questionnairId) => {
  let resultHead;
  switch (questionnairId) {
    case "1":
      resultHead = `Would You Like To Complete A Mood Questionnaire (${DEPRESSION_LOW_MOOD_TEXT}) To See How You Are Feeling?`;
      break;

    case "2":
      resultHead = `Would You Like To Complete A Mood Questionnaire (${ANXIETY_TEXT}) To See How You Are Feeling?`;
      break;
    default:
  }
  return resultHead;
};

const goToLandingPage = (historyInstance) => {
  historyInstance.push("/");
};

const getCardIntentRequestHelper = (payload, cb) => {
  DataHandler.getStore().dispatch(
    getCardIntentRequest(payload, (response) => {
      cb(response);
    })
  );
};

export {
  getManipulatedTeamList,
  getServiceImage,
  getSelectedServiceImage,
  getQuestionnaireDataById,
  goToLandingPage,
  getCardIntentRequestHelper,
  getQuestionnaireResultHeadingById,
};
