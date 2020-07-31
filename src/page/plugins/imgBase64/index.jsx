import React,{ useState, useRef } from 'react'
import './index.scss'
import { Input,Upload,Button,Space } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../../../store/actions/global";
import { openMessage } from "../../../tools/common";

const { TextArea } = Input;
const { Dragger } = Upload;
const ImgBase = () => {
  const [imgStr,setBaseImg] = useState('')
  const [base,setBase] = useState('')
  const refState = new useRef({})
  refState.current.base = base
  refState.current.imgStr = imgStr

  const dispatch = useDispatch()

  const props = {
    name: 'file',
    showUploadList : false,
    customRequest (info) {
      dispatch(showLoading())
      let file = info.file
      let r = new FileReader()
      r.onload = function () {
        setBaseImg(r.result)
        setBase(r.result)
        dispatch(hideLoading())
      }
      r.readAsDataURL(file)
    }
  };

  function ResizeImage(image, maxwidth, maxheight) {
    let w = image.width;
    let h = image.height;
    if( w === 0 || h === 0 ) {
      image.width = maxwidth;
      image.height = maxheight;
    } else if (w > h) {
      if (w > maxwidth) image.width = maxwidth;
    } else {
      if (h > maxheight) image.height = maxheight;
    }
  }

  const change = (e) => {
    let val = e.target.value
    setBase(val)
  }

  const conversion = () => {
    setBaseImg(base)
  }

  const imgErr = () => {
    if (imgStr) {
      openMessage('error','图片加载失败')
    }
  }

  return (
      <div className='img-base64'>
        <div className='content'>
          <div className="left">
            <div className="img-content">
              <img id='imgDom' src={imgStr} alt="" onError={imgErr} onLoad={() => { ResizeImage(document.getElementById('imgDom'),400,300) }}/>
            </div>
            <div className='upload-content'>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖入上传您的文件</p>
                <p className="ant-upload-hint">只支持图片格式</p>
              </Dragger>
            </div>
          </div>
          <div className="right">
            <TextArea style={{height:'100%'}} value={base} onChange={change}></TextArea>
          </div>
        </div>
        <div className="button-content">
          <Space>
            <Button type="primary" onClick={conversion}>base64还原图片</Button>
          </Space>
        </div>
      </div>
  )
}
export default ImgBase
