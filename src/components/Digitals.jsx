import React from 'react'

import DVSketch1 from '../assets/DVSketch1.png'
import DVSketch2 from '../assets/DVSketch2.png'
import LogBuckets from '../assets/LogBuckets.png'
import GraphLayout from '../assets/GraphLayout.png'
import NewIcons from '../assets/NewIcons.png'
import TechGraph1 from '../assets/TechGraph1.png'
import TechGraph2 from '../assets/TechGraph2.png'
import TwitterPlan from '../assets/TwitterPlan.png'
import TwitterStatic from '../assets/TwitterStatic.png'
import Comp from '../assets/Comp.mp4'
import TwitterMockup from '../assets/TwitterMockup.mp4'

function Digitals() {
  return (
    <div>
        <div className='max-w-[1200px] mx-auto w-full flex flex-col justify-center text-3xl py-12 px-12'>
            <h1 className='py-4'>2 / Digital Visuals</h1>
            <p className='text-lg'>Applying updated style guides to digital visuals in the 'Logarithmic Buckets' article. The technical graphs were updated to add a little explanation to help it stand alone as a diagram.</p>

            <div className='pt-8'>
                <img className='rounded-md' src={LogBuckets} />
            </div>
            <p className='py-2 text-sm text-zinc-500'>Article hero image updated per brand book 2.0</p>

            <div className='pt-8 grid grid-cols-2 gap-6'>
                <div>
                    <img className='rounded-md' src={DVSketch1} />
                </div>
                <div>
                    <img className='rounded-md' src={DVSketch2} />
                </div>
            </div>
            <p className='py-2 text-sm text-zinc-500'>Deconstructing existing graphs to plan updated version</p>

            <div className='pt-8 grid grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <img className='rounded-md' src={GraphLayout} />
                </div>
                <div className='col-span-1'>
                    <img className='rounded-md' src={NewIcons} />
                </div>
            </div>
            <p className='py-2 text-sm text-zinc-500'>Graph plan and updated icons in light/dark mode options</p>

            <div className='pt-8'>
                <img className='rounded-md' src={TechGraph1} />
                <p className='py-2 text-sm text-zinc-500'>DLL or the heap - Matching example</p>
            </div>
            <div className='pt-8'>
                <img className='rounded-md' src={TechGraph2} />
                <p className='py-2 text-sm text-zinc-500'>Logarithmic buckets - Matching example</p>
            </div>

            <p className='pt-8 text-lg'>Updated the twitter announcement per brand book 2.0, and added an animated background. The animation is looped and can be used throughout digital media where appropriate.</p>
            <div className='pt-8'>
                <img className='rounded-md' src={TwitterPlan} />
                <p className='py-2 text-sm text-zinc-500'>Layout breakdown for twitter announcement visual</p>
            </div>

            <div className='pt-8 grid grid-cols-2 gap-6'>
                <div>
                    <img className='rounded-md' src={TwitterStatic} />
                    <p className='py-2 text-sm text-zinc-500'>Static</p>
                </div>
                <div>
                    <video src={Comp} type="video/mp4" autoPlay loop muted className='rounded-md' />
                    <p className='py-2 text-sm text-zinc-500'>Dynamic</p>
                </div>
            </div>

            <div className='pt-8'>
                <video src={TwitterMockup} type="video/mp4" autoPlay loop muted className='rounded-md' />
                <p className='py-2 text-sm text-zinc-500'>Twitter post mockup</p>
            </div>
        </div>
    </div>
  )
}

export default Digitals