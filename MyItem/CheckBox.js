import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import Labeled from 'admin-on-rest';
import {productType, productMap, choices} from './TypeDefine';
import { Field, option, formValueSelector, arrayRemoveAll } from 'redux-form';
export class CheckboxGr extends Component {
    handleCheck = (event, isChecked) => {
        const { input: { value, onChange }, categories, categoryName, levelName } = this.props;
        const categorie = categories.Categories;
        const choice = categorie.find((i)=>(i.name==categoryName)).levels.find((i)=>(i.name == levelName));
        const selected = choice.items.filter((item)=>(item.name == event.target.value));
        if (isChecked) {
            onChange([...value, ...selected]);
        } else {
            onChange(value.filter(v => (v.name != event.target.value)));
        }
    };
    renderCheckbox = (choice) => {
        //console.log(this.props);
        const {
            input: { value },
            optionText,
            optionValue,
            options,
        } = this.props;
        const disable = this.props.record.finished || (this.props.record.status != 2);
        const choiceName = React.isValidElement(optionText) ? // eslint-disable-line no-nested-ternary
            React.cloneElement(optionText, { record: choice }) :
            (typeof optionText === 'function' ?
                optionText(choice) :
                choice[optionText]
            );
        return (
            <Checkbox
                key={choice[optionText]}
                checked={value ? value.find(v => (v.name == choice[optionText])) !== undefined : false}
                onCheck={this.handleCheck}
                value={choice[optionText]}
                label={choiceName}
                disabled={disable}
                {...options}
            />
        );
    }
    //fix the bug that the old items in form do not cleared out when the state changed 
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.categoryName != this.props.categoryName || nextProps.levelName != this.props.levelName ){
            this.props.RemoveAll('record-form', 'items');
        }
    }
    render() {
        const { categories, label, resource, source, record, categoryName, levelName, optionValue, value, reset } = this.props;
        const categorie = categories.Categories;
        if(categorie == undefined){
            return(<div></div>)
        }        
        const choice = categorie.find((i)=>(i.name==categoryName)).levels.find((i)=>(i.name == levelName));

        if(choice){
            

            return (
            
                <div>
                    {choice.items.map(this.renderCheckbox)}
                </div>
            
            );
        }
        
        return (
            
                <div>
                    
                </div>
            
        );
    }
}
const selector = formValueSelector('record-form');
CheckboxGr = connect(
  state => {
    const categoryName = selector(state, 'categoryName');
    const levelName = selector(state,'levelName');
    return {categoryName, levelName};
  },{ RemoveAll: arrayRemoveAll }
  )(CheckboxGr)
CheckboxGr.defaultProps = {
    addField: true,
    choices: [],
    options: {},
    optionText: 'name',
    optionValue: 'id',
};

