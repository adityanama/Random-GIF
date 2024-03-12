import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const {gif,loading,fetchData} = useGif();

    return (
        <div className='bg-green-500 w-1/2 mx-auto mt-16 rounded-lg border-black flex flex-col items-center border-2 gap-6'>

            <h1 className='text-2xl font-semibold mt-4 underline'>Random Gif</h1>

            {loading ? (<Spinner/>) : (<img src={gif} width="450" height="300"></img>)}

            <button onClick={() => fetchData()} className='w-10/12 bg-green-200 rounded-lg py-2 font-semibold text-xl mb-8'>Generate</button>

        </div>
    )
}

export default Random