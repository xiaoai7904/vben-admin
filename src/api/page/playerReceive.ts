import { defHttp } from '/@/utils/http/axios';
import { IReceive, IReceiveDetails } from './model/receiveModel';
enum Api {
  GetOrderList = '/back/order/player_collect_query',
  OrderDetails = '/back/order/player_collect_info',
}

export const getPlayerOrderListApi = (params) => {
  return defHttp.post<IReceive>({ url: Api.GetOrderList, params });
};

export const PlayerOrderDetailsApi = (params) => {
  return defHttp.post<IReceiveDetails>({ url: Api.OrderDetails, params });
};
