import React, {useEffect, useRef, useState} from 'react'
import './index.scss'
import { Table, Button, Space } from 'antd';
import { exportExcel } from "../../../tools/excel";

const ExcelPage = () => {
  let [userList,setUserList] = useState([])
  const [columns] = useState([
    {
      title : 'id',
      dataIndex : 'id',
      align : 'center'
    },
    {
      title : '姓名',
      dataIndex : 'name',
      align : 'center'
    },
    {
      title : '年龄',
      dataIndex : 'age',
      align : 'center'
    },
    {
      title : '住址',
      dataIndex : 'address',
      align : 'center'
    },
    {
      title : '电话',
      dataIndex : 'phone',
      align : 'center'
    },
    {
      title : '注册时间',
      dataIndex : 'createTime',
      align : 'center'
    },
    {
      title : '操作',
      dataIndex: 'action',
      align : 'center',
      render : (text,data) => {
        return (
            <Space>
              <Button type="link" size='small' className='edit-btn'>编辑</Button>
              <Button type="link" size='small'>删除</Button>
            </Space>
        )
      }
    }
  ])
  const refState = useRef({})
  refState.current.userList = userList
  const [paginationOptions] = useState({
    defaultPageSize : 20
  })

  useEffect(() => {
    getUserList()
  },[])

  const getUserList = () => {
    let data = []
    for (let i = 0; i < 99; i++) {
      data.push({
        id : i,
        name : '兰志远'+i,
        age : i,
        address : '北京',
        phone : '1831073xxxx',
        createTime : '2020-12-01'
      })
    }
    setUserList(data)
  }

  const exportData = () => {
    const { userList } = refState.current
    const exportHeaders = [
      {
        title : '姓名',
        key : 'name'
      },
      {
        title : '年龄',
        key : 'age'
      },
      {
        title : '地址',
        key : 'address'
      },
      {
        title : '电话',
        key : 'phone'
      },
      {
        title : '注册时间',
        key : 'createTime'
      }
    ]
    exportExcel(exportHeaders,userList,'人员列表')
  }

  return (
      <div className='export-table'>
        <div className="button-box">
          <Button type="primary" size='small' onClick={exportData}>导出</Button>
        </div>
        <Table
            columns={columns}
            rowKey={record => record.id}
            dataSource={userList}
            pagination={paginationOptions}
            onChange={() => {window.goTop()}}
            align='center'
        ></Table>
      </div>
  )
}

export default ExcelPage
