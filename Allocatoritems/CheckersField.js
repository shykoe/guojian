import  React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';
import { asteroid } from '../asteroid';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

class CheckersField extends Component  {
    render(){
        const { record } = this.props;

        return(
          <span style={styles.main}>
            {(record.testers || []).map(item => (
              <Chip key={item} style={styles.chip}>
                {item}
              </Chip>
            ))}
          </span>
        );
    }
};

const TranslatedCheckersField = translate(CheckersField);

TranslatedCheckersField.defaultProps = {
    addLabel: true,
    source: 'checkers',
    detail:false,
};

export default TranslatedCheckersField;
