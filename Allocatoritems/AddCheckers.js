import React from 'react';
import { crudUpdate } from 'admin-on-rest';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { asteroid } from '../asteroid';
import Checkbox from 'material-ui/Checkbox';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';
import Consts from '../pr-schema/consts';

class AddCheckers extends React.Component{
	componentDidMount(){
		asteroid.call('tester.get').then(data => { this.setState({ testers: data }) });
	}

	state = {
		open: false,
	};

  handleOpen = () => {
  	this.setState({ open: true });
	};

	handleClose = () => {
  	this.setState({ open: false });
	};

  handleUpdate = () => {
    const { Update, record } = this.props;
    Update('Allocatoritems', record.id, this.props.formData, this.props.record, '/');
    this.setState({ open: false });
  };

  renderCheckbox = ({ input, label, testerId }) => {
    const handleCheck = (event, isChecked) => {
      if (isChecked) {
        input.onChange([...input.value, event.target.value]);
      } else {
        input.onChange(input.value.filter(v => (v != event.target.value)));
      }
    };
    return (
      <Checkbox
      	label={label}
      	checked={input.value ? input.value.find(v => v === testerId) !== undefined : false}
      	onCheck={handleCheck}
        value = {testerId}
        style={{ display: 'block', width: '', margin: '10px 20px' }}
      />
    );
  }

	render() {
		const actions = [
		  <FlatButton
		    label="确定"
		    primary
		    keyboardFocused
		    onTouchTap={this.handleUpdate}
		  />,
      <FlatButton
        label="取消"
        onTouchTap={this.handleClose}
      />,
		];
		const { record, initialValues } = this.props;
    const { testers } = this.state;

    if (testers === undefined) {
      return (<div></div>);
    }

    if (record.status === Consts.ORDER_STATUS_SAMPLE_RECEIVED) {
      return (
        <div>
          <RaisedButton label="分配" onTouchTap={this.handleOpen} />
          <Dialog
            title="分配质检员"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <div style={{display: 'flex', flexDirection: 'row'}} >
              { testers.map((item) => <Field name={`${record.id}.testerIds`} key={item._id} testerId={item._id} component={this.renderCheckbox} label={item.name}/> ) }
            </div>
          </Dialog>
        </div>
      );
    } else {
      return null;
    }
	}
}

AddCheckers = reduxForm({
  form: 'AddCheckersForm',
  enableReinitialize: true,
})(AddCheckers)

const selector = formValueSelector('AddCheckersForm');
AddCheckers = connect(
  (state,props) => ({
    initialValues: state.admin.Allocatoritems.data,
    formData: selector(state, props.index)
  }), { Update: crudUpdate }
)(AddCheckers)

export default AddCheckers;
