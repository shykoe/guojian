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
import { ProductType,TestCriteria, PriceField, StatusSelect, MsgField } from './WorkSpace';
import { CheckboxGr, Pppp } from './CheckBox';
import { ExpressNum } from './ExpressNum';
import OrderFilter from '../Utils/OrderFilter';
import StatusField from './StatusField';
import AddrField from './AddrField';
import ItemsField from './ItemsField';
import CustServField from './CustServField';
import TestersField from './TestersField';
import ShippingField from './ShippingField';
import SampleDisposalTypeField from './SampleDisposalTypeField';
import ReportFetchingTypeField from './ReportFetchingTypeField'
import UnpickButton from './UnpickButton';
import { asteroid } from '../asteroid';

export const MyItemIcon = Icon;

const rowStyle = (record) => {
    if (record.finished === true) return { backgroundColor: '#dfd' };
    return {};
};

export const MyItemList = ({ ...props }) => (
    <List {...props} filters={<OrderFilter />} perPage={25} sort={{ field: 'id', order: 'DESC' }}>
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
                    <StatusField/>
                    <EditButton label='编辑' addLabel/>
                    <UnpickButton/>
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
                  <StatusSelect addLabel label="status" itemStyle={{ width: '100%' }} />
                  <ProductType categories={this.state} addLabel label="categoryName" itemStyle={{ width: '100%' }} />
                  <TestCriteria categories={this.state} addLabel label="levelName" itemStyle={{ width: '100%' }} />
                  <CheckboxGr
                          source="items"
                          categories={this.state}
                          optionText="name"
                          optionValue="id"
                          itemStyle={{ width: '100%' }}
                      />
                  <PriceField itemStyle={{ width: '100%' }} />
                  <MsgField itemStyle={{ width: '100%' }} />
                  <ExpressNum itemStyle={{ width: '100%' }} />
              </GridForm>
          </Edit>
      );
    }
}
