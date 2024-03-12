import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [search, setSearch] = useState('');
    const {gif,loading,fetchData} = useGif(search);

    return (
        <div className='bg-green-500 w-1/2 mx-auto mt-16 rounded-lg border-black flex flex-col items-center border-2 gap-6 mb-12'>

            <h1 className='text-2xl font-semibold mt-4 underline'>Random {search} Gif</h1>

            {loading ? (<Spinner/>) : (<img src={gif} width="450" height="300"></img>)}

            <input onChange={(event) => {setSearch(event.target.value)}} className='w-8/12 h-8 rounded-lg text-lg py-2 bg-blue-100 font-semibold border-2 border-black text-center' placeholder='Search here...'></input>
            <button onClick={() => fetchData(search)} className='w-10/12 bg-green-200 rounded-lg py-2 font-semibold text-xl mb-8'>Search</button>

        </div>
    )
}

export default Tag