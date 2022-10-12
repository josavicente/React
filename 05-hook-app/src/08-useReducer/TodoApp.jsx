
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleCompleteTodo, handleNewTodo, } = useTodo();
    
    return (
        <>
            <h1>
                Todo App ({todos.length}),<small> pendientes: {}</small>
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
