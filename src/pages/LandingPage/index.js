import React from "react";
import { connect } from "react-redux";
import {
  WebHeader,
  WebFooter,
  OurTeamSection,
  QuestionaireListing,
} from "../../components";
import CTABannerSec from "./CTABannerSec";
import CBTSec from "./CBTSec";
import WebHeroSec from "./WebHeroSec";
import TeamSec from "./TeamSec";
import TestimonialSec from "./TestimonialSec";
import QuestionaireSec from "./QuestionaireSec";
import { Helmet } from "react-helmet";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Health City | We care about your health.</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <WebHeader />
        <WebHeroSec />
        <CBTSec />
        <TeamSec />
        <QuestionaireSec />
        <CTABannerSec />
        <TestimonialSec />
        <WebFooter />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(LandingPage);
