import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FieldTitle } from 'admin-on-rest';
class ExpressNum extends Component {
    handleBlur = (eventOrValue) => {
        this.props.onBlur(eventOrValue);
        this.props.input.onBlur(eventOrValue);

        /**
         * Necessary because of a React bug on <input type="number">
         * @see https://github.com/facebook/react/issues/1425
         */
        this.handleChange(parseFloat(this.props.input.value));
    }

    handleFocus = (event) => {
        this.props.onFocus(event);
        this.props.input.onFocus(event);
    }

    handleChange = (eventOrValue) => {
        this.props.onChange(eventOrValue);
        this.props.input.onChange(eventOrValue);
    }

    render() {
        const { elStyle, input, label, meta: { touched, error }, options, source, step, resource } = this.props;
        //console.log(this.props.record == "已付款");
        if(this.props.record.status == "已付款" || this.props.record.status === "审核未通过" || this.props.record.status === "检测完成" ){
	        return (
	            <TextField
	                {...input}
	                onBlur={this.handleBlur}
	                onFocus={this.handleFocus}
	                onChange={this.handleChange}
	                type="'text'"
	                step={2}
	                floatingLabelText={<FieldTitle label={label} source={source} resource={resource} />}
	                errorText={touched && error}
	                style={elStyle}
	                defaultValue=""
	                {...options}
	            />
	        );
    	}
    	return(
    		<div></div>)
    }
}

// ExpressNum.propTypes = {
//     addField: PropTypes.bool.isRequired,
//     elStyle: PropTypes.object,
//     input: PropTypes.object,
//     label: PropTypes.string,
//     meta: PropTypes.object,
//     name: PropTypes.string,
//     onBlur: PropTypes.func,
//     onChange: PropTypes.func,
//     onFocus: PropTypes.func,
//     options: PropTypes.object,
//     resource: PropTypes.string,
//     source: PropTypes.string,
//     step: PropTypes.string.isRequired,
//     validate: PropTypes.oneOfType([
//         PropTypes.func,
//         PropTypes.arrayOf(PropTypes.func)
//     ]),
// };

ExpressNum.defaultProps = {
    addField: true,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    options: {},
    step: 'any',
};

export default ExpressNum;
