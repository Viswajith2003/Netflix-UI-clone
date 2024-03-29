import React, { useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constant/constant'
import axios from '../../axios';
import './Banner.css'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[17])
          setMovie(response.data.results[3])
    })
  },[])
  return (
    <div 
   style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className='banner'>
        <div className='content'>
           <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_btn'>
                <button className='btn'>Play</button>
                <button className='btn'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview :""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner