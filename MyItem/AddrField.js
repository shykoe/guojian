import React from 'react';

const AddrField = ({ record }) => {
  const addr = record.clientContactAddress;
  const generalAddress = addr.province + (addr.city || '') +
                          (addr.district || '');
  const specificAddress = [addr.street].join(', ');
  const address = [
    addr.name,
    addr.tel,
    generalAddress,
    specificAddress
  ].join(', ');

  return(
    <span>
    	{address}
    </span>
  );
};

AddrField.defaultProps = {
  addLabel: true,
};

export default AddrField;
