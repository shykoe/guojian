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
    NullableBooleanInput
} from 'admin-on-rest';
import React, { Component } from 'react';
import RichTextInput from 'aor-rich-text-input';
import Chip from 'material-ui/Chip';
import Icon from 'material-ui/svg-icons/action/event';
import { Field, reduxForm } from 'redux-form';
import StatusField from '../MyItem/StatusField';
export const KeepersIcon = Icon;

export const KeepersList = ({ ...props }) => (
    <List {...props} perPage={5} sort={{ field: 'published_at', order: 'DESC' }}   >
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
                    <StatusField />                    
                    <ShowButton/>
                    <EditButton label='审核'  addLabel/>
                </Datagrid>
            }
        />
    </List>
);
export const KeepersShow = ({ ...props }) => (
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
export class KeepersEdit extends Component {
    render(){
        return(
    <Edit {...this.props} >
        <SimpleForm>
            <TextField source="id"  style={{ display: 'inline-block' }} />
            <TextField source="ProductName"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="ModelType"  style={{ display: 'inline-block', marginLeft: 32 }} />
            <DateField source="published_at" style={{ fontStyle: 'italic', display: 'inline-block', marginLeft: 32 }} />
            <TextField source="TradeMark" style={{ display: 'inline-block', marginLeft: 32  }}  />
            <TextField source="ManufactureredDate" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextField source="Contact" style={{ display: 'inline-block'  }}  />
            <TextField source="TelNum" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="Adress" style={{ display: 'inline-block' , marginLeft: 32 }} />
            <TextField source="Manufacturer" style={{ display: 'inline-block', marginLeft: 32}} />
            <TextField source="CommissionedUnit"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="KindofTest" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <NullableBooleanInput source="isApproved" />
            <TextInput source="Notes" style={{ display: 'inline-block'  }} />

        </SimpleForm>
    </Edit>);
}
}