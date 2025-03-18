import { MouseEventHandler } from "react"
import '../styles/Main.css'
import { Button } from "@chakra-ui/react"

interface IDButton {
  onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
  return (
    <Button 
    bgImage="linear-gradient(260deg,hsla(277, 79%, 22%, 1),hsla(190, 100%, 50%, 1))" 
    onClick={onClick}
    padding={'15px'}
    margin={'15px'}
    color={'white'}
    border={'2px solid black'}
    borderRadius={'25px'}
    >
      ENTRAR
    </Button>
  )
}

export default DButton
