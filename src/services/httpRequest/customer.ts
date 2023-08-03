import api from '@/services/api';
import { AxiosResponse } from 'axios';

export const getAll = async (queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = '/api/customer/all';

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.get(uri);

  return request;
}

export const getDetail = async (id: string | number, queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = `/api/customer/${id}`;

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.get(uri);

  return request;
}

export const create = async (data: any, queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = '/api/customer/create';

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.post(uri, data);

  return request;
}

export const update = async (id: string | number, data: any, queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = `/api/customer/update/${id}`;

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.put(uri, data);

  return request;
}

export const deleteData = async (id: string | number, queryParam?: string): Promise<AxiosResponse<any, any>> => {
  let uri: string = `/api/customer/delete/${id}`;

  if (typeof queryParam !== 'undefined') {
    uri += queryParam
  }

  const request = await api.delete(uri);

  return request;
}