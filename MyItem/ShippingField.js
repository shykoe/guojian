import React from 'react';

const ShippingField = ({ record }) => {
  const items = (record.ShippingInfo || []).map(item => {
    return <div key={item.description}>{item.description}: {item.provider} {item.no}</div>
  });

  return(
    <div>
      {items}
    </div>
  );
};

ShippingField.defaultProps = {
  addLabel: true,
};

export default ShippingField;
