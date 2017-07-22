import Icon from 'material-ui/svg-icons/action/visibility';

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
import RichTextInput from 'aor-rich-text-input';
import Chip from 'material-ui/Chip';
import MyEditButton from './EditButton';
import TextRoles from './TextRoles';
import {websockClient} from '../asteroid';

export const CheckTestIcon = Icon;
const rowStyle = (record) => {
   // if (record.status === "检测完成") return { backgroundColor: '#dfd' };
    return {};
};

export const CheckTestList = ({ ...props }) => (
    <List {...props} perPage={25} sort={{ field: 'id', order: 'ASC' }}  >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                />
            }
            medium={
                <Datagrid rowStyle={rowStyle}  >
                    <TextField source="order" />
                    <TextField source="user" />
                    <TextField source="categoryName" />
                    <TextField source="levelName" />
                    <TextField source="itemName" />
                    <TextField source="requirement" />
                    <DateField source="createdAt" />
                    <TextField source="result" />
                    <BooleanField source="verdict"/>
                </Datagrid>
            }
        />
    </List>
);




