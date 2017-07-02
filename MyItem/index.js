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
import DoButton from './DoButton';
import { ProductType,TestCriteria, PriceField, StatusSelect, MsgField } from './WorkSpace';
import { CheckboxGr, Pppp } from './CheckBox';
import { ExpressNum } from './ExpressNum';
import StatusField from './StatusField';
import { asteroid } from '../asteroid';
export const MyItemIcon = Icon;
const rowStyle = (record) => {
    if (record.finished === true) return { backgroundColor: '#dfd' };
    return {};
};
export const MyItemList = ({ ...props }) => (
    <List {...props} perPage={25} sort={{ field: 'id', order: 'DESC' }}   >
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
                    
                    <TextField source="sampleName" />
                    <TextField source="sampleProducer" style={{ fontStyle: 'italic' }} />
                    <TextField source="producerBatch" />
                    <TextField source="sampleType" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <TextField source="status" />                    
                    <StatusField/>
                    <EditButton label='编辑'  addLabel/>
                </Datagrid>
            }
        />
    </List>
);
export class MyItemEdit extends Component {
    componentWillMount(){
        asteroid.call('Categories.getAll').then(response => this.setState({ Categories: response }));
        
    }
    state = {};
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
            <TextField source="sampleBrand"  />
            <TextField source="sampleNum" />
            <TextField source="clientName" /><TextField source="clientContactName" /><TextField source="clientContactPhone" />
            <TextField source="clientContactIdent" />
            <TextField source="clientEconomicType" />
            <TextField source="price" />
            <TextField source="note" />
            <ImageField source="sampleImages" title="Picture"  addLabel  label='图片'/>
            <StatusSelect addLabel label="status"  />
            <ProductType categories={this.state} addLabel label="categoryName" />
            <TestCriteria categories={this.state} addLabel label="levelName" />
            <CheckboxGr
                    source="items"
                    categories={this.state}
                    optionText="name" 
                    optionValue="id"
                />
            <PriceField  />
            <MsgField  />
            <ExpressNum/>
        </SimpleForm>
    </Edit>);
}
}