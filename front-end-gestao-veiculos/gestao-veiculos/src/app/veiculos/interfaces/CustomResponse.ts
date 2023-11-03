

export interface CustomResponse<T> {
  success: boolean;
  messages: string[];
  data: T[];
}