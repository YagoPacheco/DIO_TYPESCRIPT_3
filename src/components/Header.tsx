import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'
import '../styles/Header.css'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <header>
      <Flex padding='5px'>
        <Box className='banner'>
          <Center>
            <img src='https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000051657/74fb05a0-78a9-423e-ac00-55c228f48c89.png'></img>
            <Text fontSize='3xl'>Dio Bank</Text>
          </Center>
        </Box>
        {
          isLoggedIn && (
            <>
              <Spacer />
              <Button
                onClick={() => logout()}
              >
                Sair
              </Button>
            </>
          )
        }
      </Flex>
    </header>
  )
}
