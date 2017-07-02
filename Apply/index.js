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
    SimpleShowLayout,
    TextField,
    Responsive
} from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';
import Chip from 'material-ui/Chip';
import AcceptButton from './acceptButton';
import Icon from 'material-ui/svg-icons/action/event';
import OrderFilter from '../Utils/OrderFilter';
export const ApplyIcon = Icon;

export const ApplyList = ({ ...props }) => (
    <List {...props} perPage={5} filters={<OrderFilter />} sort={{ field: 'published_at', order: 'DESC' }}   >
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
                    <ShowButton/>
                    <AcceptButton />
                </Datagrid>
            }
        />
    </List>
);

export const ApplyShow = ({ ...props }) => (
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