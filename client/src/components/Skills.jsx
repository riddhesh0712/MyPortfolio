import React from 'react'
import { SkillsCart } from '../template/SkillsCart';

const skillsItems = [
    {
      title: 'Python',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ex doloribus quidem, tempore consequatur perferendis, dicta quo qui reiciendis commodi quae corrupti maxime.' ,
      percentage: 95,
    },
    {
      title: 'Javascript',
      description: 'Description for project 2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ex doloribus quidem, tempore consequatur perferendis, dicta quo qui reiciendis commodi quae corrupti maxime.',
      percentage: 95,
    },
   
    
  ];

export const SkillsComp = () => {
  return (
    <div className=' flex flex-1 min-h-screen ml-0 lg:mt-0 fixed left-[20%] w-[80%] bg-primaryColor '>
        <div className='flex flex-col justify-center items-center text-white w-full max-w-screen-lg'>
            <div className=' text-center'>
                <h1 className='text-6xl font-bold'>Skills</h1>
            </div> 
            <div className='scrollbar  scrollbar-track-transparent w-full max-h-[80vh] overflow-y-scroll px-20 mt-5 '>
                <SkillsCart title={'Javascript'} percentage={65} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum eum perferendis! Voluptates earum illum impedit? Fugiat accusamus corrupti unde quas magni saepe, vitae et.'} />
                <SkillsCart title={'Javascript'} percentage={70} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum eum perferendis! Voluptates earum illum impedit? Fugiat accusamus corrupti unde quas magni saepe, vitae et.'}/>
                <SkillsCart title={'Javascript'} percentage={90} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum eum perferendis! Voluptates earum illum impedit? Fugiat accusamus corrupti unde quas magni saepe, vitae et.'} />
                <SkillsCart title={'Javascript'} percentage={80} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum eum perferendis! Voluptates earum illum impedit? Fugiat accusamus corrupti unde quas magni saepe, vitae et.'} />
            </div>
           
        </div>
    </div>
  )
}
export default SkillsComp