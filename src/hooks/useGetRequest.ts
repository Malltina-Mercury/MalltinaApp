import {DependencyList, useEffect, useState} from 'react';
import {request, SEED} from 'helpers/index';
import {BaseParams, ApiResponse} from 'types/index';

export const useGetRequest = <ResponseT, ParamsT extends BaseParams>(
  url: string,
  params: ParamsT,
  deps?: DependencyList,
): ApiResponse<ResponseT> => {
  const [data, setData] = useState<ResponseT>();
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getRequest = async () => {
      setIsLoaded(false);
      setError(undefined);

      try {
        const response = await request.get<ResponseT>(url, {
          params: {
            ...params,
            seed: SEED,
          },
        });
        setData(response.data);
        setIsLoaded(true);
      } catch (e: any) {
        setError(e);
      }
    };

    getRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [data, isLoaded, error];
};
