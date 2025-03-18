import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";


const Home = () => {
    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if (!loggedIn) {
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }

    return (
        <Center>
            <Box display={'flex'} padding="25px">
                <Card>
                    <Center>
                        <h1><b>LOGIN</b></h1>
                    </Center>
                    <fieldset>
                        <label>
                            Email
                            <Input border={'1px solid black'} placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </label>
                        <label>
                            Senha
                            <Input placeholder="password" />
                        </label>
                    </fieldset>
                    <Center>
                        <DButton
                            onClick={() => validateUser(email)}
                        />
                    </Center>
                </Card>
            </Box>
        </Center>
    );
}

export default Home;
