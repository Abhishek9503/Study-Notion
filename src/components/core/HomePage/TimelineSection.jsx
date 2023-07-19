import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
const timeline=[
    {
        Logo:Logo1,
        heading:"Leadership",
        Description:"Fully Committed to the success companyy"
    },
    {
        Logo:Logo2,
        heading:"Responsibility",
        Description:"Fully Committed to the success companyy"
    },
    {
        Logo:Logo3,
        heading:"Flexibility",
        Description:"Fully Committed to the success companyy"
    },
    {
        Logo:Logo4,
        heading:"Solve the problem",
        Description:"Fully Committed to the success companyy"
    }
]

export const TimelineSection = () => {
  return (
    <div className=' flex flex-row gap-15 items-center'>
        <div className='w-[45%] flex flex-col gap-5  relative'>

            <div className=' line absolute r-10'></div>
            {
                timeline.map((element, index)=>{
                    return(
                          <div className='flex flex-row gap-6' key={index}>
                                <div className='w-[50px] h-[50px] z-10 bg-white flex items-center justify-between'>
                                    <img className='z-10	' src={element.Logo} alt="" />
                                </div>
                                <div>
                                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                    <p  className='text-base'>{element.Description}</p>
                                </div>
                          </div>
                    )
                })
            }
        </div>

        <div className=' shadow relative  shadow-blue-200'>
            <img className='cardImage rounded-md shadow-2xl hover:scale-105  transition-all duration-500 '   
             src={timelineImage} alt="timelineImage" />

            <div className='maindiv absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
            left-[50%] translate-x-[-50%] translate-y-[-50%]'>

                <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 
                px-7  '>
                   <p className=' text-3xl font-bold'>10</p>
                   <p className=' text-sm text-caribbeangreen-300 font-bold'>Year of Experience</p>
                </div>

               <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                  <p className=' text-3xl font-bold'>250</p>
                  <p className=' text-sm text-caribbeangreen-300 font-bold'>TYPES OF COURSES</p>
               </div>
            </div>


        </div>

    </div>
  )
}
