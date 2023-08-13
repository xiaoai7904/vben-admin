import { defHttp } from '/@/utils/http/axios';
enum Api {
  GetList = '/back/order/player_recharge_inr',
}

export const getPlayerInrOrderListApi = (params) => {
  return defHttp.post<any>({ url: Api.GetList, params });
};
