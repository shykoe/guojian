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
import AcceptButton from './acceptButton';
import Icon from 'material-ui/svg-icons/action/event';

const rowStyle = (record) => {
    if (record.status === 'Accepted') return { backgroundColor: '#dfd' };
    if (record.status === 'pending') return { backgroundColor: '#ffd' };
    if (record.status === 'Rejected') return { backgroundColor: '#fdd' };
    return {};
};
export const ApplyIcon = Icon;

export const ApplyList = ({ ...props }) => (
    <List {...props} perPage={5} sort={{ field: 'published_at', order: 'DESC' }} filter={{ispicked:false}}  >
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
            <TextField source="id"  style={{ display: 'inline-block' }} />
            <TextField source="sampleName"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="sampleProducer" />
            <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
            <DateField source="deadline" style={{ fontStyle: 'italic' }} />
            <TextField source="clientName" />
            <TextField source="sampleType" />
            <TextField source="clientContactPhone" style={{ display: 'inline-block' }} />
            <TextField source="clientContactName" style={{ display: 'inline-block' }} />
            <TextField source="clientContactAddress.phone" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="clientContactAddress.phone" />
            <TextField source="Manufacturer" /><TextField source="CommissionedUnit" /><TextField source="KindofTest" />
            <TextField source="Product" />
        </SimpleShowLayout>
    </Show>
);