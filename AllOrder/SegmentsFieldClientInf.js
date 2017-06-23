import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest'; 

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

/* 
clientName 
clientEconomicType
*/
  
const SegmentsFieldClientInf= ({ record, translate }) => {
    //console.log(record);
    return(
    <span style={styles.main}> 
            <Chip style={styles.chip}>
                {record.clientName}
            </Chip> 
             <Chip  style={styles.chip}>
                {record.clientEconomicType}
            </Chip>   
    </span>
    ) ;
};

const TranslatedSegmentsField = translate(SegmentsFieldClientInf);

TranslatedSegmentsField.defaultProps = {
    addLabel: true,
    source: 'clientInf',
};

export default TranslatedSegmentsField;
