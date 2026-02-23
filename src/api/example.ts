import request from './request'

export interface ExampleRes {
  id: string
  name: string
}

export const getExample = () => request.get<ExampleRes>('/example')
