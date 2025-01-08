export type DefaultResponse<DataType = Record<string, any>> = {
  message?: string;
  data?: DataType;
  error?: { message: string; error: string };
};
