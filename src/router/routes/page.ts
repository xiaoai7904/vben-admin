import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const pageRouter: AppRouteModule[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:home-outlined',
      title: '首页',
    },
    children: [
      {
        path: '/dashboard',
        name: 'DashboardPage',
        meta: {
          title: '首页',
        },
        component: () => import('/@/views/dashboard/analysis/index.vue'),
      },
    ],
  },
  {
    path: '/palyer',
    name: 'Player',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:user-switch-outlined',
      title: '玩家管理',
    },
    children: [
      {
        path: '/palyer-list',
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
      icon: 'ant-design:usergroup-add-outlined',
      title: '商户管理',
    },
    children: [
      {
        path: '/merchant-list',
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
      icon: 'ant-design:money-collect-outlined',
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
      icon: 'ant-design:transaction-outlined',
      title: '商户订单管理',
    },
    children: [
      {
        path: '/merchant-in',
        name: 'InOrderPage',
        meta: {
          title: '收款订单',
        },
        component: () => import('/@/views/pages/merchantReceive/Receive.vue'),
      },
      {
        path: '/merchant-out',
        name: 'OutOrderPage',
        meta: {
          title: '付款订单',
        },
        component: () => import('/@/views/pages/merchantPayout/Payout.vue'),
      },
    ],
  },
  {
    path: '/palyer-order',
    name: 'PlayerOrder',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:credit-card-outlined',
      title: '玩家订单管理',
    },
    children: [
      {
        path: '/palyer-in',
        name: 'PlayerInOrderPage',
        meta: {
          title: '收款订单',
        },
        component: () => import('/@/views/pages/playerReceive/Receive.vue'),
      },
      {
        path: '/palyer-inr',
        name: 'PlayerInrOrderPage',
        meta: {
          title: 'INR充值订单',
        },
        component: () => import('/@/views/pages/payerInr/Inr.vue'),
      },
      {
        path: '/palyer-usdt',
        name: 'PlayerUsdtOrderPage',
        meta: {
          title: 'USDT充值订单',
        },
        component: () => import('/@/views/pages/payerUsdt/Usdt.vue'),
      },
    ],
  },
  {
    path: '/setting',
    name: 'Setting',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:tool-outlined',
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
