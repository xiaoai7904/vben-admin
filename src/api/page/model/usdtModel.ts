export interface IUsdtListItem {
  id: number;
  name: string;
  addr: string;
  img: string;
  balance: number;
  state: number;
  create_time: string;
  update_time: string;
}

export interface IUsdtAdd {
  name: string;
  addr: string;
  img: string;
}
