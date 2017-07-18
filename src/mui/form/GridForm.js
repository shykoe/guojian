import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import getDefaultValues from './getDefaultValues';
import FormField from './FormField';
import Toolbar from './Toolbar';

export const GridForm = ({ children, handleSubmit, invalid, record, resource, basePath }) => (
    <form onSubmit={handleSubmit} className="simple-form">
        <div style={{
          padding: '0 1em 1em 1em',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
            {React.Children.map(children, input => input && (
                <div key={input.props.source} style={Object.assign({ marginBottom: 10 }, input.props.style, input.props.itemStyle)} className={`aor-input-${input.props.source}`}>
                    <FormField input={input} resource={resource} record={record} basePath={basePath} />
                </div>
            ))}
        </div>
        <Toolbar invalid={invalid} />
    </form>
);

GridForm.propTypes = {
    ...propTypes,
    children: PropTypes.node,
    defaultValue: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    record: PropTypes.object,
    resource: PropTypes.string,
    basePath: PropTypes.string,
    validate: PropTypes.func,
};

const enhance = compose(
    connect((state, props) => ({
        initialValues: getDefaultValues(state, props),
    })),
    reduxForm({
        form: 'record-form',
        enableReinitialize: true,
    }),
);

export default enhance(GridForm);
