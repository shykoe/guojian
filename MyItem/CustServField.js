import React from 'react';

const CustServField = ({ record }) => {
  const history = [];
  if (record.activeCustServRequest) {
    history.push({
      request: record.activeCustServRequest
    });
  }
  if (record.CustServHistory) {
    for (const item of record.CustServHistory) {
      history.push({
        request: item.request,
        reply: item.reply
      });
    }
  }

  const items = history.map(item => {
    return (
      <div>
        <div>售后要求: {history.request}</div>
        <div>答复: {history.reply || ''}</div>
      </div>
    );
  });

  return(
    <div>
      {items}
    </div>
  );
};

CustServField.defaultProps = {
  addLabel: true,
};

export default CustServField;
