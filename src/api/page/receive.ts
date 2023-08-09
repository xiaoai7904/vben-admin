import { defHttp } from '/@/utils/http/axios';
import { IReceive, IReceiveDetails } from './model/receiveModel';
enum Api {
  GetOrderList = '/back/order/payin_query',
  OrderDetails = '/back/order/payin_info',
  OrderCheck = '/back/order/payin_check',
  OrderNotify = '/back/order/payin_notify',
}

export const getOrderListApi = (params) => {
  return defHttp.post<IReceive>({ url: Api.GetOrderList, params });
};

export const OrderDetailsApi = (params) => {
  return defHttp.post<IReceiveDetails>({ url: Api.OrderDetails, params });
};

export const OrderCheckApi = (params) => {
  return defHttp.post({ url: Api.OrderCheck, params });
};

export const OrderNotifyApi = (params) => {
  return defHttp.post({ url: Api.OrderNotify, params });
};
