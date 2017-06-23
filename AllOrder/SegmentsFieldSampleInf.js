import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest'; 

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

 /*  
sampleType
sampleLevel
sampleBrand
sampleNum
 */

const SegmentsFieldSampleInf = ({ record, translate }) => {
    //console.log(record);
    return(
    <span style={styles.main}>  
            <Chip  style={styles.chip}>
                {record.sampleType}
            </Chip> 
             <Chip  style={styles.chip}>
                {record.sampleLevel}
            </Chip> 
             <Chip style={styles.chip}>
                {record.sampleBrand}
            </Chip>  
             <Chip style={styles.chip}>
                {record.sampleNum}
            </Chip> 
    </span>
    ) ;
};

const TranslatedSegmentsField = translate(SegmentsFieldSampleInf);

TranslatedSegmentsField.defaultProps = {
    addLabel: true,
    source: 'sampleInf',
};

export default TranslatedSegmentsField;
