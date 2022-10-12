import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime() * 3,
    //     description: "Recolectar la piedra del alma",
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }
    
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }
    const handleCompleteTodo = (id) => {
        dispatch({
            type: '[TODO] Complete Todo',
            payload: id,
        })
    }

    return {
        todos,
        handleDeleteTodo,
        handleCompleteTodo,
        handleNewTodo,
    }
}
