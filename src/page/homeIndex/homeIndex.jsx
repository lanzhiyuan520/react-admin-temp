import React,{ useEffect } from 'react'
import { Row, Col } from 'antd';
import './index.scss'
import { Pie, Line } from '../../components'

const HomeIndex = () => {

  useEffect(() => {

  },[])

  return (
      <div className='home-index'>
        <div>
          <Row>
            <Col span={8}>
              <div className="row-base">
                <Col span={12} className='el-col'>
                  <div className="grid-content sale-bgcolor">
                    <div className="card-title">年度总盈亏</div>
                    <div className="card-text">68(千万元)</div>
                  </div>
                </Col>
                <Col span={12} className='el-col'>
                  <div className="grid-content tax-bgcolor">
                    <div className="card-title">年度总盈亏</div>
                    <div className="card-text">68(千万元)</div>
                  </div>
                </Col>
              </div>
            </Col>
            <Col span={16}>
              <div className="row-base">
                <Col span={6} className='el-col'>
                  <div className="grid-content extened-bgcolor">
                    <div className="card-title">潜在投资人</div>
                    <div className="card-text">686(人)</div>
                    <div className="card-text">Decreased by 10%</div>
                  </div>
                </Col>
                <Col span={6} className='el-col'>
                  <div className="grid-content like-bgcolor">
                    <div className="card-title">意向投资人</div>
                    <div className="card-text">1276(人)</div>
                    <div className="card-text">Decreased by 40%</div>
                  </div>
                </Col>
                <Col span={6} className='el-col'>
                  <div className="grid-content link-bg-color">
                    <div className="card-title">待审投资人</div>
                    <div className="card-text">43424(人)</div>
                    <div className="card-text">Decreased by 30%</div>
                  </div>
                </Col>
                <Col span={6} className='el-col'>
                  <div className="grid-content kele-bg-color">
                    <div className="card-title">审核中投资人</div>
                    <div className="card-text">6565464(人)</div>
                    <div className="card-text">Decreased by 80%</div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
        <div className="charts-box">
          <Row>
            <Col span={7}>
              <div className="charts-content">
                <Pie />
              </div>
            </Col>
            <Col span={17}>
              <div className="charts-content">
                <Line />
              </div>
            </Col>
          </Row>
        </div>
      </div>
  )
}

export default HomeIndex
