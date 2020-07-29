import React,{ useEffect } from 'react'
import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import chartsTheme from './chartsTheme/westeros'
import './index.scss'

const Pie = () => {
  useEffect(() => {
    let myChart = echarts.init(document.getElementById('my-pie-charts'),chartsTheme);
    let option = {
      title : {
        text: "用户投资类型",
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['基金','股票','债券','储蓄','期货']
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '50%',
          center: ['50%', '60%'],
          data: [
            {value:335, name:'基金'},
            {value:310, name:'股票'},
            {value:234, name:'债券'},
            {value:135, name:'储蓄'},
            {value:1548, name:'期货'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    setTimeout(() => {
      myChart.setOption(option);
    },20)
  })
  return (
      <div id='my-pie-charts'></div>
  )
}

export default Pie
