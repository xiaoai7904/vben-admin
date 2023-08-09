export interface IReceive {
  pOrderId: string;
  mOrderId: string;
  amount: number;
  settleAmount: number;
  orderState: number;
  notifyState: number;
  payTime: string;
  createTime: string;
}

export interface IReceiveDetails {
  pOrderId: string; //平台订单号
  mOrderId: string; //商户订单号
  merchantNo: string; //商户号
  merchantName: string; //商户名称
  amount: number; //下单金额
  settleAmount: number; //结算金额
  notifyUrl: string; //回调URL
  orderState: number; //订单状态  -1-下单失败   0-未支付    1-支付成功   2-支付失败
  notifyState: number; //回调状态  0   未通知    1  通知成功   2  通知失败
  op: number; //操作类型  1  用户确认   2   系统确认   3  人工确认
  bwallet: number; //交易前余额
  awallet: number; //交易后余额
  UPI: string; //UPI
  UTR: string; //UTR
  createTime: string; //下单时间
  playerLockTime: string; //提交UTR时间
  sysExpireTime: string; //超时时间
  userActionTime: string; //确认时间
  sysCheckTime: string; //系统审核时间
}
