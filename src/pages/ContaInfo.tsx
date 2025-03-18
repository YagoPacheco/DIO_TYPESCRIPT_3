import { Center, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    return (
        <>
            <Center>
                <button>
                    <Link to='/conta/1'>
                        <Text>
                            Voltar
                        </Text>
                    </Link>
                </button>
            </Center>
            <Center>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color='white' />
                            </Center>
                        ) :
                        (
                            <>
                                <Text>Informações da conta</Text>
                                
                            </>
                        )
                }
            </Center>
        </>
    )
}

export default ContaInfo
