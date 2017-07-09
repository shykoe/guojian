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
import { FinishButton } from './FinishButton';
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
                    <TextField source="sampleName" />
                    <TextField source="sampleProducer" />
                    <TextField source="clientName" style={{ fontStyle: 'italic' }} />
                    <TextField source="producerBatch" />
                    <TextField source="notes" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />

                    <CheckField />
                     
                    <TextButton  />
                    <FinishButton />
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
            <TextField source="sampleName" elStyle={{ fontStyle: 'italic' }}  />
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
            <ImageField source="testingImages" title="Picture"  addLabel  label='图片'/>
            <ImageInput source="pictures" label="Related pictures" accept="image/*" >
                <ImageField source="src" title="title" />
            </ImageInput>
            <br/>
            <WorkSpace />

        </SimpleForm>
    </Edit>);
}
}