import React from 'react'
import SectionWrapper from './SectionWrapper'

function Header(props) {
    const {number, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-3'>
                <p className='text-4xl font-semibold'><span>{number}</span></p>
                <h4 className='text-3xl font-semibold'>{title}</h4>
            </div>
            <p className='mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    return (
        <SectionWrapper header={"Find The Movie For You"}>
            <Header number={'01'} title={'first'} description={'desc'}/>
        </SectionWrapper>
    )
}