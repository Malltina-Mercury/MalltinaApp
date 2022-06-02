import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {UsersContext} from 'types/index';

type SetUsersContext = React.Dispatch<React.SetStateAction<UsersContext>>;
type UsersContextHook = [UsersContext, SetUsersContext];

interface Props {}

const Context = createContext<UsersContext>({});
const SetContext = createContext<SetUsersContext>(() => {});

const UsersContextProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [users, setUsers] = useState<UsersContext>({});
  return (
    <Context.Provider value={users}>
      <SetContext.Provider value={setUsers}>{children}</SetContext.Provider>
    </Context.Provider>
  );
};

export const useUsersContext = (): UsersContextHook => [
  useContext(Context),
  useContext(SetContext),
];

export default UsersContextProvider;
