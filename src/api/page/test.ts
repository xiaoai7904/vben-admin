import { defHttp } from '/@/utils/http/axios';
enum Api {
  OrderPay = '/api/order/pay',
  orderDraw = '/api/order/draw',
}

export const OrderPayTestApi = (params) => {
  return defHttp.post({ url: Api.OrderPay, params });
};

export const orderDrawTestApi = (params) => {
  return defHttp.post({ url: Api.orderDraw, params });
};
