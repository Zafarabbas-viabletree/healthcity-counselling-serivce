// @flow
import React from "react";

import ConditionsView from "./ConditionsView";

export default class ConditionsController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <ConditionsView {...this.props} />;
  }
}
