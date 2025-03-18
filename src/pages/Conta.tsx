import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <>
            <Center>
                <button>
                    <Link to='/conta/1/infoconta'>
                        <Text>
                            Informações da Conta
                        </Text>
                    </Link>
                </button>
            </Center>
            <Center>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    {
                        userData === undefined || userData === null ?
                            (
                                <Center>
                                    <Spinner size='xl' color='white' />
                                </Center>
                            ) :
                            (
                                <>
                                    <Box
                                                backgroundColor="white"
                                                minHeight="120px"
                                                padding={8}
                                                borderRadius="25px"
                                            >
                                                <Text fontSize='2xl' fontWeight='bold'>
                                                    
                                                </Text>
                                                <Text fontSize='xl'>
                                                    
                                                </Text>
                                            </Box>
                                </>
                            )
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}

export default Conta
