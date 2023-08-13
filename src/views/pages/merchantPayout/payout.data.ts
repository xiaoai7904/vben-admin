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
    title: '商户订单号',
    dataIndex: 'mOrderId',
    width: 200,
  },
  {
    title: '下单金额',
    dataIndex: 'amount',
  },
  {
    title: '手续费',
    dataIndex: 'fee',
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
  },
  {
    title: '回调状态',
    dataIndex: 'notifyState',
  },
  {
    title: '支付时间',
    dataIndex: 'payTime',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'merchantNo',
    label: '商户号',
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
    field: 'orderState',
    label: '订单状态',
    component: 'Input',
    colProps: { span: 8 },
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
  { field: 'mOrderId', label: '商户订单号' },
  { field: 'merchantNo', label: '商户号' },
  { field: 'merchantName', label: '商户名称' },
  { field: 'amount', label: '下单金额' },
  { field: 'settleAmount', label: '结算金额' },
  { field: 'notifyUrl', label: '回调URL' },
  { field: 'orderState', label: '订单状态' },
  { field: 'notifyState', label: '回调状态' },
  { field: 'op', label: '操作类型' },
  { field: 'bwallet', label: '交易前余额' },
  { field: 'awallet', label: '交易后余额' },
  { field: 'UPI', label: 'UPI' },
  { field: 'UTR', label: 'UTR' },
  { field: 'createTime', label: '下单时间' },
  { field: 'playerLockTime', label: '提交UTR时间' },
  { field: 'sysExpireTime', label: '超时时间' },
  { field: 'userActionTime', label: '确认时间' },
  { field: 'sysCheckTime', label: '系统审核时间' },
];

export const reviewFormSchema: FormSchema[] = [
  {
    field: 'pOrderId',
    label: '平台订单号',
    component: 'Input',
    colProps: { span: 24 },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'orderState',
    label: '审核状态',
    component: 'Select',
    colProps: { span: 24 },
    componentProps: {
      options: [
        {
          label: '成功',
          value: 1,
        },
        {
          label: '失败',
          value: 2,
        },
      ],
    },
  },
  {
    field: 'message',
    label: '审核意见',
    component: 'InputTextArea',
    colProps: { span: 24 },
  },
];
