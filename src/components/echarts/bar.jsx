import React,{ useEffect } from 'react'
import chartsTheme from './chartsTheme/westeros'
import './index.scss'

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';

const Bar = React.forwardRef((props,ref) => {
  useEffect(() => {

  },[])

  return (
    <div id='my-bar-charts'>
      <ReactEchartsCore
          echarts={echarts}
          option={props.option}
          theme={chartsTheme}
          style={{height:"100%"}}
      />
    </div>
  )
})

export default Bar
