import React from 'react'
import ProfilePic from '../assets/profile.jpg'
export const AboutMeComp = () => {
  return (
    <div className='flex flex-1  h-screen ml-0 fixed left-[20%] w-[80%] p-20 bg-primaryColor '>
        <div className='flex flex-col justify-center items-center w-full max-w-screen-lg'>
            <div className='flex justify-center items-center p-5'>
                <div className='flex flex-1 justify-center items-center p-10'>
                    <img src={ProfilePic} alt="Profile Picture" className='max-w-xs shadow-xl shadow-gray-950'/>
                </div>
                <div className='flex flex-1 flex-col justify-start items-center p-4 text-white'>
                    <h1 className='text-3xl md:text-6xl font-bold mb-5'>About Me</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non nam tempora aspernatur ipsam quae, eaque sed harum sunt mollitia perferendis, debitis ex. Harum cum, alias maiores laudantium laborum praesentium ea ipsa odit earum odio debitis nemo adipisci doloribus rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus!</p>

                </div>
            </div>
            <div>
                <button className='bg-secondaryColor py-4 px-5 rounded-md text-white'>Download Resume</button>
            </div>
        </div>
    </div>
  )
}
