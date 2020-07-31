import { message } from 'antd';
import routerMaps from '../route/routerMaps'
/**
 * 全局提示
 * @param type 提示类型
 * @param text 提示内容
 */
const openMessage = (type='success',text='提示') => {
  message[type](text)
}

/**
 * 缓存获取值
 * @param key
 */
const getStorage = key => {
  return localStorage.getItem(key)
}

/**
 * 缓存内容
 * @param key
 * @param val
 */
const setStorage = (key,val) => {
  localStorage.setItem(key,val)
}

/**
 * 删除缓存内容
 * @param key
 */
const removeStroage = key => {
  localStorage.removeItem(key)
}

/**
 * 获取指定路径下的子路由
 * @param name
 * @returns {*[]}
 */
const getChildrenRoutes = (name,routes = routerMaps) => {
  return routes.filter(routeItem => routeItem.path === name)
}

/**
 * 获取指定路由
 */
const getCurrentRoutes = (name) => {
  let routes = []
  const getRoutes = (routerMaps) => {
    routerMaps.forEach(item => {
      if (name === item.path) {
        routes = item
      }
      if (item.routes) {
        getRoutes(item.routes)
      }
    })
  }
  getRoutes(routerMaps)
  return routes
}


export {
  openMessage,
  getStorage,
  setStorage,
  getChildrenRoutes,
  removeStroage,
  getCurrentRoutes
}
