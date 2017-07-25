import React from 'react';

const styles = {
  main: { display: 'flex', flexWrap: 'wrap' },
  item: { margin: '0 30px 0 0' }
};

const ItemsField = ({ record }) => {
  const items = (record.items || []).map(item => {
    let verdict;
    if (item.verdict === undefined) {
      verdict = '未检验';
    } else if (item.verdict) {
      verdict = '合格';
    } else {
      verdict = '不合格';
    }
    return <div key={item.name} style={styles.item}>{item.name}: {verdict}</div>
  });

  return(
    <div style={styles.main}>
      {items}
    </div>
  );
};

ItemsField.defaultProps = {
  addLabel: true,
};

export default ItemsField;
