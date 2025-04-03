import React from 'react'

{/* each movie in the generated list of movies at the end, output the movie name which is passed in as a prop */}
export default function Movie(props) {
    const {movie} = props

    return (
        <div className='rounded flex flex-col bg-amber-200 py-2'>
            <div className='flex flex-col'>
                <h2 className='text-center font-semibold text-3xl'>
                    {movie.replaceAll('_',' ')}
                </h2>
            </div>
        </div>
    )
}