import React,{ useEffect } from 'react'
import { getStorage } from "../tools/common";

const RouterGuard = props => {
  useEffect(() => {
    console.log(props)
    if (!getStorage('login') && props.path !== '/login') {
      props.history.replace('/login')
    }
    // if (props.path === '/') {
    //   props.history.replace('/index')
    // }
  })
  const renderComponent = () => {
    return props.component()
  }
  return (
      <>
        {
          renderComponent()
        }
      </>
  )
}

export default RouterGuard
