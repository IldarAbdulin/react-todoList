import './AddList.scss'
import List from '../List'
import Badge from '../Badge'
import { useState } from 'react'

function AddButtonList({colors}) {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

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
              <input type="text" placeholder='Название папки' className='field'/>
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
              <button className='button'>Добавить</button>
          </div>
    </div>
  )
}
export default AddButtonList