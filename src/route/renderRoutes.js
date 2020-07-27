import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {getStorage} from "../tools/common";
const renderRoutes = (routes, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
          <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={(props) => {
                let authed = getStorage('login')
                //已登录 或者 访问路径是/login，则直接返回当前组件
                if (authed || route.path === '/login') {
                  return <route.component {...props} {...extraProps} route={route} />
                }
                //否则重定向到/login
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
              }}
          />
      ))}
    </Switch>
) : null

export default renderRoutes
