// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';

export const columns: BasicColumn[] = [
  {
    title: '钱包名称',
    dataIndex: 'name',
  },
  {
    title: '钱包地址',
    dataIndex: 'addr',
    width: 350,
    showSorterTooltip: true,
  },
  {
    title: '钱包二维码',
    dataIndex: 'img',
  },
  {
    title: '余额',
    dataIndex: 'balance',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '充值时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'walletAddr',
    label: '钱包地址',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const UsdtModalFormSchema: FormSchema[] = [
  {
    field: 'name',
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
    field: 'addr',
    label: '地址',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入地址',
      },
    ],
  },
  {
    field: 'imgName',
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
