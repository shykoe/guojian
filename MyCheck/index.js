import Icon from 'material-ui/svg-icons/social/person';

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
import CheckField from '../Pick/CheckField';
import TextButton from './TextButton';
import { WorkSpace } from './WorkSpace';
export const MyCheckIcon = Icon;
const rowStyle = (record) => {
    if (record.status === "检测完成") return { backgroundColor: '#dfd' };
    return {};
};
export const MyCheckList = ({ ...props }) => (
    <List {...props} perPage={25} sort={{ field: 'published_at', order: 'DESC' }}   >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.Product} Product`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid rowStyle={rowStyle}  >
                    <TextField source="id" />
                    <TextField source="ProductName" />
                    <DateField source="published_at" style={{ fontStyle: 'italic' }} />
                    <TextField source="CommissionedUnit" />
                    <TextField source="notes" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />

                    <CheckField />
                    <TextField source="status" /> 
                    <TextButton  />
                </Datagrid>
            }
        />
    </List>
);
export class MyCheckEdit extends Component {
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
            <CheckField detail={true} />
            <br/>
            <TextInput source="TestCount" style={{ display: 'inline-block'  }} />
            <DateInput source="Receive_at" style={{ display: 'inline-block', marginLeft: 32  }} />
            <DateInput source="SamplingDate" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextInput source="SealingStaff" style={{ display: 'inline-block' }} />
            <TextInput source="TestPlace" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextInput source="SealingStaff" style={{ display: 'inline-block', marginLeft: 32  }} />
            <WorkSpace />
        </SimpleForm>
    </Edit>);
}
}