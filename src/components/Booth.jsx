import React from 'react'

import ExpoBoothSketch from '../assets/ExpoBoothSketch.png'
import ExpoBoothFlat from '../assets/ExpoBoothFlat.png'
import ExpoBoothMockup from '../assets/ExpoBoothMockup.png'

function Booth() {
  return (
    <div>
        <div className='pt-8 max-w-[1200px] mx-auto w-full flex flex-col justify-center text-3xl py-12 px-12'>
            <h1 className=''>1 / Exhibition Booth</h1>
            <p className='pt-4 text-lg'>The idea is to introduce the company and inspire discussion. In order to do so, I ordered the focal points with scale, beginning with the logo, moving onto a very brief statement of purpose, and finally offering a slightly more detailed description of Morpho's origins and outlook.</p>

            <div className='pt-8 grid sm:grid-cols-2 gap-6'>
                <div>
                    <img className='rounded-md' src={ExpoBoothSketch} />
                    <p className='py-2 text-sm text-zinc-500'>With a large canvas such as the backdrop for an exhibition booth, my main concern is to separate the three sections without leaving excess negative space.</p>
                </div>
                <div>
                    <img className='rounded-md' src={ExpoBoothFlat} />
                    <p className='py-2 text-sm text-zinc-500'>Rearranged slightly in order to place elements in high-contrast areas.</p>
                </div>
            </div>

            <div className='pt-8'>
                <img className='rounded-md' src={ExpoBoothMockup} />
                <p className='py-2 text-sm text-zinc-500'>Logo is dominant, but all elements are readable and follow a logical engagement order.</p>
            </div>

        </div>
    </div>
  )
}

export default Booth