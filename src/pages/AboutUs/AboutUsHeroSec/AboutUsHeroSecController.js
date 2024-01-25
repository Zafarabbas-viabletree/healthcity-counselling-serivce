// @flow
import React from "react";
import { ROUTES } from "../../../constants";
import AboutUsHeroSecView from "./AboutUsHeroSecView";

export default class AboutUsHeroSecController extends React.Component {
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
      <AboutUsHeroSecView
        {...this.props}
        getInTouch={this.getInTouch}
        freeTrialPress={this.freeTrialPress}
      />
    );
  }
}
