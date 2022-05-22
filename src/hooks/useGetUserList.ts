import {useGetRequest} from 'hooks/useGetRequest';
import {UsersParams} from 'types/api/users';
import {DependencyList} from 'react';

export const useGetUserList = (params: UsersParams, deps: DependencyList) => {
  return useGetRequest('/', params, deps);
};
