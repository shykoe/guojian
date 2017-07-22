import React from 'react';
import PropTypes from 'prop-types';
import {
    EditButton
} from 'admin-on-rest';
import Consts from '../pr-schema/consts';

const KeeperEditButton = ({ ...props }) => {
  if (props.record.status === Consts.ORDER_STATUS_PROCESSED) {
    return <EditButton {...props} />;
  } else {
    return null;
  }
};

KeeperEditButton.propTypes = {
  basePath: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object,
  translate: PropTypes.func.isRequired,
};

export default KeeperEditButton;
