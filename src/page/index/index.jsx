import React from 'react'
import { Redirect } from "react-router-dom";

const Index = () => {
  return (
      <Redirect from='/' to='/home' ></Redirect>
  )
}

export default Index
