import './List.scss'
import cn from 'classnames'
import Badge from '../Badge'
import removeSvg from '../../assets/img/remove.svg';

import axios from 'axios';

function List({items, isRemovable, onClick, onRemove}) {
  const removeList = (item) => {
    if(window.confirm('Вы уверены что хотите удалить эту папку ?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id)
      })
    }
  }
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(item.className, { active: item.active })}
        >
          <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
export default List