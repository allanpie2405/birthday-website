import './home.css'

function Home() {
    return (
        <main className='relative min-h-screen overflow-hidden bg-black'>
            <div className='absolute -translate-12 w-[243px] h-[243px] rounded-full bg-red-600 opacity-20 blur-xl'></div>

            <div className='flex justify-center items-center'>
                <div className='mt-[117px] w-[90%]'>
                    <p className='text-2xl text-white'>
                        Acesso exclusivo
                    </p>

                    <h2 className='text-5xl text-white'>
                        Só o Davi pode entrar
                        <span className='text-red-600'>.</span>
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default Home