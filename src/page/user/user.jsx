import React,{ useEffect,useState,useRef } from 'react'
import './index.scss'
import { Table, Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const User = () => {
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
              <Button type="link" size='small' onClick={() => { deleteUser(data) }}>删除</Button>
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

  const deleteUser = (data) => {
    let { userList } = refState.current
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content : '确定删除该用户？',
      onOk () {
        let id = data.id
        let newUserList = userList.filter(item => item.id !== id)
        setUserList(newUserList)
      }
    })
  }

  return (
      <div className='user'>
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
export default User
