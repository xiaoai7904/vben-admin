import { defHttp } from '/@/utils/http/axios';
import { IUsdtListItem, IUsdtAdd } from './model/usdtModel';

enum Api {
  GetList = '/back/customer/query',
  Add = '/back/customer/add',
  Edit = '/back/customer/edit',
  Del = '/back/customer/del',
}

export const getCustomerListApi = (params) => {
  return defHttp.post<IUsdtListItem>({ url: Api.GetList, params });
};

export const addCustomerApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.Add, params });
};

export const EditCustomerApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.Edit, params });
};

export const DelCustomerApi = (params) => {
  return defHttp.post({ url: Api.Del, params });
};
