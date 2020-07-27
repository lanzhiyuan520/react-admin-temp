import React from 'react';
import './home.scss'
import { Layout,Breadcrumb } from 'antd';
import LefeMenu from './leftMenu.jsx'
import { Main } from '../../components'
import { useHistory } from 'react-router-dom';
import routes from '../../route/routerMaps'
const { Header, Sider, Content } = Layout;

const Home = () => {
  const history = useHistory();
  const pathSnippets = history.location.pathname.split('/').filter(i => i);
  const breadcrumbList = []
  const getRoutes = (url,routes) => {
    routes.forEach(item => {
      if (item.path === url) {
        if (item.path !== '/home') {
          breadcrumbList.push(item)
        }
      }
      if (item.routes) {
        getRoutes(url,item.routes)
      }
    })
  }
  pathSnippets.forEach((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    getRoutes(url,routes)
  })

  return (
    <div className='home'>
      <Layout>
        <Sider className='left-sider'>
          <LefeMenu />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <div className='main'>
              <Breadcrumb separator=">">
                {
                  breadcrumbList.map(item => {
                    return (
                        <Breadcrumb.Item key={item.path}>
                          {item.title}
                        </Breadcrumb.Item>
                    );
                  })
                }
              </Breadcrumb>
              <Main></Main>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
