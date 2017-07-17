import React from 'react';
import {
    Datagrid,
    DateField,
    Filter,
    ImageField,
    List,
    Show,
    ShowButton,
    SimpleForm,
    SimpleList,
    GridShowLayout,
    TextField,
    Responsive
} from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';
import Chip from 'material-ui/Chip';
import AcceptButton from './acceptButton';
import Icon from 'material-ui/svg-icons/action/event';
import AgentField from './AgentField';
import OrderFilter from '../Utils/OrderFilter';
import ApplyActions from './ApplyActions';
import StatusField from '../MyItem/StatusField';
import AddrField from '../MyItem/AddrField';
import ItemsField from '../MyItem/ItemsField';

export const ApplyIcon = Icon;

export const ApplyList = ({ ...props }) => (
    <List {...props} perPage={25} actions={<ApplyActions />} filters={<OrderFilter />} sort={{ field: 'published_at', order: 'DESC' }}   >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.clientName}
                    secondaryText={record => `${record.sampleName} Product`}
                    tertiaryText={record => new Date(record.createdAt).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid   >
                    <TextField source="sampleName" />
                    <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
                    <TextField source="sampleProducer" />
                    <TextField source="clientName" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <TextField source="producerBatch" />
                    <StatusField/>
                    <AgentField addLabel label="agent"/>
                    <ShowButton/>
                    <AcceptButton />
                </Datagrid>
            }
        />
    </List>
);

export const ApplyShow = ({ ...props }) => (
    <Show  {...props}>
        <GridShowLayout>
            <TextField source="userId" itemStyle={{ width: '25%' }} />
            <TextField source="status" itemStyle={{ width: '25%' }} />
            <TextField source="createdAt" itemStyle={{ width: '25%' }} />
            <TextField source="approvedAt" itemStyle={{ width: '25%' }} />
            <TextField source="paidAt" itemStyle={{ width: '25%' }} />
            <TextField source="refundedAt" itemStyle={{ width: '25%' }} />
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
            <TextField source="sampleDisposalType" itemStyle={{ width: '25%' }} />
            <TextField source="reportFetchingType" itemStyle={{ width: '25%' }} />
            <TextField source="reportNo" itemStyle={{ width: '25%' }} />
            <TextField source="categoryName" itemStyle={{ width: '25%' }} />
            <TextField source="levelName" itemStyle={{ width: '25%' }} />
            <ItemsField source="items" itemStyle={{ width: '100%' }} />
            <TextField source="price" itemStyle={{ width: '25%' }} />
            {/*<TextField source="custServHistory" itemStyle={{ width: '25%' }} />*/}
            <TextField source="agent" itemStyle={{ width: '25%' }} />
            {/*<TextField source="testers" itemStyle={{ width: '25%' }} />*/}
            <TextField source="agentMsg" itemStyle={{ width: '25%' }} />
            <TextField source="keeperMsg" itemStyle={{ width: '25%' }} />
            <TextField source="ShippingInfo" itemStyle={{ width: '25%' }} />
            <ImageField source="descImages" addLabel label="下单图片" itemStyle={{ width: '100%' }} />
            <ImageField source="sampleImages" addLabel label="样品图片" itemStyle={{ width: '25%' }} />
            <ImageField source="testingImages" addLabel label="检验图片" itemStyle={{ width: '100%' }} />
        </GridShowLayout>
    </Show>
);
