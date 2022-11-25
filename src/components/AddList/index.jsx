import './AddList.scss'

import List from '../List'
import Badge from '../Badge'

import closeSvg from '../../assets/img/close.svg'

import { useState, useEffect} from 'react'
import axios from 'axios'

function AddList({colors, onAdd}) {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(1);
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if(Array.isArray(colors)) {
      setSelectedColor(colors[0].id)
    }
  }, [colors])

  const onClose = () => {
    setVisiblePopup(false)
    setInputValue('')
    setSelectedColor(colors[0].id)
  }

  const addTask = () => {
    if(!inputValue) {
      alert('Строка не может быть пустой')
      return; 
    }
    setIsLoading(true)
    axios
      .post('http://localhost:3001/lists', {name: inputValue, colorId: selectedColor})
      .then(({data}) => {
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        const listObj = {...data, color: {name: color}}
        onAdd(listObj)
        console.log(data)
        onClose()
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className='add-list'>
        <List onClick={() => setVisiblePopup(!visiblePopup)} items={[
            {
              className: 'list__add-button',
              icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ,
              name: 'Добавить список'
            }
        ]}
        />    
          <div className={visiblePopup ? 'add-list__popup active' : 'add-list__popup'}>
              <input 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
                type="text" 
                placeholder='Название папки' 
                className='field'
              />
              <img onClick={onClose} src={closeSvg} className='add-list__popup-close-btn' alt='close icon'/>
              <div className="add-list__popup-colors">
                  {
                    colors && colors.map((color) => (
                      <Badge 
                        onClick={() => setSelectedColor(color.id)} 
                        key={color.id} 
                        color={color.name} 
                        className={selectedColor === color.id && 'active'}
                        />
                    ))
                  }
              </div>
              <button onClick={addTask} className='button'>
                  {isLoading ? 'Добавление...'  : 'Добавить'}
              </button>
          </div>
    </div>
  )
}
export default AddList