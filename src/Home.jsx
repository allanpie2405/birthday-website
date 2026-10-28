import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [hasError,setHasError] = useState(false)
    const navigate = useNavigate()

    function handleLogin() {
        const userAcess = "davi"
        const passwordAcess = "18/11/2008"

        const user_submit = user
        const password_submit = password
        if (user_submit.toLowerCase().trim() === userAcess && password_submit === passwordAcess) {
            setHasError(false)
            navigate('/introduction')
        } else {
            setHasError(true)
        }

    }
    return (
        <main className='relative min-h-dvh overflow-hidden bg-black'>
            <div className='absolute z-0 -translate-x-13 -translate-y-18 w-[243px] h-[243px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full bg-red-600 opacity-20 blur-xl'></div>

            <div className='relative z-10 flex min-h-dvh justify-center items-start md:items-center'>
                <div className='mt-[clamp(2rem,17dvh,7.3125rem)] md:mt-0 w-[calc(100%-56px)] max-w-68 xs:max-w-none md:max-w-md lg:max-w-lg py-10'>
                    <p className='mb-2.75 text-2xl md:text-3xl font-playfair font-extralight text-white'>
                        Acesso exclusivo
                    </p>

                    <h2 className='max-w-68 md:max-w-none text-4xl xs:text-5xl md:text-6xl short:text-4xl font-playfair text-white'>
                        Só o Davi pode entrar
                        <span className='text-red-600'>.</span>
                    </h2>
                    <div className='flex flex-col gap-4.5 mt-4 md:mt-6 md:gap-6'>

                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor="user" className='font-playfair text-xl md:text-2xl text-white'>Usuário:</label>
                            <input
                                type="text"
                                id="user"
                                value={user}
                                onChange={(event) => setUser(event.target.value)}
                                placeholder='Nome do usuário'
                                className={`w-full h-12 md:h-14 p-4 text-base md:text-lg text-gray-light bg-gray-oblique border-gray-oblique-light border rounded-[12px] transition-shadow duration-200 ${
                                    hasError ? 'border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.65)]' : ''
                                }`} />
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor="password" className='font-playfair text-xl md:text-2xl text-white'>Senha:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder='**************'
                                className={`w-full h-12 md:h-14 p-4 text-base md:text-lg text-gray-light bg-gray-oblique border-gray-oblique-light border rounded-[12px] transition-shadow duration-200 ${
                                    hasError ? 'border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.65)]' : ''}`} />
                        </div>
                        <button onClick={handleLogin} className='h-12 md:h-14 font-playfair text-white text-2xl md:text-3xl bg-red-600 rounded-[12px]'>Entrar</button>
                    </div>
                    <p className='mt-9 md:text-lg font-playfair text-gray-light'>Dica: seu primeiro nome e a data do seu aniversario ex: 00/00/0000</p>
                </div>
            </div>
        </main>
    )
}

export default Home