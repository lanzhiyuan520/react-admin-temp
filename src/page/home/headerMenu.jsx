import React,{ useState,useEffect } from 'react'
import './headerMenu.scss'

import { Menu, Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';
import { removeStroage } from "../../tools/common";
import {useDispatch, useSelector} from "react-redux";
import { showLoading, hideLoading } from '../../store/actions/global'
import { openMessage, setStorage } from "../../tools/common";
import { setLang } from "../../store/actions/global";
import i18n from 'i18next'
import classNames from 'classnames'

const HeaderMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const global = useSelector(state => state.global);
  const [fullScreen,setFullScreen] = useState(false)
  const [langList] = useState([
    {
      title : '中文',
      img : require('../../static/img/cn.png'),
      lang : 'zh'
    },
    {
      title : 'English',
      img : require('../../static/img/en.png'),
      lang : 'en'
    }
  ])
  const [langState,setLangState] = useState(require('../../static/img/cn.png'))

  useEffect(() => {
    getLang()
  })

  const getLang = () => {
    let lang = global.lang
    let langItem = langList.filter(item => item.lang === lang)
    setLangState(langItem[0].img)
  }

  const setLangChange = (e) => {
    let lang = e.item.props.lang
    i18n.changeLanguage(lang)
    setStorage('lang',lang)
    dispatch(setLang(lang))
  }

  const signOut = () => {
    dispatch(showLoading())
    removeStroage('login')
    setTimeout(() => {
      openMessage('success','退出成功')
      history.replace('/login')
      dispatch(hideLoading())
    },1500)
  }

  const fullScreenChange = () => {
    let element = document.documentElement;
    // 判断是否已经是全屏
    // 如果是全屏，退出
    if (fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {    // 否则，进入全屏
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    setFullScreen(!fullScreen)
  }

  const langMenu = (
      <Menu onClick={setLangChange}>
        {
          langList.map(item => {
            return (
                <Menu.Item key={item.lang} lang={item.lang}>
                  <img className='lang-img' src={item.img} alt='' />
                  <span className='lang-text'>{item.title}</span>
                </Menu.Item>
            )
          })
        }
      </Menu>
  )
  const infoMenu = (
      <Menu>
        <Menu.Item>
          <span onClick={signOut}>退出</span>
        </Menu.Item>
      </Menu>
  )

  return (
      <div className='header-menu'>
        <div className="right-box">
          <div className="full-screen">
            <i className={classNames({
              'iconfont':true,
              'icon-quanping':!fullScreen,
              'icon-quxiaoquanping':fullScreen
            })}
               onClick={fullScreenChange}
            ></i>
          </div>
          <div className="lang">
            <Dropdown overlay={langMenu}>
              <img className='lang-img' src={langState} alt='' />
            </Dropdown>
          </div>
          <div className="user-info">
            <Dropdown overlay={infoMenu}>
              <div className="info">
                <span className='hi'>你好,</span>
                <span className='name'>admin</span>
                <img className='avatar-url' src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJg0W7IVzQ5gPbLouuoeI4VTEFRXKNFJIVFx4SWTWwL5affdJ2s2ShKIxRJIUDVRKiahZD6emQqq4A/132" alt='' />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
  )
}

export default HeaderMenu
