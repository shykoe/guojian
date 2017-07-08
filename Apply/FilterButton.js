import React from 'react';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { formValueSelector } from 'redux-form';
class FilterButton extends React.Component{
    ontap = () =>{
    	const { fiterVal } = this.props;
    	const { showFilter } = this.props;
    	if(this.props.fiterVal === undefined || this.props.fiterVal === 'all'){
    		showFilter('agent',null);
    	}else{
    		showFilter('agent','all');
    	}
    }
	render(){
		const { icon } = this.props;
		console.log(this.props.fiterVal);

		if(this.props.fiterVal === undefined || this.props.fiterVal === 'all' ){
			return (
				<FlatButton primary label="待领取的订单" onClick={this.ontap} icon={<ToggleCheckBoxOutlineBlank/>} />
				)
		}else{
			return (
				<FlatButton primary label="待领取的订单" onClick={this.ontap} icon={<ToggleCheckBox/>} />
				)
		}
	}
}
const selector = formValueSelector('filterForm');
export default connect(
	(state, props)=>(
		{fiterVal:selector(state,'agent')}
		)
	,null)(FilterButton)