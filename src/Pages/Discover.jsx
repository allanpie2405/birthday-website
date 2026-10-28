import img1 from '../assets/lady-gaga-1.jpg'
import img2 from '../assets/lady-gaga-2.jpg'
import img3 from '../assets/lady-gaga-3.jpg'
import arrowImg from '../assets/Arrow.png'
import surprise from '../assets/surprise.jpg'
import Carousel from '../components/Carousel'
const slides = [
    {
        image: img1,
        alt: 'Retrato em preto e branco',
        title: 'Parabéns, meu amor',
        description:
            'Aproveite o seu dia especial.'
    },
    {
        image: img2,
        alt: 'Retrato artístico em preto e branco',
        title: 'Você é especial',
        description:
            'Que seu dia seja tão incrível quanto você.'
    },
    {
        image: img3,
        alt: 'Retrato artístico',
        title: 'Te amo',
        description:
            'Que nunca faltem motivos para sorrir.'
    }
]

function Discover() {
    return (
        <main className='relative min-h-dvh overflow-hidden bg-black'>
            <Carousel slides={slides} interval={3000} />
            <div className='flex justify-center items-center'>
                <div className='w-[calc(100%-50px)] md:w-[calc(100%-96px)] max-w-2xl'>
                    <p className='mt-7.5 md:mt-12 text-white md:text-xl font-playfair'>E como eu sei que você gosta de Lady Gaga, que tal um parabéns da nossa Lady Gaga brasileira</p>
                    <img src={arrowImg} alt="" className='justify-self-center' />
                    <div className='flex flex-col justify-center'>
                        <p className='mt-7.5 mb-2 text-center text-white md:text-xl font-playfair font-bold'>Beamon</p>
                        <video
                            src=""
                            poster={surprise}
                            controls
                            playsInline
                            className="mx-auto w-full max-w-[330px] aspect-[330/252] md:max-w-lg lg:max-w-xl rounded-2xl shadow-[0_0_35px_20px_rgba(239,68,68,0.15)]"
                        />
                        <p className='mt-2 text-white md:text-lg font-playfair text-center font-bold'>@beapozzebon</p>
                    </div>
                    <p className='mt-6.75 mb-10 md:mb-16 text-white md:text-xl md:leading-relaxed font-playfair'>Parabéns meu amor por mais um ano de vida, passar mais um ano da minha vida com você foi incrível, sou muito grato por ter você na minha vida, eu te desejo muitos anos de vida e felicidade pela frente</p>
                </div>
            </div>
        </main>
    )
}
export default Discover