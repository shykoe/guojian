import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Checkers,checker } from '../MyItem/TypeDefine';
import Checkbox from 'material-ui/Checkbox';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
class AddCheckers extends React.Component{
	componentWillMount(){
		checker.then(data=>{ this.setState({ checker: data })} );
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
    handleCheck = (event, isChecked) => {
    	const { input: { value, onChange } } = this.props;
        //this.props.record.checkers.push(1);
        // if (isChecked) {
        //     onChange([...value, ...[event.target.value]]);
        // } else {
        //     onChange(value.filter(v => (v != event.target.value)));
        // }
    };
    renderCheckbox = ({ input, label }) => {
		//console.log(input)
        //const { input: { value },record } = this.props;
        // var isChecked = false;
        // if(record.checkers.length !== 0){
        // 	isChecked = ( record.checkers.find(i => i === (choice.id)) !== undefined );
        // 	//console.log(isChecked)
        // }
       	// //console.log(record.checkers.length)
       	console.log(input.value)
        return (
            <Checkbox
            	label={label}
            	checked={input.value ? true : false}
            	onCheck={input.onChange}
            />
        );
    }  	
	render(){
		const actions = [
		  <FlatButton
		    label="Ok"
		    primary={true}
		    keyboardFocused={true}
		    onTouchTap={this.handleClose}
		  />,
		];
		const { record } = this.props;		
		console.log(this.props);
		return(
			<div>
			<RaisedButton label="添加质检员" onTouchTap={this.handleOpen} />
			<Dialog
		      title="添加质检员"
		      actions={actions}
		      modal={false}
		      open={this.state.open}
		      onRequestClose={this.handleClose}
		    >
         添加质检员
          { Checkers.map(item => <Field name="checkers" key={item.id} component={this.renderCheckbox} label={item.name}/> ) }
        </Dialog>
			</div>
			);
	}
}
AddCheckers = reduxForm({
  form: 'AddCheckersForm',
  enableReinitialize: true,
})(AddCheckers)
AddCheckers = connect(
  (state,props) => ({
    initialValues: state.admin.Allocatoritems.data[props.index]
  }),             
)(AddCheckers)

export default AddCheckers