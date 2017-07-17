import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Labeled from '../input/Labeled';

export const GridShowLayout = ({ basePath, children, record, resource, Sstyle }) => (
    <div style={{
      padding: '0 1em 1em 1em',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
        {Children.map(children, field => (
            <div key={field.props.source} style={{ width: '25%', marginBottom: 10  }} className={`aor-field-${field.props.source}`}>
                {field.props.addLabel ?
                    <Labeled record={record} resource={resource} basePath={basePath} label={field.props.label} source={field.props.source} disabled={false}>{field}</Labeled> :
                    (typeof field.type === 'string' ?
                        field :
                        React.cloneElement(field, { record, resource, basePath })
                    )
                }
            </div>
        ))}
    </div>
);

GridShowLayout.propTypes = {
    basePath: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
};

export default GridShowLayout;
