import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-[100vw] h-screen background flex flex-col items-center overflow-x-hidden'>

      <h1 className='bg-white w-11/12 rounded-lg text-center text-4xl font-bold mt-[40px] py-2'>RANDOM GIFS</h1>

      <div className='flex flex-col w-full'>
        <Random />
        <Tag />
      </div>

    </div>
  )
}

export default App