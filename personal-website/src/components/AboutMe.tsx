import { useState } from 'react';
import TechnicalSkills from './TechnicalSkills';
import Interests from './Interests';
import Education from './Education';
import Experience from './Experience';
import LeadershipActivities from './LeadershipActivities';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Education':
        return <Education />;
      case 'Experience':
        return <Experience />;
      case 'Leadership & Activities':
        return <LeadershipActivities />;
      case 'Technical Skills':
        return <TechnicalSkills />;
      case 'Interests':
        return <Interests />;
      default:
        return null;
    }
  };

  return (
    <div id="about" className="max-w-[1040px] m-auto p-10 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001B5E]">About Me</h1>
      <div className="flex justify-center space-x-4 my-8">
        {['Education', 'Experience', 'Leadership & Activities', 'Technical Skills', 'Interests'].map((tab) => (
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
