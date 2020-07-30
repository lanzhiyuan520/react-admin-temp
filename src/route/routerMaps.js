import {
  AppstoreOutlined,
  SettingOutlined,
  FileExcelOutlined,
  UsergroupDeleteOutlined
} from '@ant-design/icons';
import Login from '../page/login/login'
import Home from '../page/home/home'
import Index from '../page/index/index'
import HomeIndex from '../page/homeIndex/homeIndex'
import Plugins from '../page/plugins'
import Excel from '../page/plugins/exportExcel/exportExcel'
import User from '../page/user/user'
import ImportExcel from '../page/plugins/importExcel/importExcel'


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
        path : '/home/user',
        name : 'User',
        exact : true,
        title : "用户",
        icon : UsergroupDeleteOutlined,
        component : User
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
          },
          {
            path : '/home/plugins/importExcel',
            name : 'importExcel',
            title : "导入excel",
            icon : FileExcelOutlined,
            component : ImportExcel
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
