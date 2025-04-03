import React from 'react'

export default function Button(props) {
    const {text, func} = props
    return (
        <button onClick={func} className='px-5 py-3 rounded border border-red-600 border-4 bg-amber-100 hover:bg-amber-200 hover:cursor-pointer'>
            <p className='font-bold text-2xl'>{text}</p>
        </button>
    )
}