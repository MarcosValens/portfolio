const routes = [
  {
    path: '/index',
    component: () => import('layouts/headerLayout.vue'),
    children: [
      {path: '/index', component: () => import('pages/Index.vue')},
      {path: '/skills', component: () => import('pages/Skills.vue')},
      {path: '/portfolio', component: () => import('pages/Portfolio.vue')},
    ]
  },
  {
    path: '/',
    component: () => import('layouts/emptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Intro.vue') }
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
