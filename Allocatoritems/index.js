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
    GridShowLayout,
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
import { Field, reduxForm } from 'redux-form';
import { Title }  from '../Utils';
import StatusField from '../MyItem/StatusField';
import AddrField from '../MyItem/AddrField';
import ItemsField from '../MyItem/ItemsField';
import CustServField from '../MyItem/CustServField';
import TestersField from '../MyItem/TestersField';
import ShippingField from '../MyItem/ShippingField';
import SampleDisposalTypeField from '../MyItem/SampleDisposalTypeField';
import ReportFetchingTypeField from '../MyItem/ReportFetchingTypeField'

export const AitemsIcon = Icon;

export const AitemsList = ({ ...props }) => (
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
                <Datagrid  >
                    <TextField source="sampleName" />
                    <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
                    <TextField source="sampleProducer" />
                    <TextField source="clientName" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <TextField source="sampleType" />
                    <CheckersField />
                    <ShowButton/>
                    <AddCheckers source="tester" />
                </Datagrid>
            }
        />
    </List>
);
export const AitemsShow = ({ ...props }) => (
    <Show title={<Title />} {...props}>
        <GridShowLayout>
            <TextField source="userId" itemStyle={{ width: '25%' }} />
            <StatusField source="status" itemStyle={{ width: '25%' }} />
            <DateField source="createdAt" itemStyle={{ width: '25%' }} />
            <DateField source="approvedAt" itemStyle={{ width: '25%' }} />
            <DateField source="paidAt" itemStyle={{ width: '25%' }} />
            <DateField source="refundedAt" itemStyle={{ width: '25%' }} />
            <TextField source="sampleName" itemStyle={{ width: '25%' }} />
            <TextField source="sampleProducer" itemStyle={{ width: '25%' }} />
            <TextField source="producerBatch" itemStyle={{ width: '25%' }} />
            <TextField source="sampleType" itemStyle={{ width: '25%' }} />
            <TextField source="sampleLevel" itemStyle={{ width: '25%' }} />
            <TextField source="sampleBrand" itemStyle={{ width: '25%' }} />
            <TextField source="sampleNum" itemStyle={{ width: '25%' }} />
            <TextField source="clientName" itemStyle={{ width: '25%' }} />
            <AddrField source="clientContactAddress" itemStyle={{ width: '25%' }} />
            <TextField source="clientContactIdent" itemStyle={{ width: '25%' }} />
            <TextField source="clientEconomicType" itemStyle={{ width: '25%' }} />
            <SampleDisposalTypeField source="sampleDisposalType" itemStyle={{ width: '25%' }} />
            <ReportFetchingTypeField source="reportFetchingType" itemStyle={{ width: '25%' }} />
            <TextField source="reportNo" itemStyle={{ width: '25%' }} />
            <TextField source="categoryName" itemStyle={{ width: '50%' }} />
            <TextField source="levelName" itemStyle={{ width: '25%' }} />
            <ItemsField source="items" itemStyle={{ width: '100%' }} />
            <TextField source="price" itemStyle={{ width: '25%' }} />
            <CustServField source="custServHistory" itemStyle={{ width: '100%' }} />
            <TextField source="agent" itemStyle={{ width: '25%' }} />
            <TestersField source="testers" itemStyle={{ width: '25%' }} />
            <TextField source="agentMsg" itemStyle={{ width: '25%' }} />
            <TextField source="keeperMsg" itemStyle={{ width: '25%' }} />
            <ShippingField source="ShippingInfo" itemStyle={{ width: '100%' }} />
            <ImageField source="descImages" addLabel label="下单图片" itemStyle={{ width: '100%' }} />
            <ImageField source="sampleImages" addLabel label="样品图片" itemStyle={{ width: '100%' }} />
            <ImageField source="testingImages" addLabel label="检验图片" itemStyle={{ width: '100%' }} />
        </GridShowLayout>
    </Show>
);
