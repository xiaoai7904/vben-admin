import { defHttp } from '/@/utils/http/axios';
enum Api {
  GetList = '/back/order/player_recharge_usdt',
}

export const getPlayerUsdtOrderListApi = (params) => {
  return defHttp.post<any>({ url: Api.GetList, params });
};
