import React, {useState, useEffect} from 'react'
import './index.scss'
import { Table } from "antd";
import api from '../../api'
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../store/actions/global";

const useHouse = (initialValue) => {
  const dispatch = useDispatch()
  const [houseList,setHouseList] = useState(initialValue)
  const [paginationOptions,setPaginationOptions] = useState({
    defaultPageSize : 20,
    total : 0
  })
  const [page,setPage] = useState(1)
  useEffect(() => {
    dispatch(showLoading())
    api.getHouseList(page)
        .then(res => {
          setHouseList(res.data)
          setPaginationOptions({
            defaultPageSize : 20,
            total : res.total
          })
          window.goTop()
        })
      setTimeout(()=> {
        dispatch(hideLoading())
      },1000)
  },[page,dispatch])

  return [houseList,paginationOptions,setPage]
}


const House = () => {
  const [ houseList,paginationOptions,setPage ] = useHouse([])
  const [columns] = useState([
    {
      title : 'id',
      dataIndex : 'id',
      align : 'center'
    },
    {
      title : '标题',
      dataIndex : 'title',
      align : 'center'
    },
    {
      title : '地区',
      dataIndex : 'area',
      align : 'center'
    },
    {
      title : '户型',
      dataIndex : 'unitType',
      align : 'center'
    },
    {
      title : '方式',
      dataIndex : 'rentalType',
      align : 'center'
    },
    {
      title : '价格',
      dataIndex : 'price',
      align : 'center'
    },
    {
      title : '大小',
      dataIndex: 'houseSize',
      align : 'center'
    }
  ])

  const changePage = p => {
    let page = p.current
    setPage(page)
  }

  return (
      <div className='house'>
        <Table
            columns={columns}
            rowKey={record => record.id}
            dataSource={houseList}
            pagination={paginationOptions}
            onChange={changePage}
            align='center'
        ></Table>
      </div>
  )
}

export default House
