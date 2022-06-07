import {useGetRequest} from 'hooks/useGetRequest';
import {UsersParams, UsersResponse} from 'types/index';
import {DependencyList} from 'react';

export const useGetUserList = (params: UsersParams, deps?: DependencyList) => {
  return useGetRequest<UsersResponse, UsersParams>(
    '/',
    {
      ...params,
      results: 10,
      nat: 'au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,tr,us',
    },
    deps,
  );
};
