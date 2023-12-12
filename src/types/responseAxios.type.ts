import { AxiosResponse } from 'axios';

//Need use a generic type to define the type of the data
export interface ResponseAxios<T> extends AxiosResponse {
  data: T;
}
