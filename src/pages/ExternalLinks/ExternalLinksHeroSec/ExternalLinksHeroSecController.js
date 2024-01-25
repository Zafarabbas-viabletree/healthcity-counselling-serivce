// @flow
import React from "react";
import { ROUTES } from "../../../constants";
import ExternalLinksHeroSecView from "./ExternalLinksHeroSecView";

export default class ExternalLinksHeroSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  getInTouch = () => {
    const contactForm = document.getElementById("contactForm");
    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: "smooth",
    });
  };

  freeTrialPress = () => {
    this.props.history.push(`${ROUTES.BOOKINGS}`);
  };

  render() {
    return (
      <ExternalLinksHeroSecView
        {...this.props}
        getInTouch={this.getInTouch}
        freeTrialPress={this.freeTrialPress}
      />
    );
  }
}
