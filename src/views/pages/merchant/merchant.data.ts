// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '商户名',
    dataIndex: 'username',
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
    title: '角色',
    dataIndex: 'role',
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
    field: 'username',
    label: '商户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const UsdtModalFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '商户名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入商户名',
      },
    ],
  },
  {
    field: 'password',
    label: '密码',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
  },
  {
    field: 'role',
    label: '角色',
    component: 'Select',
    rules: [
      {
        required: true,
        message: '请选择角色',
      },
    ],
    componentProps: {
      options: [
        {
          label: '管理员',
          value: '1',
          key: '1',
        },
        {
          label: '商户',
          value: '2',
          key: '2',
        },
      ],
    },
  },
];