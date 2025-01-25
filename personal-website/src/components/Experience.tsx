import React, { useState } from 'react';
import ExpItem from './ExpItem';

const data = [
  {
    year: 2024,
    position: "Intern @ Kwaaka",
    duration: "3 months",
    details: "Successfully resolved over 30 critical bugs in the Go programming language, significantly enhancing the stability and reliability of integration software. Actively participated in 20+ collaborative code review sessions with senior developers, leveraging their expertise to optimize performance and improve system robustness. Consistently recognized for a proactive and solution-oriented mindset, fostering a collaborative team environment and contributing to the delivery of high-quality, reliable software solutions."
  },
  {
    year: 2023,
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
            <p>
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
            <p>Bachelor of Computer Science (In Progress) - York University, Toronto, ON</p>
            <p>Relevant Courses: Data Structures, Algorithms, Software Engineering, Machine Learning</p>
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
    <div className="max-w-[1040px] m-auto p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001B5E]">About Me</h1>
      <div className="flex justify-center space-x-4 my-8">
        {['Technical Skills', 'Interests', 'Education', 'Experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? 'bg-[#001B5E] text-white' : 'bg-gray-200'
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
