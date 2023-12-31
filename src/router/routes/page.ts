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
      roles: [1, 2] as any,
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
      roles: [1] as any,
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
      roles: [1, 2] as any,
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
      roles: [1] as any,
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
      roles: [1, 2] as any,
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
      roles: [1] as any,
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
    path: '/agent',
    name: 'Agent',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:usergroup-add-outlined',
      title: '代理分润管理',
      roles: [1, 2] as any,
    },
    children: [
      {
        path: '/agent-page',
        name: 'AgentPage',
        meta: {
          title: '代理分润管理',
        },
        component: () => import('/@/views/pages/agent/Agent.vue'),
      },
    ],
  },
  {
    path: '/banner',
    name: 'Banner',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:picture-outlined',
      title: 'Banner设置',
      roles: [1, 2] as any,
    },
    children: [
      {
        path: '/banner-page',
        name: 'BannerPage',
        meta: {
          title: 'Banner设置',
        },
        component: () => import('/@/views/pages/banner/Banner.vue'),
      },
    ],
  },
  {
    path: '/customer',
    name: 'Customer',
    component: LAYOUT,
    meta: {
      orderNo: 10000,
      icon: 'ant-design:comment-outlined',
      title: '客服设置',
      roles: [1, 2] as any,
    },
    children: [
      {
        path: '/customer-page',
        name: 'CustomerPage',
        meta: {
          title: '客服设置',
        },
        component: () => import('/@/views/pages/customer/Customer.vue'),
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
      roles: [1] as any,
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
      {
        path: '/test-page',
        name: 'TestPage',
        meta: {
          title: '测试页面',
        },
        component: () => import('/@/views/pages/test/Test.vue'),
      },
    ],
  },
];

export default pageRouter;
