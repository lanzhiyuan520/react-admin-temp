import React from 'react';
import { Switch,BrowserRouter} from "react-router-dom"
import renderRoutes from './renderRoutes'
import RouterMaps from './routerMaps'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../store'

import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import cn from '../lang/cn'
import en from '../lang/en'

let store = createStore(reducers,applyMiddleware(thunk))

let { global } = store.getState()

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
        <BrowserRouter>
          <Switch>
            {renderRoutes(RouterMaps)}
          </Switch>
        </BrowserRouter>
      </Provider>
  )
}
export default Router
