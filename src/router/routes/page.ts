import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const pageRouter: AppRouteModule[] = [
  {
    path: '/palyer',
    name: 'Player',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: '玩家管理',
    },
    children: [
      {
        path: '/list',
        name: 'PlayerPage',
        meta: {
          title: '玩家管理',
        },
        component: () => import('/@/views/pages/player/Player.vue'),
      },
    ],
  },
  {
    path: '/merchant',
    name: 'Merchant',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: '商户管理',
    },
    children: [
      {
        path: '/list',
        name: 'MerchantPage',
        meta: {
          title: '商户管理',
        },
        component: () => import('/@/views/pages/merchant/Merchant.vue'),
      },
    ],
  },
  {
    path: '/wallect',
    name: 'Wallect',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: 'USDT钱包管理',
    },
    children: [
      {
        path: '/wallect-usdt',
        name: 'USDTPage',
        meta: {
          title: 'USDT钱包管理',
        },
        component: () => import('/@/views/pages/usdt/Usdt.vue'),
      },
    ],
  },
  {
    path: '/order',
    name: 'Order',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: '商户订单管理',
    },
    children: [
      {
        path: '/in',
        name: 'InOrderPage',
        meta: {
          title: '收款订单',
        },
        component: () => import('/@/views/pages/receive/Receive.vue'),
      },
      {
        path: '/out',
        name: 'OutOrderPage',
        meta: {
          title: '付款订单',
        },
        component: () => import('/@/views/pages/payout/Payout.vue'),
      },
    ],
  },
  {
    path: '/palyer-order',
    name: 'PlayerOrder',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: '玩家订单管理',
    },
    children: [
      {
        path: '/in',
        name: 'PlayerInOrderPage',
        meta: {
          title: '收款订单',
        },
        component: () => import('/@/views/form-design/index.vue'),
      },
      {
        path: '/inr',
        name: 'PlayerInrOrderPage',
        meta: {
          title: 'INR充值订单',
        },
        component: () => import('/@/views/form-design/index.vue'),
      },
      {
        path: '/usdt',
        name: 'PlayerUsdtOrderPage',
        meta: {
          title: 'USDT充值订单',
        },
        component: () => import('/@/views/form-design/index.vue'),
      },
    ],
  },
  {
    path: '/setting',
    name: 'Setting',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: '系统设置',
    },
    children: [
      {
        path: '/setting-page',
        name: 'SettingPage',
        meta: {
          title: '系统设置',
        },
        component: () => import('/@/views/pages/setting/Setting.vue'),
      },
    ],
  },
];

export default pageRouter;
