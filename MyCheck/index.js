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
    GridForm,
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
import OrderFilter from '../Utils/OrderFilter';
import CheckersField from '../Allocatoritems/CheckersField';
import MyCheckAction from './MyCheckAction';
import StatusField from '../MyItem/StatusField';
import AddrField from '../MyItem/AddrField';
import ItemsField from '../MyItem/ItemsField';
import CustServField from '../MyItem/CustServField';
import TestersField from '../MyItem/TestersField';
import ShippingField from '../MyItem/ShippingField';
import SampleDisposalTypeField from '../MyItem/SampleDisposalTypeField';
import ReportFetchingTypeField from '../MyItem/ReportFetchingTypeField'

export const MyCheckIcon = Icon;
const rowStyle = (record) => {
    if (record.status === "检测完成") return { backgroundColor: '#dfd' };
    return {};
};

export const MyCheckList = ({ ...props }) => (
    <List {...props} actions={<MyCheckAction />} filters={<OrderFilter />} perPage={25} sort={{ field: 'published_at', order: 'DESC' }}>
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
                    <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
                    <TextField source="sampleName" />
                    <TextField source="categoryName" />
                    <TextField source="levelName" />
                    <CheckField label="检测项" />
                    <StatusField />
                    <TextField source="agent" />
                    <CheckersField />
                    <TextButton />
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
                <GridForm>
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
                    <ImageInput source="pictures" label="Related pictures" accept="image/*" itemStyle={{ width: '100%' }} >
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <br/>
                    <WorkSpace itemStyle={{ width: '100%' }} />
                </GridForm>
            </Edit>
        );
    }
}
