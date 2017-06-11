import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import { ApplyIcon } from './Apply';
import { MyItemIcon } from './MyItem';
import { PickIcon } from './Pick';
import { MyCheckIcon } from './MyCheck';
import { AitemsIcon } from './Allocatoritems';
import { KeepersIcon } from './Keepers';
import { translate, DashboardMenuItem } from 'admin-on-rest';
const items = [
    { name: 'ApplyItem', icon: <ApplyIcon /> ,role:'agent'},
    { name: 'MyItem', icon: <MyItemIcon />,role:'agent' },
    { name: 'Pick', icon: <PickIcon />,role:'tester' },
    { name: 'MyCheck', icon: <MyCheckIcon />,role:'tester' },
    { name:'Allocatoritems', icon:<AitemsIcon/>, role:'assigner'},
    { name:'Keepers', icon:<KeepersIcon/>, role:'Keeper'}
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