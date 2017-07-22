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

class AddCheckers extends React.Component{
	componentDidMount(){
		asteroid.call('tester.get').then(data=>{ this.setState({ tester: data })} );
	}
	state = {
		open: false,
	};

  handleOpen = () => {
  	this.setState({open: true});
	};

	handleClose = () => {
  	this.setState({open: false});
	};

  handleUpdate =() =>{
    const { Update, record } = this.props;
    Update('Allocatoritems', record.id, this.props.formData, this.props.record, '/');
    this.setState({open: false});
  }

  renderCheckbox = ({ input, label, userid}) => {
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
      	checked={input.value ? input.value.find(v => v === userid) !== undefined : false}
      	onCheck={handleCheck}
        value = {userid}
        style={{ display: 'block', width: '', margin: '10px 20px' }}
      />
    );
  }

	render() {
		const actions = [
		  <FlatButton
		    label="Ok"
		    primary={true}
		    keyboardFocused={true}
		    onTouchTap={this.handleUpdate}
		  />,
		];
		const { record, initialValues } = this.props;
    const { tester } = this.state;

    if (tester === undefined) {
      return (<div></div>);
    }

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
            { tester.map((item) => <Field name={`${record.id}.tester`} key={item._id} userid={item._id} component={this.renderCheckbox} label={item.name}/> ) }
          </div>
        </Dialog>
  		</div>
		);
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
