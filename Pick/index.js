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
import PickButton from './PickButton';
import Icon from 'material-ui/svg-icons/action/event';
import CheckField from './CheckField';
const rowStyle = (record) => {
    if (record.status === 'Accepted') return { backgroundColor: '#dfd' };
    if (record.status === 'pending') return { backgroundColor: '#ffd' };
    if (record.status === 'Rejected') return { backgroundColor: '#fdd' };
    return {};
};
export const PickIcon = Icon;

export const PickList = ({ ...props }) => (
    <List {...props} perPage={25} sort={{ field: 'published_at', order: 'DESC' }} filter={{ispicked:false}}  >
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
                    <TextField source="ProductName" />
                    <DateField source="published_at" style={{ fontStyle: 'italic' }} />
                    <TextField source="CommissionedUnit" />
                    <TextField source="notes" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                    <TextField source="status" />

                    <CheckField style={{maxWidth: '20em'}} />
                    <ShowButton/>
                    <PickButton/>
                </Datagrid>
            }
        />
    </List>
);

export const PickShow = ({ ...props }) => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="id"  style={{ display: 'inline-block' }} />
            <TextField source="ProductName"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="ModelType" style={{ display: 'inline-block', marginLeft: 32    }} />
            <DateField source="published_at" style={{ display: 'inline-block',marginLeft: 32 }} />
            <TextField source="TradeMark" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextField source="ManufactureredDate" style={{ display: 'inline-block',  }}/>
            <TextField source="Contact" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="TelNum" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextField source="Adress" style={{ display: 'inline-block',  }} />
            <TextField source="Manufacturer" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextField source="CommissionedUnit" style={{ display: 'inline-block' }} />
            <TextField source="KindofTest" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="Product" />
            <CheckField style={{maxWidth: '10em'}} detail={true} />
        </SimpleShowLayout>
    </Show>
);
