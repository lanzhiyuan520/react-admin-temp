import React,{ useEffect } from 'react'
import './leftMenu.scss'
import { Menu } from 'antd';
import { useSelector } from 'react-redux'
import { getChildrenRoutes } from "../../tools/common";
import { useHistory } from 'react-router-dom';
import classNames from 'classnames'
import logoImg from '../../static/img/logo.png'
const { SubMenu } = Menu;

const LefeMenu = props => {
  const history = useHistory();
  const global = useSelector(state => state.global);
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
        <div className="logo-wrap">
          <div className="logo">
            <img src={logoImg} alt=""/>
          </div>
          <div className={classNames({
            'logo-text':true,
            'none':!global.isShowLeftMenu
          })}>LanAdmin</div>
        </div>
        <div className="menu">
          <Menu
              style={{ width: '100%' }}
              selectedKeys={[getPathname()]}
              mode="inline"
              onClick={goPage}
          >
            {
              menus.map(routeItem => {
                if (!routeItem.routes) {
                  return (
                      <Menu.Item key={routeItem.path} icon={<routeItem.icon />}>
                        {window.$t(routeItem.title)}
                      </Menu.Item>
                  )
                } else {
                  return (
                      <SubMenu key={routeItem.path} title={window.$t(routeItem.title)} icon={<routeItem.icon />} >
                        {
                          routeItem.routes.map(childItem => {
                            return (
                                <Menu.Item key={childItem.path} icon={<childItem.icon />}>
                                  {window.$t(childItem.title)}
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
