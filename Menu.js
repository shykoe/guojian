import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import { ApplyIcon } from './Apply';
import { MyItemIcon } from './MyItem';
import { PickIcon } from './Pick';
import { MyCheckIcon } from './MyCheck';
import { AitemsIcon } from './Allocatoritems';
import { KeepersIcon } from './Keepers';
import { translate, DashboardMenuItem } from 'admin-on-rest';
import { AddUserIcon } from './AddUser';
import { AllOrderIcon }from './AllOrder';
import {CheckTestIcon} from './CheckTest';
const items = [
    { name: 'ApplyItem', icon: <ApplyIcon />, role: 'agent' },
    { name: 'MyItem', icon: <MyItemIcon />, role: 'agent' },
    { name: 'MyCheck', icon: <MyCheckIcon />, role: 'tester' },
    { name: 'Allocatoritems', icon: <AitemsIcon/>, role: 'assigner' },
    { name: 'Keepers', icon: <KeepersIcon/>, role: 'keeper' },
    { name: 'AddUser', icon: <AddUserIcon />, role: 'admin' } ,
    { name: 'AllOrder', icon: <AllOrderIcon />, role: 'admin' },
    { name: 'CheckTest', icon: <CheckTestIcon />, role: 'admin' }
];
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};
class Menu extends Component{
	render(){
	const {hasDashboard, onMenuTap, translate, logout} = this.props;
	return(
    <div style={styles.main}>
        {hasDashboard && <DashboardMenuItem onTouchTap={onMenuTap} />}
        {items.filter(i=>i.role===this.props.role).map(item => (
            <MenuItem
                key={item.name}
                containerElement={<Link to={`/${item.name}`} />}
                primaryText={translate(`resources.${item.name}.name`, { smart_count: 2 })}
                leftIcon={item.icon}
                onTouchTap={onMenuTap}
            />
        ))}
        <MenuItem
            containerElement={<Link to="/UserInfo" />}
            primaryText={"修改密码"}
            leftIcon={<SettingsIcon />}
            onTouchTap={onMenuTap}
        />
        {logout}
    </div>)
}
};

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
        role: state.admin.user.Role,
    })),
    translate,
);

export default enhance(Menu);
