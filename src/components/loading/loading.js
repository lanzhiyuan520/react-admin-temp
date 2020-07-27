import React from 'react'
import './loading.scss'
import { Spin } from 'antd'

const Loading = props => {
  let { size, indicator,tip } = props
  Loading.defaultProps = {
    size : 'default',
    indicator : '',
    tip : ''
  }
  return (
      <div className='loading-box'>
        <Spin size={size} indicator={indicator} tip={tip}/>
      </div>
  )
}

export default Loading
