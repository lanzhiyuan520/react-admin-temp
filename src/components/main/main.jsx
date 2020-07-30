import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Route,Redirect } from "react-router-dom"
import RouterMaps from '../../route/routerMaps.js'

import './main.scss'

const Main = (props) => {
  const history = useHistory();
  const router = RouterMaps.filter(routeItem => routeItem.path === '/home')
  const routerList = router[0].routes
  const pathname = history.location.pathname

  useEffect(() => {
  })

  return (
      <div className='main-content' id='main'>
        <>
        {
          (pathname === '/home' || pathname === '/home/')?
              <Redirect to='/home/index' />
              :
              routerList.map(item => {
                return (
                    <Route key={item.path} path={item.path} component={item.component}></Route>
                )
              })
        }
      </>
      </div>
  )
}

export default Main
