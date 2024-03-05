import React from 'react'
import CardItem from './Card'

import Carousel from 'react-material-ui-carousel';
import smapleInternships from "../pages/intern";
interface item{
  image: string,
    title: string,
    description: string,
    duration: number,
    skills: string
}
const PopularPrograms: React.FC = () => {

  return (
    <div className='flex flex-col items-center' >
        <h1 className='text-3xl font-semibold' >Our Popular Programs</h1>
        <hr className=' w-1/6 h-1 my-5 bg-[#eee49d]'  />
        <div className='flex w-full items-center' >
          <Carousel className='w-full md:hidden ' >
            {smapleInternships.map((item: item) => (
              <CardItem image={item.image} title={item.title} description={item.description} duration={item.duration} skills={item.skills} />
            ))}
              
          </Carousel>
          <div className='hidden md:flex w-full ' >
          {smapleInternships.map((item: item) => (
              <CardItem image={item.image} title={item.title} description={item.description} duration={item.duration} skills={item.skills} />
            ))}
          </div>
          

        </div>
    </div>
  )
}

export default PopularPrograms