import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';
import { Checkers } from '../MyItem/TypeDefine';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};
const CheckersField = ({ record, translate,detail }) => {
    return(
    <span style={styles.main}>
        {record.checkers.map(item => (
            <Chip key={item} style={styles.chip}>
                {Checkers.find(s => s.id === item).name}
            </Chip>
        ))}
    </span>);
};
const TranslatedCheckersField = translate(CheckersField);

TranslatedCheckersField.defaultProps = {
    addLabel: true,
    source: 'checkers',
    detail:false,
};

export default TranslatedCheckersField;