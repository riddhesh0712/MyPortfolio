import React from 'react'
import CircularProgressBar from './CircularProgressBar'

export const SkillsCart = ({percentage, title, description}) => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row bg-secondaryColor rounded-lg overflow-hidden mb-6 shadow-xl ">
            <CircularProgressBar percentage={percentage}/>
            <div className="flex flex-col justify-center lg:w-2/3 p-4 lg:p-10">
                <h2 className="text-md lg:text-xl font-bold mb-2">{title}</h2>
                <p className="mb-6">{description}</p>
            </div>
        </div>
    </div>
  )
}
