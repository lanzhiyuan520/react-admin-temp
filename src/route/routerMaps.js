import {
  AppstoreOutlined,
  SettingOutlined,
  FileExcelOutlined } from '@ant-design/icons';
import Login from '../page/login/login'
import Home from '../page/home/home'
import Index from '../page/index/index'
import HomeIndex from '../page/homeIndex/homeIndex'
import Plugins from '../page/plugins'
import Excel from '../page/plugins/exportExcel/exportExcel'


export default [
  {
    path : '/',
    exact : true,
    component : Index
  },
  {
    path : '/home',
    name : 'Home',
    title : '首页',
    component : Home,
    routes : [
      {
        path : '/home/index',
        name : 'Index',
        exact : true,
        title : "首页",
        icon : AppstoreOutlined,
        component : HomeIndex
      },
      {
        path : '/home/plugins',
        name : 'plugins',
        title : "插件",
        icon : SettingOutlined,
        component : Plugins,
        routes : [
          {
            path : '/home/plugins/exportExcel',
            name : 'exportExcel',
            title : "导出excel",
            icon : FileExcelOutlined,
            component : Excel
          }
        ]
      }
    ]
  } ,
  {
    path : '/login',
    name : 'Login',
    exact : true,
    title : '登录',
    component : Login
  }
]
