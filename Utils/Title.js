import React, { Component } from 'react';
class Title extends Component{
    render(){
        const { record } = this.props;
        const date = new Date(record.createdAt*1000);
        return(<span> { `${record.sampleProducer}于${date.toLocaleDateString()}提交`}</span>);
    }
}
export default Title;