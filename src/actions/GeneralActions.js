// @flow

import {
  GET_VEHICLES,
  GET_TEAM_MEMBERS,
  GET_IN_TOUCH,
  BOOK_APPOINTMENT,
  SUBSCRIPTION,
} from "./ActionTypes";

export function getVehiclesRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_VEHICLES.REQUEST,
  };
}

export function getTeamMembersRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_TEAM_MEMBERS.REQUEST,
  };
}

export function getTeamMembersSuccess(data) {
  return {
    data,
    type: GET_TEAM_MEMBERS.SUCCESS,
  };
}

export function getInTouchRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_IN_TOUCH.REQUEST,
  };
}

export function subscriptionRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: SUBSCRIPTION.REQUEST,
  };
}

export function bookAppointmentRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: BOOK_APPOINTMENT.REQUEST,
  };
}
