import React,{  } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import chartsTheme from './chartsTheme/westeros'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import './index.scss'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'

const Pie = (props,ref) => {

  return (
      <div id='my-pie-charts'>
        <ReactEchartsCore echarts={echarts} option={props.option} theme={chartsTheme} style={{height:'100%'}}/>
      </div>
  )
}

export default Pie
