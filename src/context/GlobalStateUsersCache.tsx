import React, {createContext, useContext, useState} from 'react';
import {Person} from 'types/entity/person';

interface InputProviderProps {
  children: React.ReactNode;
}

const UsersCacheContext = createContext<Person[]>([]);
const UsersCacheContextSetState = createContext<(users: Person[] | ((users: Person[]) => Person[])) => void
>(() => {});

const GlobalStateUsersCache: React.FC<InputProviderProps> = ({children}) => {
  const [usersCache, setUsersCache] = useState<Person[]>([]);
  return (
    <UsersCacheContext.Provider value={usersCache}>
      <UsersCacheContextSetState.Provider value={setUsersCache}>
        {children}
      </UsersCacheContextSetState.Provider>
    </UsersCacheContext.Provider>
  );
};

function useUsersCacheContext() {
  return useContext(UsersCacheContext);
}

function useUsersCacheContextSetState() {
  return useContext(UsersCacheContextSetState);
}

export {useUsersCacheContext, useUsersCacheContextSetState};
export default GlobalStateUsersCache;
