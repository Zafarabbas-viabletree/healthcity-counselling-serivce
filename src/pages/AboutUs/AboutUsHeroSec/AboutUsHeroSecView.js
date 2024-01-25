// @flow
import React from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./AboutUsHeroSecStyles";
import { Images, AppStyles, Colors } from "../../../theme";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";

export default function AboutUsHeroSecView(props) {
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={css(styles.heroContentCont)}>
          <h4 className={css(styles.heroContentHead)}>About Us</h4>
        </div>
      </div>
    </section>
  );
}
