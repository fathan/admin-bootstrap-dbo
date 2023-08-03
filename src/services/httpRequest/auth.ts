import api from '@/services/api';
import { AxiosResponse } from 'axios';

export const login = async (data: any, queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = '/api/auth/login';

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.post(uri, data);

  return request;
}

export const logout = async (data: any, queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = '/api/auth/logout';

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.post(uri, data);

  return request;
}

export const user = async (queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = '/api/auth/user';

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.get(uri);

  return request;
}
