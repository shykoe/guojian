const fields = {'createdAt':'创建于', 'sampleName':'样品名称', 'sampleProducer':'样品生产厂','producerBatch':'样品型号规格','sampleType':'样品类别',
                'sampleLevel':'样品等级', 'sampleBrand':'样品品牌', 'sampleNum':'样品数量', 'clientName':'客户名', 'clientContactName':'联系人姓名',
                'clientContactPhone':'联系人电话', 'clientContactIdent':'联系人通讯地址', 'clientEconomicType':'委托单位经济类型','price':'价格'
                }
export const messages = {
    resources: {
        ApplyItem: {
            name: '订单',
            fields: fields,
        },
        MyItem:{
            name:'我的订单',
            fields: fields,
        },
        Pick:{
            name:'领取任务',
            fields: fields,
        },
        MyCheck:{
            name:'我的任务',
            fields: fields,
        },
         Allocatoritems:{
            name:'分配任务',
            fields: fields,
        },
        Keepers:{
            name:'审核',
            fields:fields
        }
    },
};

export default messages;
