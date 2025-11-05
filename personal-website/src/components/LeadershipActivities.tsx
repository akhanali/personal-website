import ExpItem from './ExpItem';

const data = [
  {
    year: 2025,
    position: "Events Director @ Computing Students Hub",
    duration: "Aug 2025 - Present",
    details: "Leading event planning and management for the Computing Students Hub, organizing community engagement activities and workshops for computer science students. Utilizing Figma for design work and coordinating with various stakeholders to create impactful student experiences."
  },
  {
    year: 2019,
    position: "English Teacher @ Indigo EDU",
    duration: "Sep 2019 - Jun 2022",
    details: "Designed and adapted lesson plans to meet the unique needs and proficiency levels of children from low-income families. Each lesson incorporated essential English language skills—listening, reading, vocabulary, and speaking—through interactive and engaging activities that fostered a supportive learning environment. Successfully enhanced students' English skills from Beginner to Elementary levels."
  },
  {
    year: 2024,
    position: "Events Executive @ Data Science Club",
    duration: "Oct 2024 - Jun 2025",
    details: "Organized and executed data science events, workshops, and networking sessions for York University students. Coordinated with faculty and industry professionals to bring relevant content to the data science community."
  },
  {
    year: 2024,
    position: "Member @ York University Robotics Society",
    duration: "Sep 2024 - May 2025",
    details: "Active member of the robotics society, working on 3D modeling with Autodesk Tinkercad, programming with C++ and Arduino IDE, electrical wiring, and embedded systems development. Participated in robotics projects and competitions."
  },
];

const LeadershipActivities = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold p-4">Leadership & Activities</h2>
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
};

export default LeadershipActivities;
