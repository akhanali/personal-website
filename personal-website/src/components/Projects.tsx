import ProjectItem from './ProjectItem'
import reboundImg from '../assets/rebound.png'; // Example image imports
import guessImg from '../assets/guessTheNumber.png';
import pawLogImg from '../assets/pawLog.png';
import jsLearningKitImg from '../assets/jsLearningKit.jpg';
import playPodImg from '../assets/playPodImg.png';


const Projects = () => {
  return (
    <div id = 'projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>  Here are some of the projects I’ve worked on, showcasing my skills in web development, problem-solving, and creating user-friendly applications. Each project demonstrates my ability to learn and implement different technologies, from frontend to backend development.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={playPodImg} title='PlayPod' src='https://play-pod-two.vercel.app/' info='React | CSS | Node.js'/>
        <ProjectItem img={guessImg} title='Guess The Number' src='https://akhanali.github.io/GuessTheNumber/' info='HTML | CSS | JavaScript'/>
        <ProjectItem img={pawLogImg} title='Paw Log' src='https://github.com/Rongbin99/PawLog.git' info = 'Next.js | TailwindCSS | MongoDB | Auth0'/>
        <ProjectItem img={reboundImg} title='Rebound'info='HTML | CSS | JavaScript'/>
        <ProjectItem img={jsLearningKitImg} title='JS Learning Kit' src='https://akhanali.github.io/LearningKit/' info='HTML | CSS | JavaScript'/>
      </div>
    </div>
  )
}

export default Projects
