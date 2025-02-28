import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
export default function Random() {
  const{gif,loading,fetchData}=useGif();
    const clickHandler=()=>{
      fetchData();
    }
    return (
    <div className="flex flex-col items-center bg-green-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h1 className="uppercase font-bold text-2xl underline ">A Random GIF</h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450"/>)
      }
      <button className="uppercase text-white bg-[#47884f] w-10/12 rounded-lg font-normal py-2 text-lg" onClick={clickHandler}>Generate</button>
    </div>
  )
}
