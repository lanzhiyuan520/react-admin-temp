import React,{ useEffect } from 'react'
import './leftMenu.scss'
import { Menu } from 'antd';

import { getChildrenRoutes } from "../../tools/common";
import { useHistory } from 'react-router-dom';
const { SubMenu } = Menu;

const LefeMenu = props => {
  const history = useHistory();
  const routes = getChildrenRoutes('/home')
  const menus = routes[0].routes || []

  useEffect(() => {
  })
  const getPathname = () => {
    return history.location.pathname
  }
  const goPage = e => {
    if (getPathname() === e.key) return;
    history.push(e.key)
  }

  return (
      <div className='left-menu'>
        <div className="logo-wrap"></div>
        <div className="menu">
          <Menu
              style={{ width: '100%' }}
              defaultSelectedKeys={['/home/index']}
              mode="inline"
              onClick={goPage}
          >
            {
              menus.map(routeItem => {
                if (!routeItem.routes) {
                  return (
                      <Menu.Item key={routeItem.path} icon={<routeItem.icon />}>
                        {routeItem.title}
                      </Menu.Item>
                  )
                } else {
                  return (
                      <SubMenu key={routeItem.path} title={routeItem.title} icon={<routeItem.icon />} >
                        {
                          routeItem.routes.map(childItem => {
                            return (
                                <Menu.Item key={childItem.path} icon={<childItem.icon />}>
                                  {childItem.title}
                                </Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                  )
                }
              })
            }
          </Menu>
        </div>
      </div>
  )
}

export default LefeMenu
