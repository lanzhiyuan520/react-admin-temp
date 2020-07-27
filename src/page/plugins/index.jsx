import React from 'react'
import { Route } from "react-router-dom"
import { getChildrenRoutes } from "../../tools/common";

const Plugins = () => {
  const routes = getChildrenRoutes('/home')
  const childRoutes = getChildrenRoutes('/home/plugins',routes[0].routes)[0].routes
  return (
      <>
        {
          childRoutes.map(routeItem => {
            return (
                <Route key={routeItem.path} path={routeItem.path} component={routeItem.component}></Route>
            )
          })
        }
      </>
  )
}

export default Plugins
