import React from 'react';
import './home.scss'
import { Layout } from 'antd';
import LefeMenu from './leftMenu.jsx'
import { Main } from '../../components'

const { Header, Sider, Content } = Layout;


const Home = () => {
  return (
    <div className='home'>
      <Layout>
        <Sider className='left-sider'>
          <LefeMenu />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Main></Main>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
