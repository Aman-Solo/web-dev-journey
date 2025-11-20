import React, {createContext, useState, useReducer} from 'react';
export const ThemeContext = createContext();
export const TaskContext = createContext();
const initialState = [];

function reducer(state, action){
    switch(action.type){
        case 'ADD_TASK':
            return[...state, {text: action.payload, done: false}];
        case 'TOGGLE_COMPLETE':
            return state.map((task, i) => i===action.payload ? {...task, done: !task.done}: task);
        case 'DELETE_TASK':
            return state.filter((_, i)=> i !== action.payload);

        default:
            return state;
    }
}
export function TaskProvider({children}){
    const[state, dispatch] = useReducer(reducer, initialState);
    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
}

export function ThemeProvider({children}){
    const [isDark, setIsDark] = useState(false);
    return(
        <ThemeContext.Provider value = {{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    );
}