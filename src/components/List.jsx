import React from 'react'
import SectionWrapper from './SectionWrapper'
import Movie from './Movie'
import Button from './Button'

{/* output the list of movies after the user makes their selections, generated movie list is passed in as a prop */}
export default function List(props) {
    const {list} = props

    return (
        <SectionWrapper id={'list'} header={"Here's What We Found"}>
            <div className='flex flex-col gap-6'>
                {list.map((movie) => {
                    return (
                        <Movie movie={movie}/>
                    )
                })}
            </div>
            <div className='flex justify-center p-25'>
                <Button func={() => {
                    window.location.href = '#generator'
                }} text={"Back to Filters"}></Button>
            </div>
        </SectionWrapper>
    )
}