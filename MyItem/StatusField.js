import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';
const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};
const dealText = (record) =>{
	switch(record.status){
		case 1:
			return "订单未认领";
		case 2:
			return "订单已认领";
		case 3:
			return "订单被拒绝";
		case 4:
			return "订单审核通过";
		case 5:
			return "订单关闭";
		case 6:
			return "已支付";
		case 7:
			return "样品审核通过";		
		case 8:
			return "样品审核未通过";
		case 9:
			return "检测任务已分配";
		case 10:
			return "检测完成";
		case 11:
			return "检测报告已寄出";
		case 12:
			return "订单完成";
		case 13:
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