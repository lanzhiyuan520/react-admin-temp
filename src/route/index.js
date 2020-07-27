import React from 'react';
import { Switch,BrowserRouter} from "react-router-dom"
import renderRoutes from './renderRoutes'
import RouterMaps from './routerMaps'

let Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          {renderRoutes(RouterMaps)}
        </Switch>
      </BrowserRouter>
  )
}
export default Router
