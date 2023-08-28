// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const orderState = {
  '-1': '下单失败',
  0: '未支付',
  1: '支付成功',
  2: '支付失败',
};

export const opState = {
  0: '待确认',
  1: '用户确认',
  2: '系统确认',
  3: '人工确认',
};

export const columns: BasicColumn[] = [
  {
    title: '订单号',
    dataIndex: 'id',
    width: 220,
  },
  {
    title: '转账hash',
    dataIndex: 'transactionId',
  },
  {
    title: '用户ID',
    dataIndex: 'userId',
    width: 200,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '订单金额',
    dataIndex: 'amount',
  },
  {
    title: '充值到账金额',
    dataIndex: 'cash',
  },
  {
    title: 'U兑INR平台价格',
    dataIndex: 'price',
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
  },
  {
    title: '收款钱包地址',
    dataIndex: 'walletAddr',
    width: 300,
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
  },
  {
    title: '操作状态',
    dataIndex: 'op',
  },
  {
    title: '图片',
    dataIndex: 'image',
  },
  {
    title: '提交时间',
    dataIndex: 'actionTime',
    width: 180,
  },
  {
    title: '审核确认时间',
    dataIndex: 'checkTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userId',
    label: '用户ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'transactionId',
    label: '转账Hash',
    component: 'Input',
    colProps: { span: 8 },
  },
];
