import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const typeMap: Record<string, string> = {
  1: 'USDT',
  2: 'INR',
};

export const columns: BasicColumn[] = [
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '余额',
    dataIndex: 'wallet',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const rechargeColumns: BasicColumn[] = [
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '充值金额',
    dataIndex: 'cash',
  },
  {
    title: '交易前余额',
    dataIndex: 'bwallet',
  },
  {
    title: '交易后余额',
    dataIndex: 'awallet',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];
