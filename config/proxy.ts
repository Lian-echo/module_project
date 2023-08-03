export default {
  dev: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }, // 将请求url里的api去掉
    },
  },
};
