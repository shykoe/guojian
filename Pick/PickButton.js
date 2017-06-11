import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {PickItem as PickItemAction } from './PickAction'
class PickButton extends Component {
    handleAccept = () => {
        const { PickItem, record } = this.props;
        PickItem(record.id, record);
    }
    render() {
    	const { record } = this.props;
    	//console.log(record);
        return (
            <span>
                <RaisedButton onClick={this.handleAccept} primary={true} label="领取"/>
            </span>
        );
    }
}
PickButton.propTypes = {
    AcceptApply: PropTypes.func,
};
export default connect(null, {
	PickItem:PickItemAction
})(PickButton);