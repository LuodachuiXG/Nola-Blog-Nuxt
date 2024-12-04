import type { UseFetchOptions } from '#app';
import { useFetch } from '#app';
import { serverUrl } from '~/utils/EnvUtil';
import type { ApiResponse } from '~/models/ApiResponse';

interface RequestOptions extends UseFetchOptions<any> {
  customBaseUrl?: string;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type HandleRequestOptions = {
  request: Request;
  options: RequestOptions;
};
type HandleResponseOptions = {
  response: ApiResponse<any>;
};

/**
 * 请求拦截器
 */
function handleRequest({ options }: HandleRequestOptions) {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  };
}

/**
 * 响应拦截器
 */
function handleResponse({ response }: HandleResponseOptions) {
  if (response.errMsg) {
    throw new Error(response.errMsg || '请求错误');
  }
  return response.data;
}

/**
 * 创建 UseFetch 请求
 */
function createUseFetchRequest(method: HttpMethod) {
  return async function (
    url: string,
    data?: any,
    options: RequestOptions = {},
  ) {
    console.log(url);
    console.log(serverUrl());
    const requestUrl = new URL(
      url,
      options.customBaseUrl || serverUrl(),
    ).toString();
    return useFetch(requestUrl, {
      ...options,
      method: method,
      body: data,
      onRequest: handleRequest,
      onResponse: handleResponse,
    });
  };
}


export const useFetchGet = createUseFetchRequest('GET');
export const useFetchPost = createUseFetchRequest('POST');
export const useFetchPut = createUseFetchRequest('PUT');
export const useFetchDelete = createUseFetchRequest('DELETE');