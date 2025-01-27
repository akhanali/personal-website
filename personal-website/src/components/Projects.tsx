import ProjectItem from './ProjectItem'
import reboundImg from '../assets/rebound.png'; // Example image imports
import guessImg from '../assets/guessTheNumber.png';
import pawLogImg from '../assets/pawLog.png';
import jsLearningKitImg from '../assets/jsLearningKit.jpg';


const Projects = () => {
  return (
    <div id = 'projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem quae vitae accusamus adipisci exercitationem animi! Aspernatur quo voluptates enim esse, optio quisquam dignissimos at consequatur ducimus velit? 
        Deserunt, veritatis amet.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={guessImg} title='Guess The Number' src='https://akhanali.github.io/GuessTheNumber/' />
        <ProjectItem img={pawLogImg} title='Paw Log' src='https://github.com/Rongbin99/PawLog.git'/>
        <ProjectItem img={reboundImg} title='Rebound'/>
        <ProjectItem img={jsLearningKitImg} title='JS Learning Kit' src='https://akhanali.github.io/LearningKit/'/>
      </div>
    </div>
  )
}

export default Projects
