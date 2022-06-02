import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {SearchContext} from 'types';

type SetSearchContext = React.Dispatch<React.SetStateAction<SearchContext>>;
type SearchContextHook = [SearchContext, SetSearchContext];

interface Props {}

const Context = createContext<SearchContext>({});
const SetContext = createContext<SetSearchContext>(() => {});

const SearchContextProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [users, setUsers] = useState<SearchContext>({});
  return (
    <Context.Provider value={users}>
      <SetContext.Provider value={setUsers}>{children}</SetContext.Provider>
    </Context.Provider>
  );
};

export const useSearchContext = (): SearchContextHook => [
  useContext(Context),
  useContext(SetContext),
];

export default SearchContextProvider;
