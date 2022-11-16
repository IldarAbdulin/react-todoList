import './List.scss';

import { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';

import SidebarItem from './SidebarItem';
import FolderCircles from './props/FolderCircles';
import TodoList from '../TodoList/TodoList';

//circle images
import grayCircle from '../../images/circle-colors/gray.svg'
import greenCircle from '../../images/circle-colors/green.svg'
import blueCircle from '../../images/circle-colors/blue.svg'
import pinkCircle from '../../images/circle-colors/pink.svg'
import lightGreenCircle from '../../images/circle-colors/lightGreen.svg'
import violetCircle from '../../images/circle-colors/violet.svg'
import blackCircle from '../../images/circle-colors/black.svg'
import orangeCircle from '../../images/circle-colors/orange.svg'

//icons
import add from '../../images/icons/add.svg'
import darkClose from '../../images/icons/darkClose.svg'

function List() {

    const [active, setActive] = useState(true);
    const [todos, setTodos] = useState([]);
    const [userInput, setUserInput] = useState('');

    const addTask = (input) => {
        if(input) {
            const newItem = {
                id: Math.floor(Math.random() * 1000),
                circle: lightGreenCircle,
                task: userInput,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    const circle = [
        {
            circleColor: grayCircle,
        },
        {
            circleColor: greenCircle,
        },
        {
            circleColor: blueCircle,
        },
        {
            circleColor: pinkCircle,
        },
        {
            circleColor: lightGreenCircle,
        },
        {
            circleColor: violetCircle,
        },
        {
            circleColor: blackCircle,
        },
        {
            circleColor: orangeCircle,
        }
    ]

  return (
    <div style={{display:'flex'}}>
        <div className="sidebar">
            <div className='sidebar__head'>
                <svg style={{cursor:'pointer'}} width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z" fill="#7C7C7C"/>
                </svg>  
                <p>Все задачи</p>
            </div>

            <div className='sidebar__items'>
                {
                    todos.map((todo) => (
                        <Link style={{textDecoration:'none', color:'black'}} to='/todolist'>
                            <SidebarItem
                                key={todo.id}
                                todo={todo}
                                circle={todo.circle}
                                title={todo.task}
                                removeTask={removeTask}
                            />
                        </Link>
                    ))
                }
            </div>

            <div className='sidebar__add-folder'>
                <div onClick={() => setActive(!active)} className='add-folder__head' style={{cursor:'pointer'}}>
                    <img src={add} width={23} height={23}/>
                    <p>Добавить папку</p>
                </div>
                <div className={active ? 'add-folder__form' : 'add-folder__form active'}>
                    <img onClick={() => setActive(!active)} className='close' src={darkClose} alt="1" />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            value={userInput} 
                            onChange={handleChange} 
                            onKeyDown={handleKeyPress} 
                            placeholder='Название папки'
                        />
                        <div className='form__colors'>
                            {
                                circle.map((col) => (
                                    <FolderCircles
                                        circle={col.circleColor}
                                    />
                                ))
                            }
                        </div>
                        <button>Добавить</button>
                    </form>
                </div>
            </div>

        </div>

        <div>
            <Routes>
                <Route path='todolist' element={
                    todos.map((todo) => (
                        <TodoList
                            nameTodo={todo.task}
                            todos={todo.id}
                        />
                    ))
                }/>
            </Routes>
        </div>
    </div>
  )
}
export default List