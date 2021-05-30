import {ADD_TODO, REMOVE_TODO} from "./action.types";


export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            //  the payload is the data that your reducer will use to update the state
            return [...state, action.payload];
            
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
    
        default:
            return state;
    }
}

