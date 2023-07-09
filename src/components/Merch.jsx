import React from 'react'

import lentPhoneMockup1 from '../assets/lentPhoneMockup1.png'
import lentPhoneMockup2 from '../assets/lentPhoneMockup2.png'

function Merch() {
  return (
    <div>
        <div className='max-w-[1200px] mx-auto w-full flex flex-col justify-center text-3xl py-12 px-12'>
        <h1 className='py-4'>4 / Merch</h1>
        <p className='text-lg'>Morpho's brand lends itself well to transfomations, so a lenticular phone case that changes its appearance depending on the angle it's seen from could be an appropriate piece of branded merch.</p>

        <div className='pt-8 grid grid-cols-2 gap-6'>
            <div>
                <img className='rounded-md' src={lentPhoneMockup1} />
                <p className='py-2 text-sm text-zinc-500'>Angle 1 / Dark</p>
            </div>
            <div>
                <img className='rounded-md' src={lentPhoneMockup2} />
                <p className='py-2 text-sm text-zinc-500'>Angle 2 / Light</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Merch