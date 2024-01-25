// @flow
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import UnderDevView from "./UnderDevView";
import Util from "../../services/Util";
import { strings } from "../../constants";
import { subscriptionRequest } from "../../actions/GeneralActions";
import { connect } from "react-redux";

class UnderDevController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      isLoading: false,
      successStatus: false,
      successMsg: "",
    };
  }

  validateEmail = () => {
    let isError = false;
    const errors = { emailError: "" };
    const { email } = this.state;

    if (_.isEmpty(email)) {
      isError = true;
      errors.emailError = strings.EMAIL_IS_REQUIRED;
    } else if (!Util.isEmailValid(email)) {
      isError = true;
      errors.emailError = strings.INVALID_EMAIL_ERROR;
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  setValue = (obj) => {
    this.setState(obj);
  };

  onSubmit = () => {
    if (!this.validateEmail()) {
      const { email } = this.state;

      const payload = {
        email: email.trim(),
      };
      this.setState({
        isLoading: true,
      });

      this.props.subscriptionRequest(payload, (success) => {
        this.setState({
          isLoading: false,
        });
        if (success) {
          this.setState(
            {
              successStatus: true,
              successMsg: strings.NOTIFY_SUCCESS_MESSAGE, //
              email: "",
            },
            () => {
              setTimeout(() => {
                this.flushAlert();
              }, 10000);
            }
          );
        }
      });
    }
  };

  render() {
    const {
      emailError,
      email,
      successMsg,
      successStatus,
      isLoading,
    } = this.state;
    return (
      <UnderDevView
        {...this.props}
        onSubmit={this.onSubmit}
        email={email}
        emailError={emailError}
        successMsg={successMsg}
        successStatus={successStatus}
        isLoading={isLoading}
        setValue={this.setValue}
      />
    );
  }
}

const mapStateToProps = ({ subsEmail }) => ({
  subsEmail,
});

const actions = { subscriptionRequest };

export default connect(mapStateToProps, actions)(UnderDevController);
