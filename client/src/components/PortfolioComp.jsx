import React, { useRef } from 'react';
import { ProjectCard } from '../template/ProjectCard';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Project 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Project 3', description: 'Description 3', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Project 4', description: 'Description 4', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Project 5', description: 'Description 5', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Project 6', description: 'Description 6', imageUrl: 'https://via.placeholder.com/150' },
];

export const PortfolioComp = () => {
  

  return (
    <div className='flex flex-1 min-h-screen ml-0 lg:mt-0 fixed lg:left-[20%] w-full lg:w-[80%] -z-10 lg:p-10 bg-primaryColor'>
      <div className='text-white w-full h-screen max-w-screen-lg'>
        <div className='p-5 mt-20 lg:mt-0'>
          <div className=''>
            <h1 className='text-3xl lg:text-4xl font-bold'>Projects</h1>
          </div>
        </div>
        <div className='relative p-5'>
          
          <div
            className='flex overflow-x-scroll scrollbar-thin scrollbar-thumb-[#754e38] scrollbar-track-transparent  '
          >
            {projects.map((item, index) => (
              <div key={index} className='flex-shrink-0 w-1/3 p-4'>
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
