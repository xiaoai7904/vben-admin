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
