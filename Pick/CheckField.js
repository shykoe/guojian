import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';
import { choices } from '../MyItem/TypeDefine';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const CheckField = ({ record, translate,detail }) => {
    if(detail){
        return(
        <span style={styles.main}>
            {record.InsItems.map(item => (
                <Chip key={item} style={styles.chip}>
                    {choices.find(s => s.id === item).Dtype}
                </Chip>
            ))}
        </span>);
    }
    return(
    <span style={styles.main}>
        {record.InsItems.map(item => (
            <Chip key={item} style={styles.chip}>
                {choices.find(s => s.id === item).Dtype.split(":")[0]}
            </Chip>
        ))}
    </span>);
};

const TranslatedCheckField = translate(CheckField);

TranslatedCheckField.defaultProps = {
    addLabel: true,
    source: 'InsItems',
    detail:false,
};

export default TranslatedCheckField;