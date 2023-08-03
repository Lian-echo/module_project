const BreadModel = {
  // 调用model的时候，通过命名空间调用，不要和其他的model同名
  namespace: 'breadcrumb',

  // 状态，跟react中的state类似，和redux中保存的state一样
  state: {
    breadList: localStorage.labelList ? JSON.parse(localStorage.labelList) : [],
  },

  // 调用服务端接口，获取数据，处理异步逻辑,触发时机是dispatch
  effects: {
    // *fetchTags({ payload, callback }, { put, call，select }) {}, select 的参数是一个函数，函数接收的参数是所有model的状态，该条语句的接收值是函数的返回值
  },

  //  同步更新 state 修改状态，唯一可以修改 state 的地方,触发时机是dispatch
  reducers: {},

  //当数据需要从服务器获取时，需要发起异步请求，请求到数据之后，通过调用 Reducers更新数据到全局state
  subscriptions: {}, // 订阅数据源
  // 该选项中的函数自定义命名?函数的触发时机是初始时，主要用来初始化模块状态或者做一些准备性工作
  // 注意：subscription 需要返回 unlisten 方法，用于取消数据订阅。
};
export default BreadModel;
