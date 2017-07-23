import React from 'react';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { formValueSelector } from 'redux-form';

class CsFilterButton extends React.Component{
  ontap = () => {
    const { filterVal, showFilter } = this.props;
    if (this.props.filterVal === undefined || this.props.filterVal === '') {
      showFilter('activeCustServRequest', { $ne: null });
    } else {
      showFilter('activeCustServRequest', '');
    }
  }

  render(){
    const { icon } = this.props;

    if (this.props.filterVal === undefined || this.props.filterVal === '') {
      return (
        <FlatButton primary label="售后待回复的订单" onClick={this.ontap} icon={<ToggleCheckBoxOutlineBlank />} />
      );
    } else {
      return (
        <FlatButton primary label="售后待回复的订单" onClick={this.ontap} icon={<ToggleCheckBox />} />
      );
    }
  }
}

const selector = formValueSelector('filterForm');
export default connect(
  (state, props) => (
    { filterVal: selector(state, 'activeCustServRequest') }
  )
, null)(CsFilterButton);
