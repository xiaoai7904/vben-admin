import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '平台订单号',
    dataIndex: 'pOrderId',
  },
  {
    title: '商户订单号',
    dataIndex: 'mOrderId',
  },
  {
    title: '下单金额',
    dataIndex: 'amount',
  },
  {
    title: '结算金额',
    dataIndex: 'settleAmount',
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
    title: '创建时间',
    dataIndex: 'create_time',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'update_time',
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
    component: 'DatePicker',
    colProps: { span: 8 },
  },
];
