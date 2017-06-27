import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { getFormValues } from 'redux-form';
import { asteroid } from '../asteroid';
import fileSaver from 'file-saver';
import { base64ToBlob } from '../Utils/base64_blob';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { Field, reduxForm, formValueSelector, reset  } from 'redux-form';
import { reportInit } from './reportAction';
export class FinishButton extends Component {
    renderField = ({ input, label, type, meta: { touched, error },...custom }) => (
    <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    />)
	send = (e)=>{
		e.preventDefault();
  		const { target } = e;
  		const { record } = this.props;
  		const { _id } = record;
  		console.log(_id);
		var rel = asteroid.call('documents.download',{documentId:_id});
		rel.then((response) =>{
			console.log(response);
			const blob = base64ToBlob(response.base64);
			fileSaver.saveAs(blob, response.fileName);
		});
	};
	componentWillMount(){
		const { record } = this.props;
		var disabled = false;
		asteroid.call('reports.find.orderid',record._id)
		.then((response) =>{
			//console.log(response);
			if(response){				
				disabled |= false;
			}else{
				disabled |= true;
			}
		})
		var finished = true;
    	record.items.forEach(
    		(item)=>{
    				if(Array.isArray(item.requirements))
    				finished &= item.requirements.length>0 ? true:false;
    				}
    	)
    	finished = finished === 1 ? true:false;
    	disabled = disabled === 1 || (record.status != 9) ? true:false;
    	this.setState({disabled: disabled, finished:finished});
	}
	state = {
		open: false,
	};
	handleOpen = () => {
		const { record } = this.props;
		this.props.ResetForm('reportsForm');
		asteroid.call('reports.find.orderid',record._id)
		.then((response)=>{
			if(response){
				this.props.reportInit(response);
			}
			else{
				this.props.reportInit({});
			}
		});
    	this.setState({open: true});
  	};
  	handleClose = () => {
    	this.setState({open: false});
  	};
    handleUpdate =() =>{
    	const { record, value } = this.props;
    	const orderId = record._id;
    	const userName = this.props.user;
    	delete value._id;
    	asteroid.call('reports.upsert', value, orderId, userName);
      	this.setState({open: false});
    }  	  	 
    render() {
    	const { record } = this.props;
		const actions = [
			<FlatButton
			disabled={this.state.disabled}
	        label="生成PDF"
	        primary={true}
	        onTouchTap={this.send}
	      />,
		  <FlatButton
		    label="提交报告"
		    primary={true}
		    keyboardFocused={true}
		    onTouchTap={this.handleUpdate}
		  />,
		];
    	return(
    		<div>
    		<RaisedButton  onTouchTap={this.handleOpen} label="检测报告"/>
    		<Dialog
		      title="检测报告"
		      actions={actions}
		      modal={false}
		      open={this.state.open}
		      onRequestClose={this.handleClose}
		      autoScrollBodyContent={true}
		    >
          	<Field name="ProductName" key="ProductName"  component={this.renderField} label="产品名称"/>
          	<Field name="InspectedBody" key="InspectedBody"  component={this.renderField} label="受检单位"/>
          	<Field name="KindofTest" key="KindofTest"  component={this.renderField} label="检验类别"/>
          	<Field name="ContactAddress" key="ContactAddress"  component={this.renderField} label="联系地址"/>
          	<Field name="zipcode" key="zipcode"  component={this.renderField} label="邮编"/>
          	<Field name="contact" key="contact"  component={this.renderField} label="联系人"/>
          	<Field name="phone" key="phone"  component={this.renderField} label="联系电话"/>
          	<Field name="mobile" key="mobile"  component={this.renderField} label="手机"/>
          	<Field name="ModelType" key="ModelType"  component={this.renderField} label="型号规格"/>
          	<Field name="Manufacturer" key="Manufacturer"  component={this.renderField} label="生产单位"/>
          	<Field name="TradeMark" key="TradeMark"  component={this.renderField} label="商标"/>
          	<Field name="SampleGrade" key="SampleGrade"  component={this.renderField} label="样品等级"/>
          	<Field name="SampleSite" key="SampleSite"  component={this.renderField} label="抽样地点"/>
          	<Field name="SampleBody" key="SampleBody"  component={this.renderField} label="抽样单位"/>
           	<Field name="SampleQuantity" key="SampleQuantity"  component={this.renderField} label="样品数量"/>
           	<Field name="CommissionedUnits" key="CommissionedUnits"  component={this.renderField} label="委托单位"/>
           	<Field name="SamplingCondition" key="SamplingCondition"  component={this.renderField} label="样品状态"/>
			<Field name="ManufacturedLot" key="ManufacturedLot"  component={this.renderField} label="生产日期/批号"/>
			<Field name="SampleDate" key="SampleDate"  component={this.renderField} label="抽样日期"/>
			<Field name="SampleStaff" key="SampleStaff"  component={this.renderField} label="抽样人员"/>
			<Field name="TestPlace" key="TestPlace"  component={this.renderField} label="检测地点"/>
			<Field name="TestDate" key="TestDate"  component={this.renderField} label="检测日期"/>
			<Field name="TestCriteria" key="TestCriteria"  component={this.renderField} label="检测依据"/>
			<Field name="TestConclusion" key="TestConclusion"  component={this.renderField} label="检测结论"/>
			<Field name="Remark" key="Remark"  component={this.renderField} label="备注"/>
        </Dialog>
    		</div>)
    }
}
FinishButton = reduxForm({
  form: 'reportsForm',
  enableReinitialize: true,
})(FinishButton)
FinishButton = connect(
  (state,props) => ({
    initialValues: state.report,
    value:getFormValues('reportsForm')(state),
    user:state.admin.user.userName,
  }),{reportInit:reportInit, ResetForm:reset}             
)(FinishButton)