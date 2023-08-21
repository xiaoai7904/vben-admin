// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '层级',
    dataIndex: 'level',
  },
  {
    title: '等级',
    dataIndex: 'vip',
  },
  {
    title: '最小',
    dataIndex: 'min',
  },
  {
    title: '最大',
    dataIndex: 'max',
  },
  {
    title: '点位',
    dataIndex: 'rate',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'level',
    label: '层级',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const AgentModalFormSchema: FormSchema[] = [
  {
    field: 'level',
    label: '层级',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入层级',
      },
    ],
  },
  {
    field: 'vip',
    label: '等级',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入等级',
      },
    ],
  },
  {
    field: 'min',
    label: '最小',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入最小值',
      },
    ],
  },
  {
    field: 'max',
    label: '最大',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入最大值',
      },
    ],
  },
  {
    field: 'rate',
    label: '点位',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入点位',
      },
    ],
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
