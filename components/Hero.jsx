import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5'>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
                <h1 className='text-center xl:text-left mb-6'>Where <span className='text-accent'>Joyful</span> Cycling Begins</h1>
                <p className='mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, iure dolorem. Ullam, necessitatibus ut illo in nihil quis debitis, consequatur dicta quaerat harum qui voluptas nobis sit nemo consequuntur sint?</p>
                <div className="flex items-center gap-4 mx-auto xl:mx-0">
                    <Link href={'/our-bikes'} className='mx-auto mx:mx-0'>
                        <button className='btn btn-primary'>Shop now</button>
                    </Link>
                    <Link href={'/our-bikes'} className='mx-auto mx:mx-0'>
                        <button className='btn btn-accent'>Shop now</button>
                    </Link>
                </div>
            </div>
            <div className="hidden xl:flex ">
                <Image src={'/hero/hero_bike.png'} alt='hero' width={765} height={480} quality={100} />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero