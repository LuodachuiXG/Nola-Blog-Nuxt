import { useFetchGet } from '~/composables/api/index';

/**
 * 获取所有文章
 */
export const apiAllPost = () => {
  return useFetchGet('/api/post');
};
