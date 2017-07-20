const fields = {
  userId: '用户ID',
  status: '订单状态',
  createdAt:'下单日期',
  approvedAt: '审核通过日期',
  paidAt: '付款日期',
  refundedAt: '退款日期',
  sampleName: '样品名称',
  sampleProducer: '样品生产厂',
  producerBatch: '样品型号规格',
  sampleType: '样品类别',
  sampleLevel: '样品等级',
  sampleBrand: '样品品牌',
  sampleNum: '样品数量',
  clientName: '客户名',
  clientContactAddress: '联系人地址',
  clientContactIdent: '联系人身份证明',
  clientEconomicType: '委托人经济类型',
  sampleDisposalType: '样品处理方式',
  reportFetchingType: '取报告方式',
  descImages: '下单图片',
  reportNo: '质检报告号',
  categoryName: '产品类别',
  levelName: '性能等级',
  items: '检验项目',
  price: '价格',
  custServHistory: '售后历史',
  agent: '业务员',
  testers: '检验员',
  agentMsg: '业务员备注',
  keeperMsg: '仓库备注',
  ShippingInfo: '物流信息',
  sampleImages: '样品图片',
  testingImages: '检验图片'
};

export const messages = {
    resources: {
        ApplyItem: {
            name: '订单',
            fields
        },
        MyItem: {
            name: '我的订单',
            fields
        },
        Pick: {
            name: '领取任务',
            fields
        },
        MyCheck: {
            name: '我的任务',
            fields
        },
        Allocatoritems: {
            name: '分配任务',
            fields
        },
        Keepers: {
            name: '审核',
            fields
        },
        AddUser: {
            name: '账户管理',
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
        AllOrder: {
            name: '订单',
            fields
        },
        CheckTest: {
            name: '检测录入查看',
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
