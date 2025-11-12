import React, {createContext, useEffect, useState} from 'react';
export const ThemeContext = createContext();
export function ThemeProvider({children}){
    const[isDark, setIsDark]=useState(false);
    useEffect(()=>{
        const savedTheme=localStorage.getItem('theme');
        if(savedTheme)setIsDark(savedTheme==='dark');
    },[])
    useEffect(()=>{
        localStorage.setItem('theme', isDark? 'dark':'white');
    },[isDark]);
    return(
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    );
}