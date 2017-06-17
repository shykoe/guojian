import  React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';
import { Checkers } from '../MyItem/TypeDefine';
import { asteroid } from '../asteroid';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};
class CheckersField extends Component  {
    componentWillMount(){
        asteroid.call('tester.get').then(data=>{ this.setState({ tester: data })} );
    };
    state = {
    };
    render(){
        const { tester } = this.state;
        const { record } = this.props;
        if(tester == undefined){
            return (<div></div>);
        }
        return(
        <span style={styles.main}>
            {record.tester.map(item => (
                <Chip key={item} style={styles.chip}>
                    {tester.find(i=>i._id ==item).profile.name}
                </Chip>
            ))}
        </span>);
    }
};
const TranslatedCheckersField = translate(CheckersField);

TranslatedCheckersField.defaultProps = {
    addLabel: true,
    source: 'checkers',
    detail:false,
};

export default TranslatedCheckersField;