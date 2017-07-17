import React from 'react';

const styles = {
  main: { display: 'flex', flexWrap: 'wrap' },
};

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
    <span style={styles.main}>
    	{address}
    </span>
  );
};

AddrField.defaultProps = {
  addLabel: true,
};

export default AddrField;
