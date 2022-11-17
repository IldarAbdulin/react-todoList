import { useState } from "react"
import round from '../../images/icons/round.svg'
import roundChecked from '../../images/icons/roundChecked.svg'
import close from '../../images/icons/close.svg'

function TodoImgActive({task, newTodo, removeNewTask}) {
    const [active, setActive] = useState(false)
  return (
    <div key={task.id} style={{display:'flex', justifyContent:'space-between', border:'1px solid #e3e3e3', borderRadius:'10px', cursor:'pointer', padding:'10px 15px', margin:'10px 0', width:'420px'}}>
      <div style={{display:'flex', alignItems:'center'}}>
        <img onClick={() => setActive(!active)} src={active ? roundChecked : round}/>
        <p>{newTodo}</p>
      </div>
      <div style={{display:'flex', alignItems:'center'}}>
        <img className="close" width={16} height={16} onClick={() => removeNewTask(task.id)} src={close}/>
      </div>
    </div>
  )
}
export default TodoImgActive