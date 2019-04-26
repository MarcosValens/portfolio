const routes = [
  {
    path: '/',
    component: () => import('layouts/headerLayout.vue'),
    children: [
      {path: '/index', component: () => import('pages/Index.vue')},
      {path: '/skills', component: () => import('pages/Skills.vue')},
      {path: '/portfolio', component: () => import('pages/Portfolio.vue')},
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
