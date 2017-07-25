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
    GridForm,
    SimpleList,
    GridShowLayout,
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
import { Field, option, reduxForm, formValueSelector } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Consts from '../pr-schema/consts';
import KeepMsg from './KeepMsg';
import OrderFilter from '../Utils/OrderFilter';
import { Title }  from '../Utils';
import KeepAction from './KeepAction';
import StatusField from '../MyItem/StatusField';
import AddrField from '../MyItem/AddrField';
import ItemsField from '../MyItem/ItemsField';
import CustServField from '../MyItem/CustServField';
import TestersField from '../MyItem/TestersField';
import ShippingField from '../MyItem/ShippingField';
import SampleDisposalTypeField from '../MyItem/SampleDisposalTypeField';
import ReportFetchingTypeField from '../MyItem/ReportFetchingTypeField';
import KeeperEditButton from './KeeperEditButton';

export const KeepersIcon = Icon;

export const KeepersList = ({ ...props }) => (
    <List {...props} actions={<KeepAction />} filters={<OrderFilter />} perPage={25} sort={{ field: 'published_at', order: 'DESC' }}   >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.sampleName}
                    secondaryText={record => `${record.sampleProducer} Product`}
                    tertiaryText={record => new Date(record.sampleProducer).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="reportNo" />
                    <DateField source="createdAt" style={{ fontStyle: 'italic' }} />
                    <TextField source="sampleName" />
                    <TextField source="sampleType" />
                    <TextField source="sampleLevel" />
                    <TextField source="clientName" />
                    <StatusField />
                    <TextField source="agent" />
                    <ShowButton />
                    <KeeperEditButton label='审核' addLabel />
                </Datagrid>
            }
        />
    </List>
);

export const KeepersShow = ({ ...props }) => (
    <Show  {...props}>
        <GridShowLayout>
            <TextField source="reportNo" itemStyle={{ width: '25%' }} />
            <TextField source="userId" itemStyle={{ width: '25%' }} />
            <StatusField source="status" itemStyle={{ width: '25%' }} />
            <DateField source="createdAt" itemStyle={{ width: '25%' }} />
            <DateField source="approvedAt" itemStyle={{ width: '25%' }} />
            <DateField source="paidAt" itemStyle={{ width: '25%' }} />
            <DateField source="refundedAt" itemStyle={{ width: '25%' }} />
            <DateField source="sampleReceivedAt" itemStyle={{ width: '25%' }} />
            <DateField source="testedAt" itemStyle={{ width: '25%' }} />
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
            <TextField source="rejectionReason" itemStyle={{ width: '100%' }} />
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

export class KeepersEdit extends Component {
    render(){
        return(
            <Edit title={<Title />} {...this.props} >
                <GridForm>
                    <TextField source="reportNo" itemStyle={{ width: '25%' }} />
                    <TextField source="userId" itemStyle={{ width: '25%' }} />
                    <StatusField source="status" itemStyle={{ width: '25%' }} />
                    <DateField source="createdAt" itemStyle={{ width: '25%' }} />
                    <DateField source="approvedAt" itemStyle={{ width: '25%' }} />
                    <DateField source="paidAt" itemStyle={{ width: '25%' }} />
                    <DateField source="refundedAt" itemStyle={{ width: '25%' }} />
                    <DateField source="sampleReceivedAt" itemStyle={{ width: '25%' }} />
                    <DateField source="testedAt" itemStyle={{ width: '25%' }} />
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
                    <TextField source="rejectionReason" itemStyle={{ width: '100%' }} />
                    <CustServField source="custServHistory" itemStyle={{ width: '100%' }} />
                    <TextField source="agent" itemStyle={{ width: '25%' }} />
                    <TestersField source="testers" itemStyle={{ width: '25%' }} />
                    <TextField source="agentMsg" itemStyle={{ width: '25%' }} />
                    <TextField source="keeperMsg" itemStyle={{ width: '25%' }} />
                    <ShippingField source="ShippingInfo" itemStyle={{ width: '100%' }} />
                    <ImageField source="descImages" addLabel label="下单图片" itemStyle={{ width: '100%' }} />
                    <ImageField source="sampleImages" addLabel label="样品图片" itemStyle={{ width: '100%' }} />
                    <ImageField source="testingImages" addLabel label="检验图片" itemStyle={{ width: '100%' }} />
                    <ImageInput source="pictures" label="Related pictures" accept="image/*" itemStyle={{ width: '100%' }}>
                      <ImageField source="src" title="title" />
                    </ImageInput>
                    <br/>
                    <IsApproved itemStyle={{ width: '100%' }} />
                    <KeepMsg itemStyle={{ width: '100%' }} />
                </GridForm>
            </Edit>
        );
    }
}

class IsApproved extends Component{
    selectValue = [
      { name: '样品审核通过', value: Consts.ORDER_STATUS_SAMPLE_RECEIVED },
      { name: '样品审核未通过', value: Consts.ORDER_STATUS_PAID }
    ];

    renderItem = (item) => {
      return (
        <MenuItem value={item['value']} key={item['value']} primaryText={item['name']} />
      );
    };

    renderSelectField = ({ input, label, meta: { touched, error }, children,disabled, ...custom }) => (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        style={{width: 300}}
        disabled={disabled}
        {...custom}
      />
    );

    render(){
        const { record } = this.props;
        return(
            <Field name="status" component={this.renderSelectField}
              disabled={record.status != Consts.ORDER_STATUS_PROCESSED}
              label="更新订单状态"
            >
              {this.selectValue.map(this.renderItem)}
            </Field>
        )
    }
}
