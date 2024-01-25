// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./ExternalLinksStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter } from "../../components";
import ExternalLinksHeroSec from "./ExternalLinksHeroSec";
import { Helmet } from "react-helmet";

export default function ExternalLinksView(props) {
  return (
    <div>
      <Helmet>
        <title>External Links | Health City</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WebHeader />
      <ExternalLinksHeroSec />
      <div className={`container my-5`}>
        <h2 className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Disclaimer:{" "}
          <span className={css(AppStyles.weight4)}>
            We are not responsible for contents from third parties. Additional
            External links shall be added in the future on need basis.
          </span>
        </h2>

        <p
          className={`mt-5 mb-3 ${css([
            AppStyles.heading24,
            AppStyles.weight7,
          ])}`}
        >
          External links are as follow:
        </p>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li className={`mb-3`}>
            <p>PHQ-9 questionnaire is taken from the following link.</p>
            <a
              href="https://patient.info/doctor/patient-health-questionnaire-phq-9"
              target="_blank"
            >
              https://patient.info/doctor/patient-health-questionnaire-phq-9
            </a>{" "}
          </li>
          <li className={`mb-3`}>
            <p>GAD-7 questionnaire is taken from the following link.</p>
            <a
              href="https://patient.info/doctor/generalised-anxiety-disorder-assessment-gad-7"
              target="_blank"
            >
              https://patient.info/doctor/generalised-anxiety-disorder-assessment-gad-7
            </a>{" "}
          </li>
        </ul>
      </div>
      <WebFooter />
    </div>
  );
}
