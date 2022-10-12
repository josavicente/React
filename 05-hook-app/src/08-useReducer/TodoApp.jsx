
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleCompleteTodo, handleNewTodo, } = useTodo();
    
    return (
        <>
            <h1>
                Todo App (10),<small> pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } onDeleteTodo={handleDeleteTodo} onToggleTodo={handleCompleteTodo}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    );
};
