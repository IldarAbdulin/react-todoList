import close from '../../images/icons/close.svg'
import { Link } from 'react-router-dom'

function sideBarItem({todo, circle, title, removeTask}) {
  return (
        <div key={todo.id} className='item active'>
          <div className='item__left-site'>
              <img width={12} height={12} src={circle} />
              <p>{title}</p>
          </div>
          <div className='item__right-site'>
            <Link to='/'>
              <img onClick={() => removeTask(todo.id)} className='close' src={close}/>
            </Link>
          </div>
      </div>
  )
}
export default sideBarItem