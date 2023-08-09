import { defHttp } from '/@/utils/http/axios';
enum Api {
  GetPlayerList = '/back/users/list',
  PlayerRecharge = '/back/users/list_recharge',
  UpdatePlayerWallet = '/back/users/update_wallet',
  updatePlayerStatus = '/back/users/update_state',
}

export const getPlayerListApi = (params) => {
  return defHttp.post({ url: Api.GetPlayerList, params });
};

export const playerRechargeApi = (params) => {
  return defHttp.post({ url: Api.PlayerRecharge, params });
};

export const updatePlayerWalletApi = (params) => {
  return defHttp.post({ url: Api.UpdatePlayerWallet, params });
};

export const updatePlayerStatusApi = (params) => {
  return defHttp.post({ url: Api.updatePlayerStatus, params });
};
