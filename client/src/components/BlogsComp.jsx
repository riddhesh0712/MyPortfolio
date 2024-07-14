import React from 'react'
import BlogCard from '../template/BlogCard.jsx'
import Pagination from './BlogsPagination.jsx'
const blogsItems = [
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    }
]
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
export const BlogsComp = () => {
  return (
    <div className='flex flex-1 justify-start items-start h-screen fixed left-[20%] w-[80%]  bg-primaryColor '>
        <div className='text-white  px-20'>
            <div className='flel flex-col justify-center'>
                <div className='p-4'>
                    <h1 className='text-3xl lg:text-6xl font-bold text-start'>Blogs</h1>
                    <div>
                        {/* SearchBar */}
                    </div>
                </div>
                <div className='border-t-2 p-4'>
                    <ul className='flex justify-around items-center'>
                        {categoryNames.map((item, index) => (
                            <li className='font-bold' key={index}>{item.categoryName}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=' scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent w-full max-h-[80vh] overflow-y-scroll overflo p-6'>
                <Pagination />
            </div>
        </div>
        
    </div>
  )
}
