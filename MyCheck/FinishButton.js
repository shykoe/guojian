import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { getFormValues } from 'redux-form';
import { asteroid } from '../asteroid';
export class FinishButton extends Component {
	send = ()=>{
		asteroid.call('documents.download',{documentId:'asd'},(error, response)=>{
			console.log(response.fileName);
		})
	} 
    render() {
    	const { record } = this.props;
    	var disabled = false;
    	record.items.forEach(
    		(item)=>{
    				if(Array.isArray(item.requirements))
    				disabled |= item.requirements.length>0 ? false:true;
    				}
    	)
    	disabled = disabled === 1 || (record.status != 9) ? true:false;
    	return(
    		<RaisedButton disabled={disabled} onTouchTap={this.send} label="完成检测"/>)
    }
}
// FinishButton = connect(
//   (state,props) => ({
//     value: getFormValues('testerItems')(state)
//   })            
// )(FinishButton)