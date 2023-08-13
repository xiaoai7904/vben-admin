import { defHttp } from '/@/utils/http/axios';
import { IReceive, IReceiveDetails } from './model/receiveModel';
enum Api {
  GetOrderList = '/back/order/payout_query',
  OrderDetails = '/back/order/payout_info',
  OrderCheck = '/back/order/payout_check',
  OrderNotify = '/back/order/payout_notify',
}

export const getPayoutListApi = (params) => {
  return defHttp.post<IReceive>({ url: Api.GetOrderList, params });
};

export const PayOutDetailsApi = (params) => {
  return defHttp.post<IReceiveDetails>({ url: Api.OrderDetails, params });
};

export const PayoutCheckApi = (params) => {
  return defHttp.post({ url: Api.OrderCheck, params });
};

export const PayoutNotifyApi = (params) => {
  return defHttp.post({ url: Api.OrderNotify, params });
};
