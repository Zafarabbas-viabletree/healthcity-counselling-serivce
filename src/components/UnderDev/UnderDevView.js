// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./UnderDevStyles";
import { AppStyles } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "..";

export default function UnderDevView(props) {
  const {
    email,
    emailError,
    onSubmit,
    isLoading,
    successMsg,
    setValue,
    successStatus,
  } = props;
  return (
    <section className={` ${css([styles.heroSection, AppStyles.pxy_12])}`}>
      <div className={`container ${css(styles.HeightVhs)}`}>
        <div className={`row my-5 `}>
          <div className={`col-lg-12 col-md-12 col-sm-12 mt-3`}>
            <h2
              className={`mt-5 mb-3 mb-4 ${css([
                AppStyles.headingOne,
                AppStyles.blackColor,
                styles.lineHeight12,
              ])}`}
            >
              Oops page under construction…
              <br />
              Coming Soon
            </h2>
          </div>
        </div>

        <div className={`${css(styles.emailCont)}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${css(styles.emailIcon)}`}
          />
          <div className={`${css(styles.formGroup)}`}>
            <input
              type="email"
              className={`${css(styles.formControl)}`}
              name="email"
              value={email}
              onChange={(event) => {
                setValue({
                  email: event.target.value,
                  emailError: "",
                });
              }}
              placeholder="Email me when it is ready"
            />
            <span className={`${css(AppStyles.formError)}`}>{emailError}</span>
          </div>
          <div className={css(styles.formSubmitBtnContainer)}>
            <Button
              title="SEND"
              isLoading={isLoading}
              className={css(styles.sendBtn)}
              onClick={() => onSubmit()}
              ripple={false}
            />
          </div>
          {successStatus && (
            <p className={`alert alert-success mt-3`}>{successMsg}</p>
          )}
        </div>
      </div>
    </section>
  );
}
