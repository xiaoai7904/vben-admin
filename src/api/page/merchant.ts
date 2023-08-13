import { defHttp } from '/@/utils/http/axios';
enum Api {
  GetList = '/back/accounts/list',
  ResetMerchantAccount = '/back/account/reset_account',
  DelAccount = '/back/account/del',
  AddAccount = '/back/account/register',
}

export const getMerchantListApi = (params) => {
  return defHttp.post({ url: Api.GetList, params });
};

export const ResetMerchantApi = (params) => {
  return defHttp.post({ url: Api.ResetMerchantAccount, params });
};

export const DelMerchantApi = (params) => {
  return defHttp.post({ url: Api.DelAccount, params });
};

export const AddMerchantApi = (params) => {
  return defHttp.post({ url: Api.AddAccount, params });
};
