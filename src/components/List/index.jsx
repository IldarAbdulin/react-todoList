import './List.scss'
import cn from 'classnames'
import Badge from '../Badge'
import removeSvg from '../../assets/img/remove.svg';

function List({items, isRemovable, onClick, onRemove}) {
  const removeList = (item) => {
    if(window.confirm('Вы уверены что хотите удалить эту папку ?')) {
      onRemove(item)
    }
  }
  return (
    <ul onClick={onClick} className="list">
        {
            items.map((item, index) => (
              <li key={index} className={cn(item.className, {active : item.active})}>
                <i>{item.icon ? (
                    item.icon
                    ) : (
                    <Badge color={item.color}/>
                    )}
                </i>
                <span>{item.name}</span>
                {isRemovable && <img onClick={() => removeList(item)} className='list__remove-icon' src={removeSvg} alt="Remove icon"/>}
              </li>
            ))
        }
    </ul>
  )
}
export default List