import { login } from "./login"

describe('login', () => {

    const mockEmail = 'email@email.com'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas caso as informações sejam inválidas', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso as informações sejam inválidas', async() => {
        const response = await login('email@invalido.com', '71615')
        expect(response).toBeFalsy()
    })
})