import ExpItem from './ExpItem';

const data = [
  {
    year: 2026,
    position: "Student Web Software Engineer",
    duration: "Jan 2026 - Aug 2026",
    details: "Implement scoped improvements and bug fixes in a production web application, working through a Jira/Scrum workflow. Investigate UI and logic defects (e.g., incorrect rendering, missing information, inconsistent states), trace root causes, and ship verified fixes. Work within team standards: PR reviews, iterative feedback, and incremental delivery.",
  },
  {
    year: 2025,
    position: "Full-stack Developer @ nFactorial Incubator",
    duration: "Jun 2025 - Aug 2025",
    details: "Developed full-stack applications using FastAPI, TypeScript, Firebase, and Python. Implemented WebSocket.io for real-time features and integrated OpenAI API for AI functionality. Deployed applications on Microsoft Azure and utilized Node.js for backend development."
  },
  {
    year: 2025,
    position: "PASS Leader @ Bethune School of Sciences",
    duration: "Sep 2025 - Present",
    details: "Facilitate weekly, student-led review sessions for MATH 1021 – Linear Algebra I course. Apply active-learning techniques to help students build confidence and perform better on assessments. Create targeted problem sets and run interactive activities; coach effective study habits and exam prep."
  },
  {
    year: 2024,
    position: "STEM Fellowship Research Assistant",
    duration: "Jan 2024 - Apr 2024",
    details: "Conducted research on the Grassmannian Bruhat order and associated monoids, exploring their combinatorial and algebraic structures. Utilized Python and SageMath for pattern analysis and data processing, providing insights for research projects. Developing a program to simulate and visualize the reduced sequences of permutations under the Grassmannian Bruhat order."
  },
  {
    year: 2023,
    position: "Operations Assistant @ Gentell",
    duration: "Jun 2023 - Aug 2023",
    details: "Efficiently processed daily product orders, picking and packing an average of 300+ wound care and skincare items per shift. Assembled and prepared over 150 boxes daily with 99% accuracy, ensuring timely shipments. Utilized specialized software to generate and attach shipping labels for all orders while maintaining a clean, organized workspace aligned with GMP and safety standards. Contributed to inventory management and stock replenishment, reducing discrepancies by 10% and streamlining operational efficiency."
  },
  {
    year: 2016,
    position: "Competitive Programmer",
    duration: "Sep 2016 - Jun 2021",
    details: "As a competitive programmer, I developed strong problem-solving skills by tackling algorithmic challenges under time constraints. My experience includes dynamic programming, graph theory, combinatorics, and advanced data structures. I participated in various competitions, securing top placements and representing my team at the ICPC Workshop 2019."
  },
];

const Experience = () => {
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
};

export default Experience;
