import { newsHttp } from '@/network/index.js'

export const getArticleApi = function (params) {
  return newsHttp.get('/articles', { params })
}
