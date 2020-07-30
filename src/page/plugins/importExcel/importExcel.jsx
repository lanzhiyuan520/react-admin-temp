import React, { useState } from 'react'
import { importExcel } from "../../../tools/excel";
import './index.scss'
import { UploadOutlined } from '@ant-design/icons';
import {Button, Table, Upload} from "antd";
import { openMessage } from "../../../tools/common";

const ImportExcel = () => {
  let [userList,setUserList] = useState([])
  const [columns,setColumns] = useState([])

  const props = {
    name: 'file',
    accept : '.xlsx,.xls',
    showUploadList : false,
    async customRequest (info) {
      let file = info.file
      let data = await importExcel(file)
      if (data) {
        let headers = []
        for (let i = 0; i < data.length; i++) {
          let id = 0;
          let dataItem = data[i]
          dataItem['key'] = i
          for (let keyItem in dataItem) {
            let headerLen = headers.filter(item => item.key === keyItem)
            if (headerLen < 1 && keyItem !== 'key') {
              headers.push({
                id,
                key : keyItem,
                dataIndex : keyItem,
                title : keyItem,
                align : 'center'
              })
              id++
            }
          }
        }
        setColumns(headers)
        setUserList(data)
        openMessage('success','上传成功')
      }
    },
    onChange(info) {

    },
  };

  return (
      <div className='import-excel'>
        <div className="button-box">
          <Upload {...props}>
            <Button>
              <UploadOutlined /> 导入
            </Button>
          </Upload>
        </div>
        <Table
            columns={columns}
            rowKey={record => record.key}
            dataSource={userList}
            onChange={() => {window.goTop()}}
            align='center'
        ></Table>
      </div>
  )
}

export default ImportExcel
