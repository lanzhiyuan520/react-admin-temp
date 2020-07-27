import React, { useState, useEffect } from 'react';
import './login.scss'
import Particlesfrom from 'react-particles-js'
import { Form, Input, Button } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { openMessage,setStorage } from "../../tools/common";
import { Loading } from '../../components/index'

let Login = (props) => {
  const history = useHistory();
  const [particConfig] = useState({
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
  const [form] = Form.useForm();
  const [isShowLoading,setIsShowLoading] = useState(false)

  useEffect(() => {
    console.log(props)
    return () => {
      form.resetFields()
    }
  });
  const loginCheck = async () => {
    try {
      const { username, password } = await form.validateFields();
      if (password !== '123456') {
        openMessage('error','密码输入错误')
      } else {
        setIsShowLoading(true)
        let params = JSON.stringify({
          username,
          role : username
        })
        setStorage('login',params)
        openMessage('success','登录成功')
        setTimeout(() => {
          setIsShowLoading(true)
          history.replace('/')
        },1000)
      }
    }catch (e) {

    }
  }
  return (
      <div className='login-box'>
        <Particlesfrom
          height='100%'
          params={particConfig}
          style={{backgroundSize:'cover',backgroundImage:'url(http://pic.lanzhiyuan99.cn/image/jpg/admin-bgclogin-bgc.jpg)'}}
        />
        {
          isShowLoading?<Loading tip='加载中'/>:null
        }
        <div className='login-content'>
          <div className="login-title">管理系统</div>
          <div className="login-form">
            <Form form={form}>
              <Form.Item
                  name="username"
                  rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input size="large" placeholder='用户名' prefix={<UserOutlined />}/>
              </Form.Item>
              <Form.Item
                  name="password"
                  rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input size="large" type='password' placeholder='密码' prefix={<LockOutlined />}/>
              </Form.Item>
              <Form.Item>
                {/*<div className='login-btn'>登录</div>*/}
                <Button className='login-btn' onClick={loginCheck}>登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
  )
}


export default Login
