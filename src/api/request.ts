import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE ?? '',
  timeout: 15000,
})

instance.interceptors.request.use(
  (config) => {
    // 可从 Pinia user store 取 token 写入 Header
    // const userStore = useUserStore()
    // if (userStore.token) config.headers.Authorization = `Bearer ${userStore.token}`
    return config
  },
  (err) => Promise.reject(err),
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    const message = err.response?.data?.message ?? err.message ?? '请求失败'
    console.error('[request error]', message)
    if (err.response?.status === 401) {
      // 未授权可跳转登录: router.push('/login')
    }
    return Promise.reject(err)
  },
)

/** 封装后的请求：interceptor 已返回 data，方法直接返回 T */
const request = {
  get: <T = unknown>(url: string, config?: Parameters<typeof instance.get>[1]) =>
    instance.get<any, T>(url, config),
  post: <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof instance.post>[2]) =>
    instance.post<any, T>(url, data, config),
  put: <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof instance.put>[2]) =>
    instance.put<any, T>(url, data, config),
  delete: <T = unknown>(url: string, config?: Parameters<typeof instance.delete>[1]) =>
    instance.delete<any, T>(url, config),
}

export default request
