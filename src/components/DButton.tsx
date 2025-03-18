import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"
import '../styles/Main.css'

interface IDButton {
  onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
  return (
    <Button onClick={onClick}>
      Entrar
    </Button>
  )
}

export default DButton
