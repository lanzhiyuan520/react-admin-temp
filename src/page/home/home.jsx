import React,{ } from 'react';
import './home.scss'
import { Layout,Breadcrumb } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import HeaderMenu from './headerMenu'
import LefeMenu from './leftMenu.jsx'
import { Main } from '../../components'
import { useHistory } from 'react-router-dom';
import routes from '../../route/routerMaps'
import { Loading } from '../../components'
import classNames from 'classnames'
import { setLeftMenu } from "../../store/actions/global";
const { Header, Sider, Content } = Layout;


const Home = () => {
  const history = useHistory();
  const global = useSelector(state => state.global);
  const dispatch = useDispatch()
  const pathSnippets = history.location.pathname.split('/').filter(i => i);
  const breadcrumbList = []
  const getRoutes = (url,routes) => {
    routes.forEach(item => {
      if (item.path === url && item.path !== '/home') {
        breadcrumbList.push(item)
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

  const leftMenuSetting = () => {
    dispatch(setLeftMenu(!global.isShowLeftMenu))
  }

  return (
    <div className='home'>
      {
        global.isLoading?
            <Loading />
            :
            null
      }
      <Layout>
        <Sider
            className='left-sider'
            collapsible={true}
            width={180}
            trigger={null}
            collapsed={!global.isShowLeftMenu}
        >
          <LefeMenu />
        </Sider>
        <Layout>
          <Header>
            <HeaderMenu />
          </Header>
          <Content style={{ marginTop: 0 }}>
            <div className='main'>
              <div className='bread'>
                <div className={classNames({
                  'show-or-hide-menu':true,
                  'hide-menu':!global.isShowLeftMenu
                })}>
                  <i className='iconfont icon-zhankai-shouqi' onClick={leftMenuSetting}></i>
                </div>
                <Breadcrumb separator=">">
                  {
                    breadcrumbList.map(item => {
                      return (
                          <Breadcrumb.Item key={item.path}>
                            {window.$t(item.title)}
                          </Breadcrumb.Item>
                      );
                    })
                  }
                </Breadcrumb>
              </div>
              <Main></Main>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
