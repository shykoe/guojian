import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { translate, changeLocale as changeLocaleAction, ViewTitle } from 'admin-on-rest';
import PropTypes from 'prop-types';
//import { changeTheme as changeThemeAction } from './actions';
import PassWordForm from './PassWordForm';
import {ChangePwd as ChangePwdAction}  from './ChangePwdAction';
import {asteroid} from '../asteroid';
import { showNotification } from 'admin-on-rest';

const styles = {
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};
class UserInfo extends Component {
	constructor(props) {
    super(props);
    this.showResults= this.showResults.bind(this);
}
	showResults = (values) =>  {
	const { ChangePwd,username } = this.props;
	ChangePwd(username,values["currentpwd"],values["newpwd"]);
	/*asteroid.call("users.changepwd",username,values["currentpwd"],values["newpwd"])
	.then(response => {
		console.log(response);
		if (response.error)
		{
			console.log('密码修改失败' + response.error.reason);
			showNotification('密码修改失败' + response.error.reason, 'warning');
		}
		else{
			console.log('密码修改成功');
                showNotification('密码修改成功');
		}
	})
	.catch((e) => {
                console.error(e);
                showNotification('密码修改失败' + e.message.reason, 'warning')
            });
		*/	
	}
	render(){
		const { ChangePwd,username } = this.props;
		return(<div>
	<PassWordForm onSubmit={this.showResults} />
	</div>);
	}
}
UserInfo.propTypes = {
    ChangePwd: PropTypes.func,
    username: PropTypes.string,
};

export default connect(state => ({
    username: state.admin.user.userName // username
  }), {ChangePwd:ChangePwdAction})(translate(UserInfo));
