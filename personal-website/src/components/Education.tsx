
const Education = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold p-4">Education</h2>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>2023-2027</span> 
            <span className='text-lg font-semibold text-[#001b5e]'>York University, Lassonde School of Engineering</span> 
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>Expected 2027</span> 
          </p>
          <div className='my-2 text-base font-normal text-stone-500'>
            <p className='font-semibold text-[#001b5e] mb-2'>Honours Bachelor Of Science in Computer Science</p>
            <p className='mb-1'>
              <span className="font-bold">Relevant Courses:</span> OOP, Data Structures, Computer Organization, Software Tools, Theory of Computation, Algorithms, Software Design, Operating Systems, Database Systems, Calculus, Linear Algebra, Discrete Math, Logic, Probability
            </p>
            <p><span className="font-bold">GPA:</span> 3.8</p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Education
