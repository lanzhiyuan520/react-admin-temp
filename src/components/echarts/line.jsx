import React,{ useEffect } from 'react'
import chartsTheme from './chartsTheme/westeros'
import './index.scss'

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

const Line = (props) => {
  useEffect(() => {

  },[])

  return (
    <div id='my-line-charts'>
      <ReactEchartsCore
          echarts={echarts}
          option={props.option}
          theme={chartsTheme}
          style={{height:"100%"}}
      />
    </div>
  )
}

export default Line
