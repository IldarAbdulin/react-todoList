import './Tasks.scss'
import pen from '../../assets/img/pen.svg'

import { Link } from 'react-router-dom';

import axios from 'axios';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

function Tasks({list, onEditTitle, onAddTask, onEditTask, onRemoveTask, withoutEmpte, onCompleteTask}) {
    const editTitle = () => {
        const newTitle = window.prompt('Название папки', list.name);
        if(newTitle) {
            onEditTitle(list.id, newTitle);
            axios.patch('http://localhost:3001/lists/' + list.id, {
                name: newTitle
            }).catch(() => {
                alert('Не удалось обновить название папки :(')
            })
        }
    }

  return (
    <div className="tasks">

        <Link style={{textDecoration:'none'}} to={`/lists/${list.id}`}>
            <h2 style={{color: list.color.hex}} className="tasks__title">
                {list.name} 
                <img onClick={editTitle} src={pen} alt='edit icon'/>
            </h2>
        </Link>

        <div className="tasks__items">
            {!withoutEmpte && list.tasks && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
            {
              list.tasks && list.tasks.map((task) => (
                <Task onComplete={onCompleteTask} list={list} onEdit={onEditTask} onRemove={onRemoveTask} key={task.id} {...task}/>
             ))
            }
            <AddTaskForm key={list.id} list={list} onAddTask={onAddTask}/>
        </div>
    </div>
  )
}
export default Tasks