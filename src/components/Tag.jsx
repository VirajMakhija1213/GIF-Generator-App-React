import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {
  const [tag,setTag]=useState("car");
  const {gif,loading,fetchData}=useGif({tag}); 
    const clickHandler=()=>{
      fetchData();
    }
    const changeHandler=(event)=>{
        setTag(event.target.value)
    }
    return (
    <div className="flex flex-col items-center bg-blue-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h1 className="uppercase font-bold text-2xl underline ">Random {tag} GIF</h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450"/>)
      }

        <input
          className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
          onChange={changeHandler}
          value={tag}
        />
      <button className="uppercase text-white bg-[#47884f] w-10/12 rounded-lg font-normal py-2 text-lg" onClick={clickHandler}>Generate</button>
    </div>
  )
}
