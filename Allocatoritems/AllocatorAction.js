import React from 'react';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FilterButton from './FilterButton';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

class AllocatoritemsActions extends React.Component{
	render() {
		const { resource, filters, displayedFilters, filterValues, basePath, showFilter, refresh, hideFilter } = this.props;
		return(
    	<CardActions style={cardActionStyle}>
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        <FlatButton primary label="刷新" onClick={refresh} icon={<NavigationRefresh />} />
        <FilterButton showFilter={showFilter}  />
        {/* Add your custom actions */}
    	</CardActions>
    );
	}
}

export default AllocatoritemsActions;
