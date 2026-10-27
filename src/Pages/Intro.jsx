function Intro() {
    return (
        <main className='relative min-h-screen overflow-hidden bg-black'>
            <div className='absolute z-0 -translate-x-[27px] translate-y-[407px] w-[415px] h-[415px] rounded-full bg-[#FF0000] opacity-20 blur-xl'></div>
            <div className="relative flex justify-center items-center ">
                <div className="mt-40.75 w-[calc(100%-56px)]">
                    <div>
                        <p className="text-2xl text-white font-playfair ">Feliz aniversario</p>
                        <h1 className="text-9xl text-white font-playfair italic">Davi<span className="text-red-600">.</span></h1>
                    </div>
                    <div className="bg-red-600 mt-1 mb-8 h-0.25 w-16"></div>
                    <p className=" text-white text-[20px] font-playfair w-75.5">Como hoje é um dia especial, que tal comemorarmos com uma cantora especial…</p>
                    <button className=" text-white text-[18px] font-bold mt-8.75 h-13.5 bg-transparent px-5.25 py-3.75 rounded-[50px] border-white border">Descobrir</button>
                </div>
            </div>
        </main>
    )
}
export default Intro