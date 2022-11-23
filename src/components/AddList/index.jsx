import './AddList.scss'
import List from '../List'
import Badge from '../Badge'
import closeSvg from '../../assets/img/close.svg'
import { useState } from 'react'

function AddButtonList({colors, onAdd}) {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

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
    const color = colors.filter(c => c.id === selectedColor)[0].name;
    onAdd({ id: Math.random(), name: inputValue, color: color})
    onClose()
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
              <img onClick={onClose} src={closeSvg} className='add-list__popup-close-btn'/>
              <div className="add-list__popup-colors">
                  {
                    colors.map((color) => (
                      <Badge 
                        onClick={() => setSelectedColor(color.id)} 
                        key={color.id} 
                        color={color.name} 
                        className={selectedColor === color.id && 'active'}
                        />
                    ))
                  }
              </div>
              <button onClick={addTask} className='button'>Добавить</button>
          </div>
    </div>
  )
}
export default AddButtonList