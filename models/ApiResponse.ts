/**
 * 接口详情结构接口
 */
export interface ApiResponse<T> {
  code: number;
  errMsg: string | null;
  data: T | null;
}
