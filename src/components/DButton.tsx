import { MouseEventHandler } from "react"

interface IDButton {
  onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
  return (
    <button
      onClick={onClick}
      
    >
      ENTRAR
    </button>
  )
}

export default DButton
