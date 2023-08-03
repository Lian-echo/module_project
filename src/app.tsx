import { history } from 'umi';
let extraRoutes: any;

// 动态添加路由
export function patchRoutes({ routes }: any) {
  // console.log(routes);
  // routes.unshift({
  //   path: '/foo',
  //   exact: true,
  //   component: require('@/pages/foo').default,
  // });
  // console.log(extraRoutes);
  // extraRoutes.map((item: any) => {
  //   routes.unshift({
  //     path: item.path,
  //     component: require('@/pages' + item.component + '.tsx').default,
  //   });
  // });
}

// 覆写 render 会在patchRoutes 之前执行
export function render(oldRender: any) {
  // 模拟从服务器请求获取的 路由
  // fetch('/api/routes')
  //   .then((res) => res.json())
  //   .then((res) => {
  //     extraRoutes = res.routes;
  //     oldRender();
  //   });

  // extraRoutes = [{ path: '/server', component: '/user2' }];
  // 渲染之前，做一些权限的校验
  const isLogin = true;
  if (!isLogin) {
    history.push('/login');
  }
  oldRender();
}

// 在初始加载和路由切换时做一些事情，在patchRoutes 之后执行
export function onRouteChange({
  location,
  routes,
  action,
  matchedRoutes,
}: any) {
  // 用于做卖点统计
  // console.log(location.pathname, '被访问了');
  // console.log(matchedRoutes);

  // 设置标题
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
