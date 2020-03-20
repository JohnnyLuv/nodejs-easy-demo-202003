// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    switch (response.data.status) {
      case 200:
        return response.data.data
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