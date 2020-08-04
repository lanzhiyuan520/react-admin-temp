import React,{ useEffect,useState } from 'react'
import { Row, Col } from 'antd';
import './index.scss'
import { Pie , Bar, Loading} from '../../components'
import api from '../../api'

const HomeIndex = () => {
  const [house,setHouse] = useState({})
  const [areaAverage,setAreaAverage] = useState([])
  const [colColor] = useState(['#87DE75','#a5e7f0','#93b7e3','#edafda'])
  const [pieOption,setPieOption] = useState({})
  const [barOption,setBarOption] = useState({})
  const [isShowLoading,setIsShowLoading] = useState(false)
  useEffect(() => {
    getHouse()
  },[])

  const getHouse = () => {
    setIsShowLoading(true)
    api.getHouseData()
        .then(res => {
          let data = []
          let areaData = []
          let price = []
          setHouse(res.data)
          setAreaAverage(res.data.areaAverage)
          res.data.areaAverage.forEach(item => {
            data.push(item.area)
            areaData.push({
              value : item.total,
              name : item.area
            })
            price.push(item.price)
          })
          setPieOption({
            title : {
              text: "北京市租房房源数量",
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: data
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '50%',
                center: ['50%', '60%'],
                data: areaData,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          })
          setBarOption({
            title : {
              text: "北京市房源平均价格",
            },
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: data,
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: price
              }
            ]
          })
        })
      setTimeout(()=> {
        setIsShowLoading(false)
      },1000)
  }

  return (
      <div className='home-index'>
        {
          isShowLoading?
          <Loading />:null
        }
        <div>
          <Row>
            <Col span={8}>
              <div className="row-base">
                <Col span={12} className='el-col'>
                  <div className="grid-content sale-bgcolor">
                    <div className="card-title">全区平均价格</div>
                    <div className="card-text">{house.bjAverage}(元)</div>
                  </div>
                </Col>
                <Col span={12} className='el-col'>
                  <div className="grid-content tax-bgcolor">
                    <div className="card-title">房源总数量</div>
                    <div className="card-text">{house.total}(套)</div>
                  </div>
                </Col>
              </div>
            </Col>
            <Col span={16}>
              <div className="row-base">
                {
                  areaAverage.map((item,index) => {
                    return (
                        index < 4?
                        <Col span={6} className='el-col' key={item.area}>
                          <div className="grid-content" style={{backgroundColor:colColor[index]}}>
                            <div className="card-title">{item.area}</div>
                            <div className="card-text">{item.total}(套)</div>
                            <div className="card-text">平均价格 {item.price} (元)</div>
                          </div>
                        </Col>
                        :
                        null
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </div>
        <div className="charts-box">
          <Row>
            <Col span={9}>
              <div className="charts-content">
                <Pie option={pieOption}/>
              </div>
            </Col>
            <Col span={15}>
              <div className="charts-content line-content">
                <Bar option={barOption}/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
  )
}

export default HomeIndex
