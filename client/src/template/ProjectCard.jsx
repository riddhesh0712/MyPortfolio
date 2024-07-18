import React from 'react'

export const ProjectCard = ({title, description, imageUrl}) => {
  return (
    <div className='p-5 bg-white transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer' >
        <div className='flex flex-col justify-center '>
            <div className='object-cover'>
                <img src={imageUrl} alt={title} className='w-96 transform hover:scale-105 transition-transform duration-300'/>
            </div>
            <div className='p-2'>
                <h3 className='text-xl lg:text-2xl font-bold text-primaryColor'>{title}</h3>
                <p className='text-sm text-gray-900'>{description}</p>
            </div>
        </div>
    </div>
  )
}
export default ProjectCard