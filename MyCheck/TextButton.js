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

    render() {
    	const { record } = this.props;
    	

        return (
            <span>
                <RaisedButton containerElement={ <Link to={ `/MyCheck/${record.id}`} /> }  primary={true} label="编辑"/>
            </span>
        );

    }
}
export default connect(null, null)(TextButton);