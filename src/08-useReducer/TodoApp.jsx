
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";


export const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, todosPendingCount }  = useTodo();


  return (
    <>
        <h1>TodoApp: { todosCount }, <small>Pendientes: { todosPendingCount }</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                {/* TodoList */}
                < TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo } 
                />
                {/* TodoList */}
            </div>
            <div className="col-5">
             
                <h4>Agregar TODO</h4>
                <hr/>

                {/* TodoAdd */}
                <TodoAdd onNewTodo={ handleNewTodo }/>
                 {/* TodoAdd */}
            </div>
        </div>

    
    
    </>
  )
}
