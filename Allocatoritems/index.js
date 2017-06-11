import React from 'react';
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
import Icon from 'material-ui/svg-icons/action/event';
import CheckersField from './CheckersField';
import AddCheckers from './AddCheckers';
import { Field, reduxForm } from 'redux-form'
export const AitemsIcon = Icon;

export const AitemsList = ({ ...props }) => (
    <List {...props} perPage={5} sort={{ field: 'published_at', order: 'DESC' }} filter={{ispicked:false}}  >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.Product} Product`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid  >
                    <TextField source="id" />
                    <TextField source="ProductName" />
                    <DateField source="published_at" style={{ fontStyle: 'italic' }} />
                    <TextField source="CommissionedUnit" />
                    <TextField source="notes" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <TextField source="status" />
                    <CheckersField />                    
                    <ShowButton/>
                    
                    <AddCheckers/>
                    
                </Datagrid>
            }
        />
    </List>
);
export const AitemsShow = ({ ...props }) => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="id"  style={{ display: 'inline-block' }} />
            <TextField source="ProductName"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="ModelType" />
            <DateField source="published_at" style={{ fontStyle: 'italic' }} />
            <TextField source="TradeMark" />
            <TextField source="ManufactureredDate" />
            <TextField source="Contact" style={{ display: 'inline-block' }} />
            <TextField source="TelNum" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="Adress" />
            <TextField source="Manufacturer" /><TextField source="CommissionedUnit" /><TextField source="KindofTest" />
            <TextField source="Product" />
        </SimpleShowLayout>
    </Show>
);