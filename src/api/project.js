import request from '../tools/request'
import api from './apiUrl'

const getProject = (data) => {
  return request(`${api.getProject}?page=${data}`)
}

export default {
  getProject
}
