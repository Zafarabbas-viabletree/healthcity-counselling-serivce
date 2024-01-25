// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./ResourceHubXStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, UnderDev } from "../../components";
import ResourceHubXHeroSec from "./ResourceHubXHeroSec";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ResourceHubXView(props) {
  return (
    <div>
      <Helmet>
        <title>Resource Hub-X | Health City</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WebHeader />
      <ResourceHubXHeroSec />
      <div className={`container my-5`}>
        <UnderDev />
      </div>
      <WebFooter />
    </div>
  );
}
