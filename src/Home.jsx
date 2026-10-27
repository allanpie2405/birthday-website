import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

function Home() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleLogin() {
        const userAcess = "davi"
        const passwordAcess = 1234

        const user_submit = user
        const password_submit = password
        if (user_submit.toLowerCase().trim() === userAcess && Number(password_submit) === passwordAcess) {
            navigate('/introduction')
        } else {
            console.log("não passou na validação")
        }

    }
    return (
        <main className='relative min-h-screen overflow-hidden bg-black'>
            <div className='absolute z-0 -translate-x-13 -translate-y-18 w-[243px] h-[243px] rounded-full bg-red-600 opacity-20 blur-xl'></div>

            <div className='relative z-10 flex justify-center items-center'>
                <div className='mt-[117px] w-[calc(100%-56px)]'>
                    <p className='mb-2.75 text-2xl font-playfair font-extralight text-white '>
                        Acesso exclusivo
                    </p>

                    <h2 className='w-68 text-5xl font-playfair  text-white'>
                        Só o Davi pode entrar
                        <span className='text-red-600'>.</span>
                    </h2>
                    <div className='flex flex-col gap-4.5 mt-4'>

                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor="user" className='font-playfair text-xl text-white'>Usuário:</label>
                            <input
                                type="text"
                                id="user"
                                value={user}
                                onChange={(event) => setUser(event.target.value)}
                                placeholder='Nome do usuário'
                                className='w-full h-12  p-4 text-gray-light bg-gray-oblique border-gray-oblique-light border rounded-[12px]' />
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor="password" className='font-playfair text-xl text-white'>Senha:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder='**************'
                                className='w-full h-12 p-4 text-gray-light bg-gray-oblique border-gray-oblique-light border rounded-[12px]' />
                        </div>
                        <button onClick={handleLogin} className=' h-12 font-playfair text-white text-2xl bg-red-600 rounded-[12px]'>Entrar</button>
                    </div>
                    <p className=' mt-9 font-playfair text-gray-light '>Dica: seu primeiro nome e a data do seu aniversario</p>
                </div>
            </div>
        </main>
    )
}

export default Home