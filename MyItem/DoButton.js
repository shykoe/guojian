import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';
class DoButton extends Component {
	dealText = (record) =>{
	switch(record.status){
		case 1:
			return "订单未认领";
		case 2:
			return "订单已认领";
		case 3:
			return "订单被拒绝";
		case 4:
			return "订单审核通过";
		case 5:
			return "订单关闭";
		case 6:
			return "已支付";
		case 7:
			return "样品审核通过";		
		case 8:
			return "样品审核未通过";
		case 9:
			return "检测任务已分配";
		case 10:
			return "检测完成";
		case 11:
			return "检测报告已寄出";
		case 12:
			return "订单完成";
		case 13:
			return "已退款";
		}	
	};
    render() {
    	const { record } = this.props;
    	const Text = this.dealText(record);
    	const status = record.status;
    	if(status === 2 || status === 3 || status === 4 || status === 6 || status === 8 || status === 10){
	        return (
	            <span>

	                <RaisedButton containerElement={ <Link to={ `/MyItem/${record.id}`} /> }  primary={true} label={Text}/>

	            </span>
	        
	        );
    	}
    	else{
	        return (
	            <span>
	               订单完成
	            </span>
	        );
    	}
    }
}
export default connect(null, null)(DoButton);