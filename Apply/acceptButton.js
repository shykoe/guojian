import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {AcceptApply as AcceptApplyAction } from './acceptAction'
class AcceptButton extends Component {
    handleAccept = () => {
        const { AcceptApply, record ,username } = this.props;
        AcceptApply(record.id, username);
    }
    render() {
    	const { record } = this.props;
    	
        return (
            <span>
                <RaisedButton onClick={this.handleAccept} primary={true} label="领取"/>
            </span>
        );
    }
}
AcceptButton.propTypes = {
    AcceptApply: PropTypes.func,
};
function mapStateToProps(state, props){
    return {
        username:state.admin.user.userName
    };
}
export default connect(mapStateToProps, {
	AcceptApply:AcceptApplyAction,
})(AcceptButton);