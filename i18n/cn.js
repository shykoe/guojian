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
        },
        AddUser:{
            name:'账户管理',
            fields: {
                username: '账户名',
                password: '密码', 
                role:'角色', 
                reset:'修改角色和密码',
                addusers:'新建 账户', 
                1: '管理员' ,
                6: '业务员' ,
                7: '仓库操作员' , 
                8: '检测任务分配员' , 
                9: '检测员' , 
                20: '正常' , 
                30: '不可见' , 
                31: '已删除' ,
                phone:'电话', 
            },
        },
        AllOrder:{
            name:'订单',
            fields: {
                status: '订单状态',
                sampleName: '样品名称',
                sampleProducer: '样品生产厂',
                producerBatch: '生产批号',
                sampleType: '样品型号规格',
                sampleLevel: '样品质量等级',
                sampleBrand: '样品商标',
                sampleNum: '样品数量',
                clientName: '客户姓名',
                clientContactName: '联系人',
                clientContactPhone: '联系人电话',
                clientContactIdent: '通讯地址',
                clientEconomicType: '经济类型', 
                contactInf:'联系人信息',
                clientInf:'客户信息',
                sampleInf:'样品信息',
            },
        },
        CheckTest:{
            name:'检测录入查看',
            fields: {
                order:'厂商+样品名',
                user:'用户名',
                orderId:'订单号',
                userId:'检测员ID',
                categoryName:'种类',  
                levelName:'等级',
                itemName:'项目',
                requirement :'要求',
                createAt :'创建时间',
                result :'检测结果',
                verdict  :'判定',

            },
        },        
    },
};

export default messages;
