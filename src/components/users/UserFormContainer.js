import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserForm from "./UserForm";

import { createUser } from "./../../actions";

class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    console.log("a;; the props are:", this.props);
  }

  onSubmit = (formValues) => {
    this.props.createUser(formValues, this.props.token);
    this.props.handleDialogOpenStatus();

    console.log("the form values areeeee:", formValues);
  };
  render() {
    return (
      <div>
        <UserForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createUser })(UserFormContainer);
