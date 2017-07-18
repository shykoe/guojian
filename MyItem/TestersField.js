import React from 'react';

const styles = {
  main: { display: 'flex', flexWrap: 'wrap' },
  item: { margin: '0 30px 0 0' }
};

const TestersField = ({ record }) => {
  const items = (record.testers || []).map(item => {
    return <div key={item} style={styles.item}>{item}</div>
  });

  return(
    <div style={styles.main}>
      {items}
    </div>
  );
};

TestersField.defaultProps = {
  addLabel: true,
};

export default TestersField;
