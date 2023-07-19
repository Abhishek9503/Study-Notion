// import React from 'react'
// import { BsFillPersonFill } from "react-icons/bs"
// import { IoMdGitBranch } from "react-icons/io"

// const CourseCard = () => {
//     return (
//         <div>

//             {
//                 /*
                
//                  <div className='w-[230px] bg-white text-richblack-800 mt-10 border text-center ml-2 px-6'>
        
//                  <div className=''>
        
//                  <h1 className='mt-2 font-semibold text-left '>Learn HTML</h1>
        
//         <p className='text-[14px] mt-3 text-left'> This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>
        
//                  </div>
//                     <div className='flex justify-end mt-5 gap-2'>
        
//                         <div className='flex items-center gap-1'>
//                             <BsFillPersonFill/>
//                           Beginner
//                          </div>
        
//                         <div className='flex items-center gap-1'>
//                             <IoMdGitBranch/>
//                           6 Lesson
//                         </div>
        
//                     </div>
//                 </div>
                
//                 */
//             }

//             <div className="glow bg-richblack-800 mt-10  ">
//                 <div className='maindiv h-[240px]  w-[300px] text "'>

//                    <div className='h-[10px]'></div>

//                     <div className='ml-4 '>
//                         <h1 className=' font-semibold  '>Learn HTML</h1>

//                         <p className='text-[14px] text-richblack-100 mt-6 text-left'> This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>


//                         <div className='flex  mt-20 gap-16 '>

//                             <div className='flex items-center gap-1'>
//                                 <BsFillPersonFill />
//                                 Beginner
//                             </div>

//                             <div className='flex items-center gap-1'>
//                                 <IoMdGitBranch />
//                                 6 Lesson
//                             </div>

//                         </div>

//                     </div>


//                 </div>
//             </div>


//         </div>
//     )
// }

// export default CourseCard



import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className=  {`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer maindiv  `}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className=" border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px] `}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;