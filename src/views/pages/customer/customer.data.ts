import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';

export const columns: BasicColumn[] = [
  {
    title: '客服名称',
    dataIndex: 'customerName',
  },
  {
    title: '客服号',
    dataIndex: 'customerNo',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
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
    field: 'customerNo',
    label: '客服号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const UsdtModalFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '客服名称',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入客服名称',
      },
    ],
  },
  {
    field: 'customerNo',
    label: '客服号',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入客服号',
      },
    ],
  },
  {
    field: 'avatar',
    label: '头像',
    component: 'Upload',
    componentProps: {
      api: uploadApi,
    },
  },
];
