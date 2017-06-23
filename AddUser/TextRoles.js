import React, { Component } from 'react';
 
import { 
    SelectInput, 
    TextField,
    TextInput
} from 'admin-on-rest';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};
class TextRoles extends Component {
	dealText = (record) =>{
		//console.log('-------------------');
		//console.log(record); 
    switch(record.role){
        case 1:
            return "管理员";
        case 6:
            return "业务员";   
        case 7:
            return "仓库操作员";
        case 8:
            return "检测任务分配员";  
        case 9:
            return "检测员"; 
        case 20:
            return "正常"; 
        case 30:
            return "不可见"; 
        case 31:
            return "已删除";  
    }
};
    render() {
    	const { record } = this.props;
    	const Text = this.dealText(record); 
    	//console.log(Text);
    	return( 
            <span >{Text}</span>
         );
    	 
    }
}
export default (TextRoles);
 //           <span >{Text}</span>