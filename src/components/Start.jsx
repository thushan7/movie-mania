import React from 'react'

export default function Start() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center 
        justify-center text-center max-w-[800px] w-full mx-auto p-8'>
            <h1 className='font-bold text-6xl'>
                Movie<span>Mania</span>
            </h1>
            <p className='text-2xl'>
                Having trouble finding a movie? Use our <span>customizable filters</span> to tell us exactly what you're in 
                the mood for, and we'll deliver a curated <span>selection of films</span> just for you!
            </p>
            <button className='px-5 py-3 rounded-md bg-amber-100 hover:bg-amber-200 hover:cursor-pointer'>
                <p className='font-bold'>Get Started</p>
            </button>
        </div>
    )
}