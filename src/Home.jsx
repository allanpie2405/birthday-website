import './home.css'

function Home() {
    return (
        <main className='relative min-h-screen overflow-hidden bg-black'>
            <div className='absolute z-0 -translate-12 w-[243px] h-[243px] rounded-full bg-red-600 opacity-20 blur-xl'></div>

            <div className='relative z-10 flex justify-center items-center'>
                <div className='mt-[117px] w-[90%]'>
                    <p className='text-2xl font-playfair font-extralight text-white '>
                        Acesso exclusivo
                    </p>

                    <h2 className='text-5xl font-playfair  text-white'>
                        Só o Davi pode entrar
                        <span className='text-red-600'>.</span>
                    </h2>
                    <div className='flex flex-col gap-4.5'>

                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor="input" className='font-playfair text-xl text-white'>Usuário:</label>
                            <input type="text" id="user"  className='w-full h-12 bg-gray-oblique border-gray-oblique-light border rounded-[12px]'/>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor="password" className='font-playfair text-xl text-white'>Senha:</label>
                            <input type="password" name="" id="password" className='w-full'/>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home