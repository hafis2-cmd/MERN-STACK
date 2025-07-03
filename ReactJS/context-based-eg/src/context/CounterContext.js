import React,{createContext,useContext,useReducer} from "react";

//creating a context
const StateContext=createContext();
//createContext is used to create a context called stateContext.this context will be used to pass the state and dispatch function down the component tree. 

//creating a reducer
//initialState defines the initial structure of our state. 
const initialState={
    count:0,
    numberList:[],
};

//reducer is a function that specifies how the state should be updated based on different actions.It's responsible for handling state changes.
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state,count:state.count+1};
        case 'DECREMENT':
            return {...state,count:state.count-1};
        case 'ADD_NUMBER':
            return {...state,numberList:[...state.numberList,action.payload]};
        case 'REMOVE_NUMBER':
            return {...state,numberList:state.numberList.slice(0,-1)};
        default:
            return state;                
    }

};

//creating a context provider
//StateProvider is a component that wraps the entire applications. It uses the useReducer hook to manage the state using the reducer and initialState.
export const StateProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    return (
        <StateContext.Provider value={{state,dispatch}}>
            {children}
        </StateContext.Provider>
    );
};

//Created a custom hook to use the context
//useStateValue is a custom hook that makes it easier to access the state and dispatch from the context thoughout the application.
export const useStateValue=()=>useContext(StateContext);