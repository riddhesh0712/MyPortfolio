import React from 'react'
import HeroSvg from '../assets/HeroSvg1.png'

import HeroBg from '../assets/heroBg.jpg'

export const Hero = () => {
  return (
    <div className='flex flex-col fixed left-[20%] w-[80%] bg-cover px-10' style={{backgroundImage: `url(${HeroBg})`}}>
      <div className="flex flex-2  h-[100vh] w-full max-w-screen-lg ml-0 mt-20 lg:mt-0">
        <div className='flex flex-col justify-center space-y-2 text-white pb-20'>
          <h1 className="text-3xl lg:text-8xl font-bold ">Hello</h1>
          <h2 className="text-2xl lg:text-7xl font-bold mt-2">I am Riddhesh</h2>
          <p className="text-lg lg:text-3xl mt-2">Fullstack Developer</p>
          <div className='flex pt-28'>
            <p className='max-w-md '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugit facilis illum nesciunt </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end items-end pt-20 pl-16">
          <img src={HeroSvg} alt="Profile of Riddhesh" className="object-cover h-[100%] overflow-visible" />
        </div>
      </div>
    </div>
  )
}
