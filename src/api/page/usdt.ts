import { defHttp } from '/@/utils/http/axios';
import { IUsdtListItem, IUsdtAdd } from './model/usdtModel';
enum Api {
  GetUsdtList = '/back/wallet/info',
  AddUsdt = '/back/wallet/add',
  EditUsdt = '/back/wallet/edit',
  DelUsdt = '/back/wallet/del',
  Refresh = '/back/wallet/refresh',
}

export const getUsdtListApi = () => {
  return defHttp.post<IUsdtListItem>({ url: Api.GetUsdtList });
};

export const addUsdApi = () => {
  return defHttp.post<IUsdtAdd>({ url: Api.AddUsdt });
};

export const EditUsdApi = () => {
  return defHttp.post<IUsdtAdd>({ url: Api.AddUsdt });
};

export const DelUsdApi = () => {
  return defHttp.post({ url: Api.DelUsdt });
};

export const RefreshUsdApi = () => {
  return defHttp.get({ url: Api.Refresh });
};
