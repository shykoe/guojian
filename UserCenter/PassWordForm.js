import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
//import asyncValidate from './asyncValidate'
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'currentpwd',
    'newpwd',
    'renewpwd'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if ( !Object.is(values.newpwd ,values.renewpwd)   ) 
  {
    errors.renewpwd = '两次密码不一致'
  }
  return errors
}

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
    hintText={label}
	type="password"
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)


const MaterialUiForm = props => {
  const {handleSubmit, pristine, reset, submitting,username} = props
  //console.log(props);
  //console.log(username);
  return (
    <form onSubmit={handleSubmit}>

    <ViewTitle title={"修改密码"} />
      <div>
        <Field
          name="currentpwd"
          component={renderTextField}
          label="当前密码"
        />
      </div>
	  <div>
        <Field
          name="newpwd"
          component={renderTextField}
          label="新密码"
        />
      </div>
	  <div>
        <Field
          name="renewpwd"
          component={renderTextField}
          label="确认新密码"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
var PasswordForm = reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate
})(MaterialUiForm);

PasswordForm = connect(
  state => ({
    username: state.admin.user.userName // username
  }),
  {}               // bind account loading action creator
)(PasswordForm)


export default PasswordForm;
