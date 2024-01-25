// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./QuestionnairePageStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter, QuestionaireListing } from "../../components";
import { Helmet } from "react-helmet";

export default function QuestionnairePageView(props) {
  const { questionnairData } = props;

  if (questionnairData) {
    return (
      <div>
        <Helmet>
          <title>Questionnaire | Health City</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <WebHeader isChildPage={true} />

        <QuestionaireListing questionnairData={questionnairData} />

        <WebFooter />
      </div>
    );
  }

  return null;
}
