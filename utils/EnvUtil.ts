/**
 * 当前是否是开发模式
 */
export const isDev = process.env.NODE_ENV?.indexOf('dev') !== -1;

/**
 * 当前服务器地址
 */
export const serverUrl = () => {
  const runtimeConfig = useRuntimeConfig();
  return isDev
    ? runtimeConfig.public.serverUrlDev
    : runtimeConfig.public.serverUrlProd;
};
