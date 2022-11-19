import './TodoList.scss';
import { useState, useEffect } from 'react';
import add from '../../images/icons/add.svg'
import TodoImgActive from './TodoImgActive';

function TodoList({head, createNewTask}) {
  const [addTask, setAddTask] = useState(false);
  const [newTask, setNewTask] = useState([])
  const [taskValue, setTaskValue] = useState('')

  const addNewTask = (input) => {
    if(input) {
        const createNewTask = {
          id: Math.floor(Math.random() * 1000),
          createTask: taskValue,
          complete: false,
        }
        setNewTask([...newTask, createNewTask])
        localStorage.setItem('createdNewTask', JSON.stringify([...newTask, createNewTask]))
    }
  }
  useEffect(() => {
    const newTask = JSON.parse(localStorage.getItem('createdNewTask'))
    if(newTask) {
      setNewTask(newTask)
    }
  }, [])
  const removeNewTask = (id) => {
    alert('Эта задача будет удалена.')
    setNewTask([...newTask.filter((task) => task.id !== id)])
    localStorage.setItem('createdNewTask', JSON.stringify(newTask.filter((task) => task.id !== id)))
  }

  const handleChange = (e) => {
    setTaskValue(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTask(taskValue)
    setTaskValue("")
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        handleSubmit(e)
    }
  }

  return (
    <div className="todolist">
        <h1>{head}</h1>

        <div className='todolist__todos'>
          {
            newTask.map((task) => (
              <div>
                  <TodoImgActive
                    key={task.id}
                    task={task}
                    newTodo={task.createTask}
                    removeNewTask={removeNewTask}
                  />
              </div>
            ))
          }
        </div>

        {addTask ?
          <div className='todolist__add-task'>
            <form onSubmit={handleSubmit}>
              <input 
                type='text'
                value={taskValue}
                placeholder='Текст задачи'
                onKeyDown={handleKeyPress}
                onChange={handleChange}
              />
            </form>
            <div>
              <button onClick={handleSubmit}>Добавить задачу</button>
              <button onClick={() => setAddTask(!addTask)}>Отмена</button>
            </div>
          </div> 
           : 
          <div onClick={() => setAddTask(!addTask)} className='todolist__create-task'>
             <img width={18} height={18} src={add} />
             <p>Новая задача</p>
          </div>
        }

    </div>
  )
}
export default TodoList