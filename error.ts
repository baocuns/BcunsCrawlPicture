export type Error = {
  code: number;
  status: boolean;
  msg: string;
  error_msg: string | unknown;
};

const error = (msg: string, err_msg: string | unknown): Error => {
  const errorMsg: Error = {
    code: 500,
    status: false,
    msg: msg,
    error_msg: err_msg,
  };

  return errorMsg;
};

export default error;
