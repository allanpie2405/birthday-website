import './home.css'

function Home() {
    return (
        <main className='relative min-h-screen overflow-hidden bg-black'>
            <div className='absolute z-0 -translate-12 w-[243px] h-[243px] rounded-full bg-red-600 opacity-20 blur-xl'></div>

            <div className='relative z-10 flex justify-center items-center'>
                <div className='mt-[117px] w-[90%]'>
                    <p className='text-2xl font-[playfair-light] font-light text-white '>
                        Acesso exclusivo
                    </p>

                    <h2 className='text-5xl font-[playfair] font-bold text-white'>
                        Só o Davi pode entrar
                        <span className='text-red-600'>.</span>
                    </h2>
                    <label htmlFor="input" ></label>
                    <input type="text" id="user" />
                    <label htmlFor="password"></label>
                    <input type="password" name="" id="password" />
                </div>
            </div>
        </main>
    )
}

export default Home