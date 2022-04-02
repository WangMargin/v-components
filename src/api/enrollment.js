import request from '@/utils/request';
import api from './index';

export async function testFn(param) {
  return request({
    url: api.test,
    method: 'get',
    params: param,
  });
}
