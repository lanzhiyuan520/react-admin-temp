import React from 'react';
import { Switch,HashRouter} from "react-router-dom"
import renderRoutes from './renderRoutes'
import RouterMaps from './routerMaps'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../store'
import request from '../tools/request'

import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import cn from '../lang/cn'
import en from '../lang/en'

let store = createStore(reducers,applyMiddleware(thunk))

let { global } = store.getState()

React.$http = request

i18n.use(initReactI18next)
    .init({
      resources : {
        en : {
          translation : { ...en }
        },
        zh : {
          translation : { ...cn }
        }
      },
      lng : global.lang,
      fallbackLng : global.lang,
      interpolation: {
        escapeValue: false
      }
    })

let Router = () => {
  const { t } = useTranslation()
  window.$t = t
  return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {renderRoutes(RouterMaps)}
          </Switch>
        </HashRouter>
      </Provider>
  )
}
export default Router
