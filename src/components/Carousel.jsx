
import { useEffect, useState } from 'react'

function Carousel({ slides, interval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (slides.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % slides.length)
        }, interval)

        return () => clearInterval(timer)
    }, [slides.length, interval])

    if (!slides.length) return null

    const currentSlide = slides[currentIndex]

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

            {/* Imagem atual */}
            <img
                key={currentSlide.image}
                src={currentSlide.image}
                alt={currentSlide.alt || ''}
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Degradê para melhorar a leitura do texto */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black" />

            {/* Conteúdo */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-7 pb-8">

                {/* Barras de progresso */}
                <div className="w-2/6 mb-5 flex gap-2">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.image}
                            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                                index === currentIndex
                                    ? 'bg-red-500'
                                    : 'bg-neutral-600'
                            }`}
                        />
                    ))}
                </div>

                <h2 className="font-playfair text-4xl font-bold leading-tight">
                    {currentSlide.title}
                    <span className="text-red-500">.</span>
                </h2>

                <p className="mt-3 text-base leading-snug font-playfair text-neutral-300">
                    {currentSlide.description}
                </p>
            </div>
        </section>
    )
}

export default Carousel
