import './TodoList.scss';

function TodoList({nameTodo, todos}) {
  return (
    <div className="todolist">
        <h1>{nameTodo}</h1>
        <p>{todos}</p>
    </div>
  )
}

export default TodoList