
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    
    if ( action?.type === 'Agregar' ) {
        return [ ...state, action.payload ];
    }
        
    return state;
};

let todos = todoReducer();



const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const action = {
    type: 'Agregar',
    payload: newTodo
}


todos = todoReducer( todos, action );


console.log(todos);
