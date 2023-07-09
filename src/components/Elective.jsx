import React from 'react'

import Comp2 from '../assets/Comp2.mp4'

function Elective() {
  return (
    <div className='max-w-[1200px] mx-auto w-full flex flex-col justify-center text-3xl py-12 px-12'>
        <h1 className='py-4'>3 / Elective: Dynamic Ad</h1>
        <p className='text-lg'>Formatted for a standard Google 300x600px ad, I animated a simple eye-catching ad to promote Morpho online.</p>

        <div className='max-w-[450px] pt-8 flex flex-col justify-center'>
            <video src={Comp2} type="video/mp4" autoPlay loop muted className='rounded-md' />
        </div>
    </div>
  )
}

export default Elective