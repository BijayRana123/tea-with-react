import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])
  return (
    <div className='bg-slate-400 text-white w-[80%] flex justify-center text-center h-9 '>
      Followers : {data.followers}
      <img src="{data.avatar_url}" alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}
