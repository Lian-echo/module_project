export default {
  // 调用model的时候，通过命名空间调用，不要和其他的model同名
  namespace: 'dva',

  // 状态，跟react中的state类似，和redux中保存的state一样
  state: {
    tagsList: [],
  },

  // 调用服务端接口，获取数据
  effects: {
    // *fetchTags({ payload, callback }, { put, call }) {},
  },

  // 更新 state
  reducers: {},
};
