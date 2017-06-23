 
import React, { Component } from 'react';
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
    SelectField,
    SelectInput,
    Show,
    ShowButton,
    SimpleForm,
    SimpleList,
    SimpleShowLayout,
    TabbedForm,
    TextField,
    TextInput,
    minValue,
    number,
    required,
    translate,
} from 'admin-on-rest';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import {cyan500} from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';
 
const EditButton = ({ basePath = '', record = {} }) => (
  <IconButton
        containerElement={<Link to={`${basePath}/${record.id}`} />}
        style={{ overflow: 'inherit' }}
    >
        <ContentCreate color={cyan500} />
    </IconButton> 
);

EditButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

EditButton.defaultProps = {
    style: { padding: 0 },
};

export default EditButton;

/*

 <IconButton
        containerElement={<Link to={`${basePath}/${record.id}`} />}
        style={{ overflow: 'inherit' }}
    >
        <ContentCreate color={cyan500} />
    </IconButton>
*/