/**
 * 存储localStorage
 */
export const setStore = (name: any, content: any) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name: any) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = (name: any) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 存储sessionStorage
 */
export const setStoreSess = (name: any, content: any) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
export const getStoreSess = (name: any) => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除sessionStorage
 */
export const removeStoreSess = (name: any) => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};
