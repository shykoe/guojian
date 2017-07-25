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
    switch(record.roles){
        case 1:
            return "管理员";
        case 2:
            return "业务员";
        case 3:
            return "检验员";     
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
