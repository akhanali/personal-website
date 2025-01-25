import React from 'react'

const Education = () => {
  return (
    <div id = "experience" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001B5E]'>Experience</h1>
        <div className='flex flex-wrap gap-4 flex-row items-center justify-between text-xs md:text-sm'>
            <h3 className="text-lg font-semibold text-[#001b5e]">York University</h3>
            <p className="text-base font-medium ">Expected 2028</p>
        </div>

        <div>
            <h4>Bachelor </h4>
        </div>


        <div className="flex justify-between">
            <h3 className="font-bold md:text-lg">Computer Science</h3>
            <p className="text-nowrap">Expected 2028</p>
        </div>
        <div>
            <h4 className="max-md:text-sm font-medium"> York University</h4>
            <p className="max-md:text-sm font-light">
                <span className="font-bold">Relevant Courses:</span> React, OOP, Discrete Math
            </p>
            <p> <span className="font-bold">GPA:</span> 3.8</p>
        </div>
    </div>
  )
}

export default Education
