import React, { useState, createContext, useContext } from "react";
import { Person } from "types/entity/person";

interface InputProviderProps {
    children: React.ReactNode
}



const UsersContext = createContext<Person[]>([]);
const UsersContextSetState = createContext<(users:Person[])=>void>(()=>{});

const GlobalStateUsers:React.FC <InputProviderProps>= ({ children }) => {
    const [users, setUsers] = useState<Person[]>([]);
    return (
         <UsersContext.Provider value={users}>
            <UsersContextSetState.Provider value={setUsers}>
                {children}
            </UsersContextSetState.Provider>
         </UsersContext.Provider>
    );
}
function useUsersContext() {
    return useContext(UsersContext);
}
function useUsersContextSetState() {
    return useContext(UsersContextSetState);
}
export { useUsersContext, useUsersContextSetState }
export default GlobalStateUsers;
