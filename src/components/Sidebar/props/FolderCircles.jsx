import { useState } from "react"

function FolderCircles({circle}) {
    const [active, setActive] = useState(false)
  return (
    <img onClick={() => setActive(!active)} className={active ? 'color active' : 'color'} src={circle} />
  )
}

export default FolderCircles