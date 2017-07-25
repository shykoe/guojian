import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    SimpleForm,
    SimpleList,
    SimpleShowLayout,
    TabbedForm,
    TextInput,
    minValue,
    number,
    required,
    translate,
    Labeled,
} from 'admin-on-rest';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { Field, option, formValueSelector } from 'redux-form';
import { reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox'
import { asteroid } from '../asteroid';
import Consts from '../pr-schema/consts';

const renderSelectField = ({ input, label, meta: { touched, error }, children,disabled, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    style={{width: 300}}
    disabled={disabled}
    {...custom}/>
);

const renderTextField = ({ input, label, meta: { touched, error }, disabled, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        disabled={disabled}
        {...input}
        {...custom}
    />
);

const selector = formValueSelector('record-form');

export class ReportNoField extends Component {
  render() {
    const { record, status } = this.props;

    if (record.status >= Consts.ORDER_STATUS_PAID &&
        record.status <= Consts.ORDER_STATUS_COMPLETED &&
        status !== Consts.ORDER_STATUS_REFUNDED) {
      return (
        <Field name="reportNo" component={renderTextField} label="检验报告号" />
      );
    } else {
      return null;
    }
  }
}

ReportNoField = connect(
  state => {
    const status = selector(state, 'status');
    return { status };
})(ReportNoField);

export class ProductType extends Component {
  renderItem = (item) => {
    return (<MenuItem value={item['name']} key={item['name']} primaryText={item['name']} />);
  };

  render() {
    const { record, categories } = this.props;
    if (categories.Categories == undefined) {
        return null;
    }

    if (record.status <= Consts.ORDER_STATUS_CLAIMED) {
      return (
        <Field name="categoryName" component={renderSelectField} label="产品类别" >
          {categories.Categories.map(this.renderItem)}
        </Field>
      );
    } else {
      return null;
    }
  }
}

export class TestCriteria extends Component {
    render() {
        const { record, categories, categoryName } = this.props;

        if (record.status <= Consts.ORDER_STATUS_CLAIMED) {
          const categorie = categories.Categories;
          if (categories.Categories == undefined) {
              return(<div></div>)
          }

          if (categorie.filter((item)=>(item.name == categoryName)).length != 0) {
              return (
                <Field name="levelName" component={renderSelectField} label="性能等级">
                  {categorie.filter((item)=>(item.name == categoryName))[0].levels
                    .map((item) =>{return( <MenuItem value={item.name}  key={item.name} primaryText={item.name} />)} )
                  }
                </Field>
              );
          }
        }

        return null;
    }
}

TestCriteria = connect(
  state => {
    const categoryName = selector(state, 'categoryName');
    return { categoryName };
})(TestCriteria);

export class PriceField extends Component {
  render() {
    const { record } = this.props;

    if (record.status <= Consts.ORDER_STATUS_CLAIMED) {
      return (
        <Field name="price" component={renderTextField} label="报价" />
      );
    } else {
      return null;
    }
  }
}

export class StatusSelect extends Component {
    renderItem = (item) => {
      return (<MenuItem value={item['value']}  key={item['value']} primaryText={item['name']} />);
    };

    render() {
        const { record } = this.props;

        let selectValue;
        switch (record.status) {
          case Consts.ORDER_STATUS_UNCLAIMED:
          case Consts.ORDER_STATUS_CLAIMED:
            selectValue = [
              { name: '审核通过', value: Consts.ORDER_STATUS_APPROVED },
              { name: '审核被拒绝', value: Consts.ORDER_STATUS_REJECTED }
            ];
            break;
          case Consts.ORDER_STATUS_PAID:
            selectValue = [
              { name: '已安排物流', value: Consts.ORDER_STATUS_PROCESSED }
            ];
            break;
          case Consts.ORDER_STATUS_TESTED:
            selectValue = [
              { name: '检验报告已寄出', value: Consts.ORDER_STATUS_REPORT_SHIPPED }
            ];
            break;
          default:
            selectValue = [];
            break;
        }

        if (record.status >= Consts.ORDER_STATUS_PAID) {
          selectValue.push({ name: '退款', value: Consts.ORDER_STATUS_REFUNDED });
        } else {
          selectValue.push({ name: '关闭订单', value: Consts.ORDER_STATUS_CLOSED });
        }

        return (
            <Field name="status" component={renderSelectField} label="订单状态">
              {selectValue.map(this.renderItem)}
            </Field>
        );
    }
}

export class MsgField extends Component {
  render() {
    const { record } = this.props;
    return (
      <Field name="agentMsg" component={renderTextField} label="备注" />
    );
  }
}

export class RejectionReasonField extends Component {
  render() {
    const { record, status } = this.props;

    if (record.status === Consts.ORDER_STATUS_REJECTED || status === Consts.ORDER_STATUS_REJECTED) {
      return (
        <Field name="rejectionReason" component={renderTextField} label="审核拒绝原因" />
      );
    } else {
      return null;
    }
  }
}

RejectionReasonField = connect(
  state => {
    const status = selector(state, 'status');
    return { status };
})(RejectionReasonField);

export class CustServProcField extends Component {
  render() {
    const { record } = this.props;

    if (record.activeCustServRequest) {
      return (
        <div>
          <Field name="activeCustServReply" component={renderTextField} label="售后答复" />
          <span style={{ marginLeft: 20 }}>(售后要求: {record.activeCustServRequest})</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
