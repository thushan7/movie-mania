import React from 'react'
import SectionWrapper from './SectionWrapper'
import Movie from './Movie'

export default function List(props) {
    const {list} = props

    return (
        <SectionWrapper id={'list'} header={"Here's What We Found"}>
            <div className='flex flex-col'>
                {list.map((movie) => {
                    return (
                        <Movie movie={movie}/>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}