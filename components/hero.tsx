import Image from 'next/image'
import HeroImage from '@/public/images/kaleidoscope.webp'

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image className="rounded-full mb-5" src={HeroImage} width={56} height={56} priority alt="Me" />
          <h1 className="h1 font-aspekta mb-5">
            Huzaifa's{' '}
            <span className="inline-flex relative text-custom-yellow-500 before:absolute before:inset-0 before:bg-custom-yellow-200 dark:before:bg-custom-yellow-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              Kaleidoscope:
            </span>{' '}
            A Symphony of Ideas.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Harmonizing a melody of diverse thoughts, from coding marvels to enriching life lessons.
          </p>
        </div>
      </div>
    </section>
  )
}
