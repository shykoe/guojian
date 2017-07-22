import { Field, option, reduxForm, formValueSelector } from 'redux-form';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Consts from '../pr-schema/consts';

const selector = formValueSelector('record-form');
const renderTextField = ({ input, label, meta: { touched, error },disabled, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        disabled={disabled}
        {...input}
        {...custom}
    />
);

class KeepMsg extends Component {
  render() {
    const { status, record } = this.props;
    if ((status === Consts.ORDER_STATUS_PAID || status === Consts.ORDER_STATUS_SAMPLE_RECEIVED) &&
        record.status === Consts.ORDER_STATUS_PROCESSED) {
      return (
        <Field name="keeperMsg" component={renderTextField} label="备注"/>
      );
    }
    else {
      return(<Field name="keeperMsg" component={renderTextField} disabled label="备注"/>);
    }
  }
}

export default connect(
  state => {
    const status = selector(state, 'status')
    return { status };
  }
)(KeepMsg);
