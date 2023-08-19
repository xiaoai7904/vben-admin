import { defHttp } from '/@/utils/http/axios';
enum Api {
  GetList = '/back/accounts/list',
  ResetMerchantAccount = '/back/account/reset_account',
  DelAccount = '/back/account/del',
  AddAccount = '/back/account/register',
  Rate = '/back/account/rate_get',
  EditRate = '/back/account/rate_edit',
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

export const RateMerchantApi = (params) => {
  return defHttp.post({ url: Api.Rate, params });
};

export const EditRateMerchantApi = (params) => {
  return defHttp.post({ url: Api.EditRate, params });
};
