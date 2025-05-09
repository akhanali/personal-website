import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import backgroundHomeImage from '../assets/backgroundHome.jpg';


const Home = () => {
  return (
    <div id='home'>
      <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={backgroundHomeImage} alt="/" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Akhanali</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am a<TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Student',
              1000, // wait 1s 
              'Developer',
              2000,
              'Coder',
              2000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.instagram.com/akhanali_aman/?next=%2F" target="_blank" >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akhanali-aman/" target="_blank">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/akhanali" target="_blank">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
