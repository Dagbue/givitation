import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/testimony',
    name: 'testimony',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestimonyView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "about" */ '../views/RequestView.vue')
  },


  {
    path: '/joinNowView',
    name: 'JoinNowView',
    component: () => import(/* webpackChunkName: "about" */ '../views/JoinNowView.vue'),
    meta: { hideNavigation: true },
  },

  {
    path: '/profileView',
    name: 'profileView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
    meta: { hideNavigation: true },
  },

  {
    path: '/viewProfile',
    name: 'viewProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView2.vue'),
    meta: { hideNavigation: true },
  },


  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments-list",
        name: "investmentsList",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/InvestmentsList.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/deposit-requests",
        name: "depositRequests",
        component: () =>
            import(/* webpackChunkName: "depositRequests" */ "../views/Admin/DepositRequests.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/withdrawal-requests",
        name: "withdrawalRequests",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/WithdrawalRequests.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-information",
        name: "userInformation",
        component: () =>
            import(/* webpackChunkName: "userInformation" */ "../views/Admin/UserInformation.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-dashBoard-view",
        name: "userDashBoardView",
        component: () =>
            import(/* webpackChunkName: "UserDashBoardView" */ "../views/Admin/UserDashBoardView.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/change-password-admin",
        name: "changePasswordAdmin",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/ChangePasswordAdmin.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/add-new-user",
        name: "addNewUser",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/AddNewUser.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: '/createProfileView',
        name: 'createProfileView',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/CreateProfileView.vue'),
        meta: { hideNavigation: true },
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
