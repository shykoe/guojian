import React from 'react';

const styles = {
  main: { display: 'flex', flexWrap: 'wrap' },
  item: { margin: '0 30px 0 0' }
};

const TestProgressField = ({ record }) => {
  let total = 0;
  let tested = 0;
  record.items.forEach(
    (item) => {
      total += 1;
      if (item.verdict !== undefined) {
        tested += 1;
      }
    }
  );

  return (<span style={styles.main}>{tested}/{total}</span>);
};

TestProgressField.defaultProps = {
  addLabel: true,
};

export default TestProgressField;
