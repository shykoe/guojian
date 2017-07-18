import React from 'react';

const ReportFetchingTypeField = ({ record }) => {
  return(
    <span>
    	{record.reportFetchingType === 1 ? '自取' : '邮寄'}
    </span>
  );
};

ReportFetchingTypeField.defaultProps = {
  addLabel: true,
  source: 'reportFetchingType',
};

export default ReportFetchingTypeField;
