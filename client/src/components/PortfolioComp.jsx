import React from 'react'
import { PortfolioCards } from '../template/PortfolioCards'

const categoryNames = [
    {
        categoryName: "Education"
    },
    {
        categoryName: "E-Commerce"
    },
    {
        categoryName: "Management"
    },
    {
        categoryName: "Education"
    },
    {
        categoryName: "Education"
    },
    {
        categoryName: "Education"
    },
]
export const PortfolioComp = () => {
  return (
    <div className=' flex flex-1 min-h-screen ml-0 lg:mt-0 fixed left-[20%] w-[80%] p-10 bg-primaryColor '>
        <div className='text-white w-full max-w-screen-lg'>
            <div className='p-5'>
                <div className='py-2'>
                    <h1 className='text-3xl lg:text-6xl text-center font-bold'>Portfolio</h1>
                </div>
                <div className='border-t-2 mt-2 p-3'>
                    <ul className='flex justify-around items-center'>
                        {categoryNames.map((item, index) => (
                            <li key={index}>{item.categoryName}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='p-5'>
                <PortfolioCards />
            </div>
        </div>
    </div>
  )
}
