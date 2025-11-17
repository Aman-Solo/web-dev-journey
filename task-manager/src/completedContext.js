import React,{createContext, useState} from 'react';
export const completedContext = createContext();
export function CompletedProvider({children}){
    const [completedCount, setCompletedCount]=useState(0);
    return(
        <completedContext.Provider value={{completedCount, setCompletedCount}}>
            {children}
        </completedContext.Provider>
    );
}