import request from '../tools/request'
import api from './apiUrl'

const getHouseData = () => {
  return request(api.getHouseData)
}
const getHouseList = (page = 1) => {
  return request(`${api.getHouseList}?page=${page}`)
}

export default {
  getHouseData,
  getHouseList
}
