import {Person} from 'types/entity/person';
import {BaseResponse} from 'types/api/baseResponse';
import {BaseParams} from 'types/api/baseParams';

export interface UsersParams extends BaseParams {
  page: number;
  exc: string;
  results: number;
}

export interface UsersResponse extends BaseResponse {
  results: Person[];
}
