// @flow
import React from "react";
import _ from "lodash";
import { css } from "aphrodite";
import styles from "./ServiceBoxLeftStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Colors } from "../../theme";
import { NavLink } from "react-router-dom";

export default function ServiceBoxLeftView(props) {
  const { image, title, icon, description, anchorText, link } = props;
  return (
    <div className={`container`}>
      <div className={css(styles.innerContainer)}>
        <LazyLoadImage
          src={image}
          alt={image}
          className={css(styles.servImg)}
          effect="blur"
        />

        <div className={css(styles.servIconCont)}>
          <img src={icon} className={css(styles.servIcon)} />
        </div>

        <div className={css(styles.servDetailBox)}>
          <h6 className={css(styles.servHeading)}>{title}</h6>
          <p className={css(styles.servDesc)}>
            {description}
            <span>
              {!_.isUndefined(link) && (
                <NavLink
                  style={{ color: Colors.text.primary, fontWeight: 700 }}
                  to={link}
                >
                  {anchorText}
                </NavLink>
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
