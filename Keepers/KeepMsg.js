import { Field, option, reduxForm, formValueSelector } from 'redux-form';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
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
        const { status,record } = this.props;
         if((status === 3 || status === 4) && record.status === 8){


            return (    
                <Field name="keeperMsg" component={renderTextField} label="keeperMsg"/>
            
            );
        }
        else{
            return(<Field name="keeperMsg" component={renderTextField} disabled={true} label="keeperMsg"/>);
        }

    }
}
KeepMsg = connect(
  state => {
    const status = selector(state, 'status')
    return { status };
  }
  )(KeepMsg)
export default KeepMsg;