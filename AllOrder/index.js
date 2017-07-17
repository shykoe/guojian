import Icon from 'material-ui/svg-icons/action/event';

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
    GridShowLayout,
    TabbedForm,
    TextField,
    TextInput,
    minValue,
    number,
    required,
    translate,
} from 'admin-on-rest';
import SegmentsFieldContactInf from './SegmentsFieldContactInf';
import SegmentsFieldClientInf from './SegmentsFieldClientInf';
import SegmentsFieldSampleInf from './SegmentsFieldSampleInf';

export const AllOrderIcon = Icon;
const choicesx=[
    { "roles": 'admin', "name": '管理员' },
    { "roles": 'clerk', "name": '业务员' },
    { "roles": 'checker', "name": '检测员' },
];

const AllOrderFilter = (props) => {
    return (
        <Filter {...props} >
            <TextInput label="id" source="_id" />
            <TextInput source="sampleName" />
            <TextInput source="sampleProducer" />
            <TextInput source="producerBatch" />
            <TextInput source="sampleType" />
            <TextInput source="sampleLevel" />
            <TextInput source="sampleBrand" />
            <TextInput source="sampleNum" />
            <TextInput source="clientName" />
            <TextInput source="clientContactName" />
            <TextInput source="clientContactPhone" />
            <TextInput source="clientContactIdent" />
            <TextInput source="clientEconomicType" />
            <TextInput source="status" />
        </Filter>
         );
} ;

export const AllOrderList = ({ ...props }) => (
    <List {...props} filters={<AllOrderFilter />} perPage={25} sort={{ field: 'id', order: 'ASC' }}   >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                 />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="sampleName"  />
                    <TextField source="sampleProducer"  />
                    <TextField source="producerBatch" />
                    <SegmentsFieldSampleInf/>
                    <SegmentsFieldClientInf/>
                    <SegmentsFieldContactInf />
                    <ShowButton/>
                </Datagrid>
            }
        />
    </List>
);
export const AllOrderShow = ({ ...props }) => (
    <Show  {...props}>
        <GridShowLayout>
            <TextField source="sampleName" itemStyle={{ width: '25%' }} />
            <DateField source="createdAt" itemStyle={{ width: '25%' }} />
            <TextField source="producerBatch" itemStyle={{ width: '25%' }} />
            <TextField source="sampleType" itemStyle={{ width: '25%' }} />
            <TextField source="sampleLevel" itemStyle={{ width: '25%' }} />
            <TextField source="sampleBrand" itemStyle={{ width: '25%' }} />
            <TextField source="sampleNum" itemStyle={{ width: '25%' }} />
            <TextField source="clientName" itemStyle={{ width: '25%' }} />
            <TextField source="clientContactName" itemStyle={{ width: '25%' }} />
            <TextField source="clientContactPhone" itemStyle={{ width: '25%' }} />
            <TextField source="clientContactIdent" itemStyle={{ width: '25%' }} />
            <TextField source="clientEconomicType" itemStyle={{ width: '25%' }} />
            <TextField source="price" itemStyle={{ width: '25%' }} />
            <TextField source="note" itemStyle={{ width: '25%' }} />
            <ImageField source="sampleImages" title="Picture" addLabel label='图片' itemStyle={{ width: '25%' }}/>
        </GridShowLayout>
    </Show>
);
