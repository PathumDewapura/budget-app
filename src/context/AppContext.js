import { createContext, useReducer } from "react";

const AppReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses : [...state.expenses,action.payload]
            };
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses : state.expenses.filter((expense)=> expense.id !== action.payload)
            };
        case 'SET_BUDGET':
            return{
                ...state,
                budget : action.payload,
            }
        default:
            return state;
    }
}

const initialState = {
    budget : 2000,
    expenses : [
        { id:21213, name:'Shopping', cost:50},
        { id:23413, name:'Holiday', cost:500},
    ]
}

export const AppContext = createContext();

export const AppProvider =(props)=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    return(
        <AppContext.Provider
            value={{
                budget:state.budget,
                expenses:state.expenses,
                dispatch,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}
