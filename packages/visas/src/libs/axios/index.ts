import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import get from 'lodash/get';

export const axiosSync = <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response: AxiosResponse) => {
        const data: T = get(response, 'data', {});
        resolve(data);
      })
      .catch((error: AxiosError) => {
        const data: T = get(error, 'response.data');
        reject(data);
      });
  });
};

export default axiosSync;
