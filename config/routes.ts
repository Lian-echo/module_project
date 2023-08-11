export default [
  {
    path: "/",
    redirect: "/personManagement/village",
    component: "@/pages/personManagement/village",
    title: "成员管理",
  },
  {
    path: "/login",
    component: "@/pages/login/index.tsx",
    title: "登陆",
  },
  {
    path: "/largeScreen",
    title: "可视化大屏",
    component: "@/pages/largeScreen/index.tsx",
  },
  {
    path: "/",
    component: "@/layouts/index",
    routes: [
      {
        path: "/personManagement",
        title: "成员管理",
        icon: "TeamOutlined",
        routes: [
          {
            key: "2s",
            path: "/personManagement/village",
            component: "@/pages/personManagement/village",
            title: "村户管理",
          },
          {
            key: "3s",
            path: "/personManagement/operate",
            component: "@/pages/personManagement/operate",
            title: "运营中心管理",
          },
        ],
      },
      {
        path: "/userManage",
        component: "@/pages/userManage",
        title: "文章管理",
        icon: "EditOutlined",
      },
      {
        path: "/userManage",
        component: "@/pages/userManage",
        title: "传统建筑",
        icon: "HomeOutlined",
      },
      {
        path: "/userManage",
        component: "@/pages/userManage",
        title: "数字导览",
        icon: "DragOutlined",
      },
      {
        path: "/feedback",
        title: "群众反馈",
        icon: "FileDoneOutlined",
        routes: [
          {
            key: "4s",
            path: "/feedback/tourist",
            component: "@/pages/feedback/tourist",
            title: "游客反馈",
          },
          {
            key: "5s",
            path: "/feedback/village",
            component: "@/pages/feedback/village",
            title: "村户反馈",
          },
        ],
      },
      {
        path: "/userManage",
        component: "@/pages/userManage",
        title: "明信片管理",
        icon: "FileImageOutlined",
      },
      {
        path: "/userManage",
        component: "@/pages/userManage",
        title: "用户管理",
        icon: "TeamOutlined",
      },
      {
        path: "/userManage",
        component: "@/pages/userManage",
        title: "系统设置",
        icon: "SettingOutlined",
      },

      {
        component: "@/pages/404",
      },
    ],
  },
];
