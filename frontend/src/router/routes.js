export const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView.vue'),
    /*
     * В шаблонах использована одна и та же страница,
     * на которой меняется лишь часть контента
     * в зависимости от выбранной вкладки.
     *
     * Поэтому здесь разумно использовать дочерние маршруты.
     */
    children: [
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/OrdersView.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue'),
      },
    ],
  },
];
