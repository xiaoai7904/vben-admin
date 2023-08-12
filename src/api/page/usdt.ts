import { defHttp } from '/@/utils/http/axios';
import { IUsdtListItem, IUsdtAdd } from './model/usdtModel';
enum Api {
  GetUsdtList = '/back/wallet/info',
  AddUsdt = '/back/wallet/add',
  EditUsdt = '/back/wallet/edit',
  DelUsdt = '/back/wallet/del',
  Refresh = '/back/wallet/refresh',
}

export const getUsdtListApi = (params) => {
  return defHttp.post<IUsdtListItem>({ url: Api.GetUsdtList, params });
};

export const addUsdApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.AddUsdt, params });
};

export const EditUsdApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.EditUsdt, params });
};

export const DelUsdApi = (params) => {
  return defHttp.post({ url: Api.DelUsdt, params });
};

export const RefreshUsdApi = () => {
  return defHttp.get({ url: Api.Refresh });
};
