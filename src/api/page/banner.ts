import { defHttp } from '/@/utils/http/axios';
import { IUsdtListItem, IUsdtAdd } from './model/usdtModel';
enum Api {
  GetBannertList = '/back/banner/query',
  AddBanner = '/back/banner/add',
  EditUsdt = '/back/banner/edit',
  DelBanner = '/back/banner/del',
}

export const getBannerListApi = (params) => {
  return defHttp.post<IUsdtListItem>({ url: Api.GetBannertList, params });
};

export const addBannerApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.AddBanner, params });
};

export const EditBannerApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.EditUsdt, params });
};

export const DelBannerApi = (params) => {
  return defHttp.post({ url: Api.DelBanner, params });
};
