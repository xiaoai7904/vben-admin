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

export const AgentRevenueModalColums: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
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
    dataIndex: 'userPhone',
  },
  {
    title: '子用户ID',
    dataIndex: 'childUserId',
  },
  {
    title: '子用户手机号',
    dataIndex: 'childUserPhone',
  },
  {
    title: '金额',
    dataIndex: 'amount',
  },
  {
    title: '收益',
    dataIndex: 'profit',
  },
  {
    title: '等级',
    dataIndex: 'vip',
  },
  {
    title: '点位',
    dataIndex: 'rate',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];
