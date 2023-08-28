import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';

export const orderState = {
  '-1': '下单失败',
  0: '未支付',
  1: '支付成功',
  2: '支付失败',
};

export const notifyState = {
  0: '未通知 ',
  1: '通知成功',
  2: '通知失败',
};

export const opState = {
  0: '待确认',
  1: '用户确认  ',
  2: '系统确认',
  3: '人工确认',
};

export const columns: BasicColumn[] = [
  {
    title: '平台订单号',
    dataIndex: 'pOrderId',
    width: 200,
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
    title: '金额',
    dataIndex: 'amount',
  },
  {
    title: 'utr',
    dataIndex: 'utr',
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
  },
  {
    title: '操作类型',
    dataIndex: 'op',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
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
    field: 'orderNo',
    label: '订单号',
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
    field: 'utr',
    label: 'UTR',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'orderState',
    label: '订单状态',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: Object.keys(orderState).map((v) => ({ label: orderState[v], value: v, key: v })),
    },
  },
  {
    field: 'timeSelect',
    label: '时间',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
];

export const detailsSchema: DescItem[] = [
  { field: 'pOrderId', label: '平台订单号' },
  { field: 'userId', label: '用户ID' },
  { field: 'phone', label: '手机号' },
  { field: 'amount', label: '金额' },
  { field: 'orderState', label: '订单状态' },
  { field: 'isCheck', label: '是否检查' },
  { field: 'op', label: '操作类型' },
  { field: 'bwallet', label: '交易前余额' },
  { field: 'awallet', label: '交易后余额' },
  { field: 'UTR', label: 'UTR' },
  { field: 'msg', label: '备注' },
  { field: 'createTime', label: '下单时间' },
  { field: 'expireTime', label: '过期时间' },
  { field: 'actionTime', label: '操作时间' },
  { field: 'checkTime', label: '检查时间' },
];
