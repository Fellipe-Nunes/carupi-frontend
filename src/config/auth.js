const TOKEN_KEY  = 'ml art & luxury'
const USER = 'ml.user'

const getToken = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    if (data && data.token) {
      return data.token
    }
    return false
  };
const getUser = () =>{
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    if (data && data.user) {
      return data.user
    }
    return false
  }


const saveToken = (token, username) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    localStorage.setItem(USER, JSON.stringify(username))
    

} 

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER)
}

const isAuthenticated =  () => {
    
    return getToken() !== false
}

export {
    getToken,
    saveToken,
    removeToken,
    isAuthenticated,
    getUser
}

  