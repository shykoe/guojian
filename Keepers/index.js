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
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
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
    <Edit title={<Title />} {...this.props} >
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
            <ImageInput source="pictures" label="Related pictures" accept="image/*" >
                <ImageField source="src" title="title" />
            </ImageInput>
            <br/>
            <IsApproved/>
        </SimpleForm>
    </Edit>);
}
}
class Title extends Component{
    render(){
        const { record } = this.props;
        const date = new Date(record.createdAt*1000);
        return(<span> { `${record.sampleProducer}于${date.toLocaleDateString()}提交`}</span>);
    }
}
class IsApproved extends Component{
    selectValue = [{name:'样品审核通过',value:7}, {name:'样品审核未通过',value:8}]
    renderItem = (item) =>{ return ( <MenuItem value={item['value']}  key={item['value']} primaryText={item['name']} />)};
    renderSelectField = ({ input, label, meta: { touched, error }, children,disabled, ...custom }) => (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        style={{width: 300}}
        disabled={disabled}
        {...custom}/>
    ); 
    render(){
        const { record } = this.props;       
        return(
        <Field name="status" component={this.renderSelectField} disabled={record.status!=6} >
        {this.selectValue.map(this.renderItem)}
        </Field>)

    }
}