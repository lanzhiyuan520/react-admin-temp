const HIDELOADING = 'HIDELOADING'
const SHOWLOADING = 'SHOWLOADING'
const SETLEFTMENUSHOWORHIDE = 'SETLEFTMENUSHOWORHIDE'
const SETLANG = 'SETLANG'

export const showLoading = () => {
  return {
    type : SHOWLOADING,
    isLoading : true
  }
}

export const hideLoading = () => {
  return {
    type : HIDELOADING,
    isLoading : false
  }
}

export const setLeftMenu = data => {
  return {
    type : SETLEFTMENUSHOWORHIDE,
    data
  }
}

export const setLang = data => {
  return {
    type : SETLANG,
    data
  }
}
