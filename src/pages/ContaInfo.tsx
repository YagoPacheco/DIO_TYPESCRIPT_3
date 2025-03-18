import { Center, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ContaInfo = () => {
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
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>
        </>
    )
}

export default ContaInfo
