import { set, isEmpty, includes } from 'lodash'
import { apiEndPoint } from './constant'
import I18n from '@language'

export async function RestService({api, third_party, method, params, token}) {
  const headers = {}
  let path = `${apiEndPoint}${api}`
  if (third_party) {
    path = api
  }

  set(headers, 'Accept', 'application/json')
  set(headers, 'Content-Type', 'application/json')
  set(headers, 'Access-Control-Headers', 'authorization')

  const reqBody = {
    method,
    headers
  }

  if (!isEmpty(params)) {
    reqBody.body = JSON.stringify(params)
  }

  return fetch(path, reqBody)
  .then(response => response.json())
  .then(res => res)
  .catch(err => ({
    success: false,
    message: I18n.t('REST_API_ERROR')
  }))
}