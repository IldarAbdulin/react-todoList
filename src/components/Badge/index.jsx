import './Badge.scss'
import cn from 'classnames'

function Badge({color, onClick, className}) {
  return (
    <i onClick={onClick} className={cn('badge', {[`badge--${color}`]: color}, className)}></i>
  )
}

export default Badge