import {Person, BaseResponse, BaseParams} from 'types/index';

export interface UsersParams extends BaseParams {
  page?: number;
  exc?: string;
  results?: number;
  nat?: string;
}

export interface UsersResponse extends BaseResponse {
  results: Person[];
}
