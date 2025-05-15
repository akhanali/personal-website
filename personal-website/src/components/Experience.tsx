import { useState } from 'react';
import ExpItem from './ExpItem';

const data = [
  {
    year: 2025,
    position: "STEM Fellowship Research Assistant",
    duration: "4 months",
    details: "Conducted research on the Grassmannian Bruhat order and associated monoids, exploring their combinatorial and algebraic structures. Utilized Python and SageMath for pattern analysis and data processing, providing insights for research projects. Developing a program to simulate and visualize the reduced sequences of permutations under the Grassmannian Bruhat order."
  },
  {
    year: 2024,
    position: "Pick and Pack Associate @ Gentell",
    duration: "3 months",
    details: "Efficiently processed daily product orders, picking and packing an average of 300+ wound care and skincare items per shift. Assembled and prepared over 150 boxes daily with 99% accuracy, ensuring timely shipments. Utilized specialized software to generate and attach shipping labels for all orders while maintaining a clean, organized workspace aligned with GMP and safety standards. Contributed to inventory management and stock replenishment, reducing discrepancies by 10% and streamlining operational efficiency."
  },
  {
    year: 2019,
    position: "English Teacher @ Indigo EDU",
    duration: "3 years",
    details: "Designed and adapted lesson plans to meet the unique needs and proficiency levels of children from low-income families. Each lesson incorporated essential English language skills—listening, reading, vocabulary, and speaking—through interactive and engaging activities that fostered a supportive learning environment. Successfully enhanced students' English skills from Beginner to Elementary levels."
  },
  {
    year: 2016,
    position: "Competitive Programmer",
    duration: "5 years",
    details: "As a competitive programmer, I developed strong problem-solving skills by tackling algorithmic challenges under time constraints. My experience includes dynamic programming, graph theory, combinatorics, and advanced data structures. I participated in various competitions, securing top placements and representing my team at the ICPC Workshop 2019."
  },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Technical Skills':
        return (
          <div>
            <h2 className="text-2xl font-bold p-4">Technical Skills</h2>
            <ul className="list-disc ml-6 text-lg">
              <li>Programming Languages: C++, Python, Java, Go</li>
              <li>Web Technologies: React, HTML, CSS, JavaScript</li>
              <li>Tools: Git, Docker, AWS, Netlify</li>
              <li>Algorithmic Problem-Solving and Competitive Programming</li>
            </ul>
          </div>
        );
      case 'Interests':
        return (
          <div>
            <h2 className="text-2xl font-bold p-4">Interests</h2>
            <p className='text-lg'>
              I am passionate about software development, competitive programming, and leveraging
              technology to solve real-world problems. Additionally, I enjoy exploring new programming frameworks,
              contributing to open-source projects, and mentoring peers in technical concepts.
            </p>
          </div>
        );
      case 'Education':
        return (
          <div>
            <h2 className="text-2xl font-bold p-4">Education</h2>

            <div className="space-y-1 w-full">
              <div className='flex w-fit px-1.5 py-0.5 bg-[#001b5e] rounded-md items-center justify-center mx-auto'>
                <h3 className="md:text-lg text-white"> York University, Lassonde School of Engineering</h3>
              </div>
              <div className="flex justify-between">
                <h4 className="font-semibold md:text-lg">Honours Bachelor Of Science in Computer Science</h4>
                <p className="font-semibold md:text-lg text-nowrap">Expected 2028</p>
              </div>
              <div>
                <p className="max-md:text-sm font-normal md:text-lg">
                  <span className="font-bold">Relevant Courses:</span> React, OOP, Discrete Math, ML, Data Structures, Algorithms
                </p>
                <p> <span className="font-bold">GPA:</span> 3.8</p>
              </div>
            </div>
          </div>
        );
      case 'Experience':
        return (
          <div>
            <h2 className="text-2xl font-bold p-4">Experience</h2>
            {data.map((item, idx) => (
              <ExpItem
                key={idx}
                year={item.year}
                position={item.position}
                duration={item.duration}
                details={item.details}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1040px] m-auto p-10 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001B5E]">About Me</h1>
      <div className="flex justify-center space-x-4 my-8">
        {['Technical Skills', 'Interests', 'Education', 'Experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${activeTab === tab ? 'bg-[#001B5E] text-white' : 'bg-gray-200'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default AboutMe;
