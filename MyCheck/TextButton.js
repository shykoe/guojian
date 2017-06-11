import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};
class TextButton extends Component {
	dealText = (record) =>{
	switch(record.status){
		case "审核拒绝":
			return "查看";
		case "待审核":
			return "填写检测结果";
		case "已付款":
			return "添加物流信息";
		case "审核未通过":
			return "添加物流信息";
		case "检测完成":
			return "添加物流信息";
		default:
			return "查看";		
	}
	};
    render() {
    	const { record } = this.props;
    	const Text = this.dealText(record);
    	if(record.finished === false && record.status === '待审核'){
	        return (
	            <span>
	                <RaisedButton containerElement={ <Link to={ `/MyCheck/${record.id}`} /> }  primary={true} label={Text}/>
	            </span>
	        );
    	}
    	else{
	        return (
            <Chip labelColor='#4CAF50' style={styles.chip}>
                完成
            </Chip>
	        );
    	}
    }
}
export default connect(null, null)(TextButton);