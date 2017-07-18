import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';
import {
	ORDER_STATUS_UNCLAIMED,
	ORDER_STATUS_CLAIMED,
	ORDER_STATUS_REJECTED,
	ORDER_STATUS_APPROVED,
	ORDER_STATUS_CLOSED,
	ORDER_STATUS_PAID,
	ORDER_STATUS_PROCESSED,
	ORDER_STATUS_SAMPLE_RECEIVED,
	ORDER_STATUS_ASSIGNED,
	ORDER_STATUS_TESTED,
	ORDER_STATUS_REPORT_SHIPPED,
	ORDER_STATUS_COMPLETED,
	ORDER_STATUS_REFUNDED,
} from '../Utils';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const dealText = (record) =>{
	switch(record.status){
		case ORDER_STATUS_UNCLAIMED:
    case ORDER_STATUS_CLAIMED: {
      if (record.agentId) {
        return "订单已认领";
      } else {
        return "订单未认领";
      }
    }
		case ORDER_STATUS_REJECTED:
			return "订单被拒绝";
		case ORDER_STATUS_APPROVED:
			return "订单审核通过";
		case ORDER_STATUS_CLOSED:
			return "订单关闭";
		case ORDER_STATUS_PAID:
			return "已支付";
		case ORDER_STATUS_PROCESSED:
			return "已安排物流";
		case ORDER_STATUS_SAMPLE_RECEIVED:
			return "收到样品";
		case ORDER_STATUS_ASSIGNED:
			return "检测任务已分配";
		case ORDER_STATUS_TESTED:
			return "检测完成";
		case ORDER_STATUS_REPORT_SHIPPED:
			return "检测报告已寄出";
		case ORDER_STATUS_COMPLETED:
			return "订单完成";
		case ORDER_STATUS_REFUNDED:
			return "已退款";
	}
};

const StatusField = ({ record, translate,detail }) => {
    return(
    <span style={styles.main}>
    	{dealText(record)}
    </span>);
};

const TranslatedStatusField = translate(StatusField);

TranslatedStatusField.defaultProps = {
    addLabel: true,
    source: 'status',
    detail:false,
};

export default TranslatedStatusField;
