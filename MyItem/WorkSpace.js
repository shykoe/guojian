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
const renderTextField = ({ input, label, meta: { touched, error },disabled, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        disabled={disabled}
        {...input}
        {...custom}
    />
);

export class ProductType extends Component {
    renderItem = (item) =>{ return ( <MenuItem value={item['name']}  key={item['name']} primaryText={item['name']} />)};
    render() {
        const { record, categories, status } = this.props;
        if(categories.Categories == undefined){
            return(<div></div>)
        }
        if(status == 4 && record.status === 2){
            return (    
              <Field name="categoryName" component={renderSelectField} >
              {categories.Categories.map(this.renderItem)}
              </Field>
            
            );
        }
        else{
            return (    
              <Field name="categoryName" disabled={true} component={renderSelectField} >
              {categories.Categories.map(this.renderItem)}
              </Field>
            );
        }

    }
}
const selector = formValueSelector('record-form');
ProductType = connect(
  state => {
    const status = selector(state, 'status')
    return { status };
  }
  )(ProductType)

export class TestCriteria extends Component {

    render() {
        const { record, categories, status } = this.props;
        const categorie = categories.Categories;
        if(categories.Categories == undefined){
            return(<div></div>)
        }        
        if(status == 4 && categorie.filter((item)=>(item.name == this.props.categoryName)).length != 0  && record.status === 2 ){
            return (    
              <Field name="levelName" component={renderSelectField} >
              {categorie.filter((item)=>(item.name == this.props.categoryName))[0].levels
              .map((item) =>{return( <MenuItem value={item.name}  key={item.name} primaryText={item.name} />)} ) 
                }
              </Field>
            
            );
        }
        else if( categorie.filter((item)=>(item.name == this.props.categoryName)).length != 0 ){
            return (    
              <Field name="levelName" disabled={true} component={renderSelectField} >
              {categorie.filter((item)=>(item.name == this.props.categoryName))[0].levels
              .map((item) =>{return( <MenuItem value={item.name}  key={item.name} primaryText={item.name} />)} ) 
                }
              </Field>
            );
        }
        else{
            return(<div></div>)
        }

    }
}

TestCriteria = connect(
  state => {
    const categoryName = selector(state, 'categoryName');
    const status = selector(state, 'status')
    return {categoryName, status};
  }
  )(TestCriteria)
export class PriceField extends Component {

    render() {
        const { status,record } = this.props;
         if(status === 4 && record.status === 2){


            return (    
                <Field name="price" component={renderTextField} label="price"/>
            
            );
        }
        else{
            return(<Field name="price" component={renderTextField} disabled={true} label="price"/>);
        }

    }
}
PriceField = connect(
  state => {
    const status = selector(state, 'status')
    return { status };
  }
  )(PriceField)
export class StatusSelect extends Component {
    renderItem = (item) =>{ return ( <MenuItem value={item['value']}  key={item['value']} primaryText={item['name']} />)};
    selectValue = [{name:'审核通过',value:4}, {name:'审核拒绝',value:3}]
    render() {
        const { record } = this.props;
         if(record.status === 2){
            return (
                <Field name="status" component={renderSelectField} >
                {this.selectValue.map(this.renderItem)}
                </Field>
            );
        }
        if(record.status === 6){
            const selectValue = [{name:'收货物流',value:7}, {name:'退货物流',value:13}]
            return(
                <Field name="status" component={renderSelectField} >
                {selectValue.map(this.renderItem)}
                </Field>
            );
        }
        else{
            return(             
            <Field name="status"  disabled={true} component={renderSelectField} >
            {this.selectValue.map(this.renderItem)}
            </Field>
            )
        }

    }
}
export class MsgField extends Component {

    render() {
        const { status,record } = this.props;
         if((status === 4 || status === 3) && record.status === 2){


            return (    
                <Field name="agentMsg" component={renderTextField} label="agentMsg"/>
            
            );
        }
        else{
            return(<Field name="agentMsg" component={renderTextField} disabled={true} label="agentMsg"/>);
        }

    }
}
MsgField = connect(
  state => {
    const status = selector(state, 'status')
    return { status };
  }
  )(MsgField)
  
