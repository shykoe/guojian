import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    BooleanField,
    BooleanInput,
    CheckboxGroupInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    DisabledInput,
    Edit,
    EditButton,
    Filter,
    FormTab,
    ImageField,
    ImageInput,
    List,
    LongTextInput,
    NumberField,
    NumberInput,
    ReferenceManyField,
    Responsive,
    RichTextField,
    SelectInput,
    Show,
    ShowButton,
    SimpleForm,
    SimpleList,
    SimpleShowLayout,
    TabbedForm,
    TextInput,
    minValue,
    number,
    required,
    translate,
    Labeled,
} from 'admin-on-rest';
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { Field, FieldArray, option, formValueSelector } from 'redux-form';
import { reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { choices } from '../MyItem/TypeDefine';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/content/clear';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};
export class WorkSpace extends Component {
    renderField = ({ input, label, type, meta: { touched, error },...custom }) => (
        <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        />
    )
    renderMembers = ({ fields, meta: { touched, error } }) => {
        console.log(fields);
        return(
        <div>
        <Chip style={{ display: 'inline-block' }}>{fields.name.split('.')[1]}</Chip>
      <RaisedButton  style={{ display: 'inline-block',margin: '5em 0 0 12em',fontSize: '1px' }} onTouchTap={() => fields.push({})} label="添加结果"/>
      {touched && error && <span>{error}</span>}
        {fields.map((member, index) =>
          <div key={index}>
            <IconButton 
              label="删除"
              style={{ display: 'inline-block',margin: '0em 0 0 0em',fontSize: '1px' }}
              onTouchTap={() => fields.remove(index)}>
              <Icon/>
              </IconButton>
            <Field
              name={`${member}.TestItem`}
              type="text"
              component={this.renderField}
              label="检测项目"/>
            <Field
              name={`${member}.TestBasis`}
              type="text"
              component={this.renderField}
              label="检测依据"/>
            <Field
              name={`${member}.TestRes`}
              type="text"
              component={this.renderField}
              label="检测结果"/>
          </div>
        )}
        </div>)
    }
    render() {
        const { record } = this.props;
        return(
            <div>
                {record.InsItems.map(item => (
                  <FieldArray key={item} name={`TestItems.${choices.find(s => s.id === item).Dtype.split(":")[0]}`} component={this.renderMembers}/>  
                     ))}
            </div>
            )
    }
}
