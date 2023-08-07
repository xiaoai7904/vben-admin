import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const pageRouter: AppRouteModule[] = [
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
        component: () => import('/@/views/form-design/index.vue'),
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
        path: '/order-page',
        name: 'OrderPage',
        meta: {
          title: '商户订单管理',
        },
        component: () => import('/@/views/form-design/index.vue'),
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
        path: '/palyer-order-page',
        name: 'PlayerOrderPage',
        meta: {
          title: '玩家订单管理',
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
        component: () => import('/@/views/form-design/index.vue'),
      },
    ],
  },
];

export default pageRouter;
