import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import '../styles/Main.css'


const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Informações inválidas')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }

    return (
        <Center>
            <Box display={'flex'} padding="25px" >
                <Card>
                    <Center>
                        <h1><b>LOGIN</b></h1>
                    </Center>
                    <fieldset>
                        <label>
                            Email
                            <Input border={'1px solid black'} type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </label>
                        <label>
                            Senha
                            <Input border={'1px solid black'} type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </label>
                    </fieldset>
                    <Center>
                        <DButton
                            onClick={() => validateUser(email, password)}
                        />
                    </Center>
                </Card>
            </Box>
        </Center>
    );
}

export default Home;
