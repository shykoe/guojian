const fields = {
  _id: '订单号',
  userId: '用户ID',
  status: '订单状态',
  createdAt:'下单日期',
  approvedAt: '审核通过日期',
  paidAt: '付款日期',
  refundedAt: '退款日期',
  sampleReceivedAt: '到样日期',
  testedAt: '检验日期',
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
  reportNo: '检验报告号',
  categoryName: '产品类别',
  levelName: '性能等级',
  items: '检验项目',
  price: '价格',
  rejectionReason: '审核拒绝原因',
  custServHistory: '售后历史',
  agent: '业务员',
  testers: '检验员',
  agentMsg: '业务员备注',
  keeperMsg: '仓库备注',
  ShippingInfo: '物流信息',
  sampleImages: '样品图片',
  testingImages: '检验图片',
  sampleInf: '样品信息',
  clientInf: '客户信息',
  contactInf: '联系方式',
  checkers: '质检员',
  tester: '任务分配'
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
                8: '检验任务分配员' ,
                9: '检验员' ,
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
            name: '检验录入查看',
            fields: {
                order: '厂商和样品名',
                user: '检验员',
                orderId: '订单号',
                userId: '检验员ID',
                categoryName: '种类',
                levelName: '等级',
                itemName: '项目',
                requirement: '要求',
                createdAt: '创建时间',
                result: '检验结果',
                verdict: '判定',
            },
        },
    },
};

export default messages;
