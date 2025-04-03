import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import {GENRES} from '../utils/data'
import {RATINGS} from '../utils/data'
import {LENGTHS} from '../utils/data'
import Button from './Button'

function Header(props) {
    const {number, title} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-3'>
                <p className='text-4xl font-semibold'><span>{number}</span></p>
                <h4 className='text-3xl font-semibold'>{title}</h4>
            </div>
        </div>
    )
}

export default function Generator(props) {
    const {genre, setGenre, rating, setRating, length, setLength, updateList} = props
    const [showOptions, setOptions] = useState(false)

    function toggleOptions() {
        setOptions(!showOptions)
    }

    return (
        <SectionWrapper id={'generator'} header={"Find The Movie For You"}>
            <Header number={'01'} title={'Select a Genre'}/>
            <div className='flex gap-20 justify-center'>
                {Object.keys(GENRES).map((gen, genIndex) => {
                    return (
                        <button onClick={() => {
                            setGenre(gen)
                        }} className={'bg-amber-100 hover:bg-amber-200 hover:cursor-pointer py-4 px-8 rounded' 
                        + (gen === genre ? ' bg-amber-200 ' : ' bg-amber-100 ')}key={genIndex}>
                            <p className='whitespace-nowrap font-bold'>{GENRES[gen]}</p>
                        </button>
                    );
                })}
            </div>

            <Header number={'02'} title={'Select an Audience'}/>
            <div className='bg-amber-100 rounded flex flex-col hover:bg-amber-200 hover:cursor-pointer py-1'>
                <button onClick={toggleOptions} className='relative flex items-center justify-center'>
                    <p className='font-bold'>{rating === null ? 'Choose a Movie Rating' : RATINGS[rating]}</p>
                    <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 
                    fa-caret-down'></i>
                </button>
                {showOptions && (
                    <div className='flex flex-col'>
                        {Object.keys(RATINGS).map((rate, rateIndex) => {
                            return (
                                <button onClick={() => {
                                    setRating(rate)
                                    setOptions(false)
                                }} className={'hover:bg-amber-200 hover:cursor-pointer' 
                                + (rate === rating ? ' bg-amber-200 ' : ' bg-amber-100 ')} key={rateIndex}>
                                    <p>{RATINGS[rate]}</p>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <Header number={'03'} title={'Select a Duration'}/>
            <div className='flex gap-20 justify-center'>
                {Object.keys(LENGTHS).map((len, lenIndex) => {
                    return (
                        <button onClick={() => {
                            setLength(len)
                        }} className={'bg-amber-100 hover:bg-amber-200 hover:cursor-pointer py-4 px-8 rounded' 
                        + (len === length ? ' bg-amber-200 ' : ' bg-amber-100 ')}key={lenIndex}>
                            <p className='whitespace-nowrap font-bold'>{LENGTHS[len]}</p>
                        </button>
                    );
                })}
            </div>

            <div></div>
            <Button func={updateList} text={"Find Movies"}></Button>
        </SectionWrapper>
    )
}