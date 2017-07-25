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
import { Field, FieldArray, reduxForm, option, formValueSelector } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/content/clear';

const defaultLabelStyle = {
  paddingTop: '2.58em',
  height: 'auto',
};

export default class WorkSpace extends Component {
    renderField = ({ input, label, type, meta: { touched, error },...custom }) => (
      <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
    );

    renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        hintText={label}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
      />
    );

    render() {
        const { record } = this.props;
        return(
            <div>
              {record.items.map((item, ind) => (
                <div key={item.name} style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end'}}>
                  <Chip style={{ display: 'flex', height:''}}>{item.name}</Chip>
                  <div style={{ display:'flex', flexDirection: 'row', marginLeft: 40 }}>
                    {/*<Field
                      name={`items.${ind}.result`}
                      type="text"
                      component={this.renderField}
                      label="检验结果"
                    />*/}
                    <Field
                      name={`items.${ind}.verdict`}
                      component={this.renderSelectField}
                      label="是否合格"
                    >
                      <MenuItem value={true} primaryText="合格" />
                      <MenuItem value={false} primaryText="不合格" />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
        );
    }
}
