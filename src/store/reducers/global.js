import { getStorage } from "../../tools/common";

let store = {
  isLoading : false,
  isShowLeftMenu : true,
  lang : getStorage('lang') || 'zh'
}

const reducers = (state = store,action) => {
  switch (action.type) {
    case 'SHOWLOADING' :
      return Object.assign({},state,{isLoading : action.isLoading})
    case 'HIDELOADING' :
      return Object.assign({},state,{isLoading : action.isLoading})
    case 'SETLEFTMENUSHOWORHIDE' :
      return Object.assign({},state,{ isShowLeftMenu : action.data })
    case 'SETLANG' :
      return Object.assign({},state,{ lang : action.data })
    default :
      return state
  }
}
export default reducers
