import React from 'react'
import { Route } from "react-router-dom"
import { getCurrentRoutes } from "../../../tools/common";

const Test = () => {
  const childrenRoutes = getCurrentRoutes('/home/plugins/test').routes
  return (
      <div>
        <>
          {
            childrenRoutes.map(routeItem => {
              return (
                  <Route key={routeItem.path} path={routeItem.path} component={routeItem.component}></Route>
              )
            })
          }
        </>
      </div>
  )
}

export default Test
