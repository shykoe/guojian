import React from 'react';

const SampleDisposalTypeField = ({ record }) => {
  return(
    <span>
      {record.sampleDisposalType === 1 ? '异议期满后取回' : '委托公司自行处理'}
    </span>
  );
};

SampleDisposalTypeField.defaultProps = {
  addLabel: true,
  source: 'sampleDisposalType',
};

export default SampleDisposalTypeField;
