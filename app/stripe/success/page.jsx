import Link from 'next/link'
import React from 'react'

const StripeSuccessPage = () => {
  return (
    <section className='py-72'>
      <div className="container mx-auto">
        <h3 className='text-center mb-4'>Your payment was successful! Thank you!</h3>
        <Link href={'/'}>
            <button className='btn btn-primary mx-auto'>
                Back to the homepage
            </button>
        </Link>
      </div>
    </section>
  )
}

export default StripeSuccessPage