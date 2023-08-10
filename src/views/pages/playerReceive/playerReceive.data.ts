import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '平台订单号',
    dataIndex: 'pOrderId',
  },
  {
    title: '用户id',
    dataIndex: 'userId',
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
    title: 'UTR',
    dataIndex: 'utr',
  },
  {
    title: '状态',
    dataIndex: 'op',
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
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
    field: 'userId',
    label: '用户id',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'orderNo',
    label: '订单号',
    component: 'Input',
    colProps: { span: 8 },
  },
];
