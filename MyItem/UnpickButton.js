import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {UnPickAction } from './UnpickAction'
class UnpickButton extends Component {
    handleUnpick = () => {
        const { Unpick, record } = this.props;
        Unpick(record._id);
    }
    render() {
    	const { record } = this.props;
        return (
            <span>
                <FlatButton onClick={this.handleUnpick}  primary={true} label="取消领取"/>
            </span>
        );
    }
}
UnpickButton.propTypes = {
    Unpick: PropTypes.func,
};
export default connect(null, {
	Unpick:UnPickAction,
})(UnpickButton);