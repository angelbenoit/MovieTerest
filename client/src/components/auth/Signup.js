import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../Actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="formSubmit">
        <div className="formItem">
          <label className="formItem__label">Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            className="formItem__input"
            autoComplete="none"
          />
        </div>
        <div className="formItem">
          <label className="formItem__label">Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            className="formItem__input"
            autoComplete="none"
          />
        </div>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);