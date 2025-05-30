import {useState} from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { GrCatalog, GrProjects } from 'react-icons/gr'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        //console.log("state changed");
    }
  return (
    <div>
      <AiOutlineMenu onClick = {handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/> {
        nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href='#home' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size = {20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href='#experience' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrCatalog size = {20}/>
                    <span className='pl-4'>Experience</span>
                </a>
                <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size = {20}/>
                    <span className='pl-4'>Projects</span>
                </a>
                {/* <a onClick={handleNav} href='#interests' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineBook size = {20}/>
                    <span className='pl-4'>Interests</span>
                </a> */}
                <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size = {20}/>
                    <span className='pl-4'>Contact</span>
                </a>
            </div>
            
        )
        : (
          ''
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href="#home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-10 ease-in duration-300'>
              <AiOutlineHome size={20}/>
            </a>
            <a href="#experience" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-10 ease-in duration-300'>
              <GrCatalog size={20}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-10 ease-in duration-300'>
              <GrProjects size={20}/>
            </a>
            {/* <a href="#interests" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-10 ease-in duration-300'>
              <AiOutlineBook size={20}/>
            </a> */}
            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-10 ease-in duration-300'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Sidenav
