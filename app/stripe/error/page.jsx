import Link from 'next/link'
import React from 'react'

const StripeErrorPage = () => {
  return (
    <section className='py-72'>
      <div className="container mx-auto">
        <h3 className='text-center mb-4'>Something was wrong!</h3>
        <Link href={'/'}>
            <button className='btn btn-accent mx-auto'>
                Back to the homepage
            </button>
        </Link>
      </div>
    </section>
  )
}

export default StripeErrorPage