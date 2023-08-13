import { defHttp } from '/@/utils/http/axios';
enum Api {
  GetList = '/back/sys/info',
  Update = '/back/sys/edit',
}

export const getSettingConfigApi = (params) => {
  return defHttp.post<any>({ url: Api.GetList, params });
};

export const UpdateSettingConfigApi = (params) => {
  return defHttp.post<any>({ url: Api.Update, params });
};
