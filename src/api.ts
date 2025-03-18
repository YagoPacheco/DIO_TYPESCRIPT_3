const conta = {
    email: 'email@email.com',
    password: '123456',
    name: 'Nome Genérico',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
