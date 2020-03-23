// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = window.localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    switch (response.data.status) {
      case 200:
        return response.data.data
      case 401:
        alert(response.data.msg)
        location.href = '/login'
        return Promise.reject(response.data)
      default:
        alert(response.data.msg)
        return Promise.reject(response.data)
    }
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    alert('网路异常')
    return Promise.reject(error)
  }
)