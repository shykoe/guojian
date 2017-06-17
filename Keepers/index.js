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
                    primaryText={record => record.sampleName}
                    secondaryText={record => `${record.sampleProducer} Product`}
                    tertiaryText={record => new Date(record.sampleProducer).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid  >
                    <TextField source="sampleName" />
                    <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
                    <TextField source="sampleProducer" />
                    <TextField source="producerBatch" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <TextField source="sampleType" />
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
            <TextField source="sampleName"   />
            <TextField source="sampleProducer" />
            <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
            <TextField source="producerBatch" />
            <TextField source="sampleType" />
            <TextField source="sampleLevel"  />
            <TextField source="sampleBrand"  />
            <TextField source="sampleNum" />
            <TextField source="clientName" /><TextField source="clientContactName" /><TextField source="clientContactPhone" />
            <TextField source="clientContactIdent" />
            <TextField source="clientEconomicType" />
            <TextField source="price" />
            <TextField source="note" />
            <ImageField source="sampleImages" title="Picture"  addLabel  label='图片'/>
        </SimpleShowLayout>
    </Show>
);
export class KeepersEdit extends Component {
    render(){
        return(
    <Edit {...this.props} >
        <SimpleForm>
            <TextField source="sampleName"   />
            <TextField source="sampleProducer" />
            <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
            <TextField source="producerBatch" />
            <TextField source="sampleType" />
            <TextField source="sampleLevel"  />
            <TextField source="sampleBrand" />
            <TextField source="sampleNum" />
            <TextField source="clientName" /><TextField source="clientContactName" /><TextField source="clientContactPhone" />
            <TextField source="clientContactIdent" />
            <TextField source="clientEconomicType" />
            <TextField source="price" />
            <TextField source="note" />
            <ImageField source="sampleImages" title="Picture"  addLabel  label='图片'/>
            <br/>
            <WorkSpace/>
        </SimpleForm>
    </Edit>);
}
}
class WorkSpace extends Component{
    render(){
        const { record } = this.props;
        if(record.status == 6){
            return(
                <div>
            <NullableBooleanInput source="isApproved" />
            <TextInput source="Notes" style={{ display: 'inline-block'  }} />
            </div>);
        }
        else{
            return (<div></div>);
        }
    }
}