import { defHttp } from '/@/utils/http/axios';
import { IUsdtListItem, IUsdtAdd } from './model/usdtModel';
enum Api {
  GetAgentList = '/back/level/query',
  Add = '/back/level/add',
  Edit = '/back/level/edit',
  Del = '/back/level/del',
  Revenue = '/back/profit/query',
}

export const getAgentListApi = (params) => {
  return defHttp.post<IUsdtListItem>({ url: Api.GetAgentList, params });
};

export const AddAgentApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.Add, params });
};

export const EditAgentApi = (params) => {
  return defHttp.post<IUsdtAdd>({ url: Api.Edit, params });
};

export const DelAgentApi = (params) => {
  return defHttp.post({ url: Api.Del, params });
};

export const AgentRevenueApi = (params) => {
  return defHttp.post({ url: Api.Revenue, params });
};
