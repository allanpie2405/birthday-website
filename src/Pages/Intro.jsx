import { useNavigate } from "react-router-dom"

function Intro() {
    const navigate = useNavigate()
    return (
        <main className='relative min-h-dvh overflow-hidden bg-black'>
            <div className='absolute z-0 top-[60%] -left-[27px] w-[415px] h-[415px] md:w-[560px] md:h-[560px] lg:w-[680px] lg:h-[680px] rounded-full bg-[#FF0000] opacity-20 blur-xl'></div>
            <div className="relative flex min-h-dvh justify-center items-start md:items-center">
                <div className="mt-[clamp(4rem,24dvh,10.1875rem)] md:mt-0 w-[calc(100%-56px)] max-w-xl lg:max-w-2xl py-10">
                    <div>
                        <p className="text-2xl md:text-3xl text-white font-playfair">Feliz aniversario</p>
                        <h1 className="text-display short:text-8xl leading-none text-white font-playfair italic">Davi<span className="text-red-600">.</span></h1>
                    </div>
                    <div className="bg-red-600 mt-1 mb-8 h-0.25 w-16 md:w-24"></div>
                    <p className="text-white text-lg xs:text-[20px] md:text-2xl font-playfair w-full max-w-75.5 md:max-w-lg">Como hoje é um dia especial, que tal comemorarmos com uma cantora especial…</p>
                    <button onClick={() => navigate('/discover')} className="text-white text-[18px] md:text-xl font-bold mt-8.75 h-13.5 md:h-16 bg-transparent px-5.25 md:px-8 py-3.75 rounded-[50px] border-white border">Descobrir</button>
                </div>
            </div>
        </main>
    )
}
export default Intro
