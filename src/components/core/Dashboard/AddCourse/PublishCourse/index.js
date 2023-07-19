import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconBtn from '../../../../common/IconBtn';
import { resetCourseState, setStep } from '../../../../../slices/courseSlice';
import { COURSE_STATUS } from '../../../../../utils/constants';
import { editCourseDetails } from '../../../../../services/operations/courseDetailsAPI';


const PublishCourse = () => {


const {register, handleSubmit, setValue, getValues} = useForm();
const {course} = useSelector((state) => state.course);
const  dispatch= useDispatch();

const {token} = useSelector ((state)=>state.auth);
const [loading, setLoading] = useState(false);


useEffect(()=>{
    if(course?.status === COURSE_STATUS.PUBLISHED){
        setValue("public", true)
    }
},[])


const goBack=()=>{

    dispatch(setStep(2));

}

const goToCourses=()=>{
    dispatch(resetCourseState());
    //navigate ("/dashboard/my-courses")
}







const handleCoursePublish =async  ()=>{
    if(course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true ||
    (course.status ===  COURSE_STATUS.DRAFT && getValues("public") === false)){
        //no update in form
        //no need to amek api call
        goToCourses();
        return;

    }

    //if form is update
    const formData = new FormData();
    formData.append("courseId", course._id);
    const courseStatus = getValues("public") ?   COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
    formData.append("status", courseStatus);


    setLoading(true);
    const result = await editCourseDetails(formData, token);
    if(result){
        goToCourses();
    }
    setLoading(false);

}

const onSubmit=()=>{
    handleCoursePublish();
}

  return (
    <div className='rounded-md  border-[1px] bg-richblack-800 border-richblack-700'>
        <p>Publish Course</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="public">
                <input type="checkbox" name="public" id="public"
                {...register("public")} 
                className='rounded h-4 w-4'
                />
    <span>Make this course as Public</span>
</label>
            </div>
            

            <div className='flex justify-end gap-x-3 '>
                <button disabled={loading}
                type='button'
                onClick={goBack}
                className='flex items-center rounded-md bg-richblack-300 p-3 '>
                    Back
                </button>
            <IconBtn disabled={loading} text={"save Changes"} />
            </div>


        </form>
      
    </div>
  )
}

export default PublishCourse
