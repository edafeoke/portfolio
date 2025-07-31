import Image from 'next/image'
import authorImage from '@/public/images/authors/edafe-oke.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Edafe.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          A full-stack software developer with 5+ years of experience in building
          scalable web and mobile applications across diverse industries.
          Proficient in both frontend and backend development using technologies
          like React, TypeScript, Node.js, Python, and FastAPI. Skilled in
          designing intuitive user interfaces, building RESTful APIs, and
          deploying cloud-native solutions. Adept at collaborating with
          cross-functional teams to deliver high-quality products on time.
          Passionate about writing clean, maintainable code and continuously
          improving system performance and user experience.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Edafe Oke'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
