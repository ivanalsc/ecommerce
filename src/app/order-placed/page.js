import Link from 'next/link'
import React from 'react'

const orderPlaced = () => {
  return (
    <div className='m-auto flex flex-col items-center justify-center py-32'>
        Thanks for your purchase!
        <Link href="/" className="underline decoration-solid mt-4">Go to home page</Link>
    </div>
  )
}

export default orderPlaced