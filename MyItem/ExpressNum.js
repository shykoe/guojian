import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { Field, FieldArray,reduxForm, option, formValueSelector } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/content/clear';

export class ExpressNum extends Component {
    renderField = ({ input, label, type, meta: { touched, error }, disable, ...custom }) => (
        <TextField hintText={label}
          floatingLabelText={label}
          disabled={disable}
          errorText={touched && error}
          {...input}
          {...custom}
        />
    )

    renderMembers = ({ fields, meta: { touched, error }, ind, Lable, disable }) => {
      return(
        <div>
          <Chip style={{ display: 'inline-block' }}>{Lable}</Chip>
          <RaisedButton disabled={disable} style={{ display: 'inline-block',margin: '5em 0 0 12em',fontSize: '1px' }} onTouchTap={() => fields.push({})} label="添加"/>
          {touched && error && <span>{error}</span>}
          {fields.map((member, index) =>
            <div key={index}>
              <IconButton
                label="删除"
                disabled={disable}
                style={{ display: 'inline-block',margin: '0em 0 0 0em',fontSize: '1px' }}
                onTouchTap={() => fields.remove(index)}>
                <Icon/>
                </IconButton>
              <Field
                name={`${fields.name}[${index}].provider`}
                type="text"
                disabled={disable}
                component={this.renderField}
                label="快递公司"/>
              <Field
                name={`${fields.name}[${index}].no`}
                type="text"
                disabled={disable}
                component={this.renderField}
                label="快递单号"/>
              <Field
                name={`${fields.name}[${index}].description`}
                type="text"
                disabled={disable}
                component={this.renderField}
                label="描述"/>
            </div>
          )}
        </div>
      )
    }

    render() {
        const { record } = this.props;
        return(
        <div>
            <FieldArray  name="ShippingInfo" Lable="物流信息"  component={this.renderMembers}/>
        </div>
        )
    }
}
