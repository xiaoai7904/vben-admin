// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'title',
  },
  {
    title: '图片',
    dataIndex: 'image',
  },
  {
    title: '链接',
    dataIndex: 'linkurl',
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
    field: 'title',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const UsdtModalFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '名称',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入名称',
      },
    ],
  },
  {
    field: 'linkurl',
    label: '跳转链接',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入跳转链接',
      },
    ],
  },
  {
    field: 'sort',
    label: '排序',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入排序',
      },
    ],
  },
  {
    field: 'image',
    label: '图片',
    component: 'Upload',
    // rules: [
    //   {
    //     required: true,
    //     message: '请上传图片',
    //   },
    // ],
    componentProps: {
      api: uploadApi,
    },
  },
];
