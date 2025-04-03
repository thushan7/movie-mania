import React from 'react'

{/* function created to make it easier to create multiple sections without repeating code */}
export default function SectionWrapper(props) {
    const {children, header, id} = props
    return (
        <section id={id} className='min-h-screen flex flex-col gap-10'>
            <div className='bg-stone-900 py-8 flex flex-col
            gap-2 justify-center items-center'>
                <p className='text-4xl font-semibold'>{header}</p>
            </div>
            <div className='max-w-[800px] w-full flex flex-col
            mx-auto gap-10'>
                {children}
            </div>
        </section>
    )
}