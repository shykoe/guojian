import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import { asteroid } from '../asteroid';
import {AcceptApply as AcceptApplyAction } from './acceptAction'

class AgentField extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    componentWillMount(){
        asteroid.call('agent.get').then(data=>{ this.setState({ agent: data })} );
    }
    handleAccept = () => {
        const { AcceptApply, record ,username } = this.props;
        AcceptApply(record.id, username);
    }
    render() {
        const { record } = this.props;
        var agentName;
        if(record.agent && this.state.agent){
            agentName = this.state.agent.find((item)=>(item._id == record.agent));
        }
        if(agentName){
            agentName = agentName.name;
        }
        return (
            <div>
                <Chip>
                {agentName}
                </Chip>
            </div>
        );
    }
}

export default AgentField;
