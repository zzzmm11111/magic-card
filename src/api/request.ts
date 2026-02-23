import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE ?? '',
  timeout: 15000,
})

instance.interceptors.request.use(
  (config) => {
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
      // 未授权可跳转登录
    }
    return Promise.reject(err)
  },
)

const request = {
  get: <T = unknown>(url: string, config?: Parameters<typeof instance.get>[1]) =>
    instance.get<unknown, T>(url, config),
  post: <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof instance.post>[2]) =>
    instance.post<unknown, T>(url, data, config),
  put: <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof instance.put>[2]) =>
    instance.put<unknown, T>(url, data, config),
  delete: <T = unknown>(url: string, config?: Parameters<typeof instance.delete>[1]) =>
    instance.delete<unknown, T>(url, config),
}

export default request
