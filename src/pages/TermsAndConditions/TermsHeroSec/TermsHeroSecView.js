// @flow
import React from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./TermsHeroSecStyles";
import { Images, AppStyles, Colors } from "../../../theme";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";

export default function TermsHeroSecView(props) {
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={css(styles.heroContentCont)}>
          <h4 className={css(styles.heroContentHead)}>Terms And Conditions</h4>
        </div>
      </div>
    </section>
  );
}
