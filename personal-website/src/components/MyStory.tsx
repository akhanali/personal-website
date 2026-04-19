const Interests = ({img, title}:any) => 
  return (
    <div>
      <h2 className="text-2xl font-bold p-4">My Story</h2>
      <div className='text-lg space-y-4'>
        <p>
          Hi, my name is Akhanali, but most people call me Ali. I am currently studying Computer Science as part of my Bachelor of Science. Outside of school, I enjoy a mix of active and relaxed hobbies, including baking, playing sports like volleyball, badminton, and tennis, and exploring the city through walks or hikes. I also enjoy quieter moments, like watching movies or reading.
        </p>
        <p>
          What makes me unique is how I connect with people. I tend to notice small details in how others act, which helps me understand their emotions better. I also adapt quickly to new situations, especially after moving to a completely new environment as an international student. At the same time, I am naturally curious—I enjoy learning about different things, whether it is technology, geography, or everyday systems.
        </p>
        <p>
         I am originally from Kazakhstan, and I moved to Canada in 2023 to continue my education. Growing up there was intense in a way that shaped who I am today. I was involved in many extracurricular activities, from ballroom dancing and swimming to math and computer science competitions. This environment helped me develop curiosity and discipline, as well as an appreciation for both science and creativity.
        </p>
        <p>
            At the same time, there were high expectations and constant comparison. Looking back, I understand that my parents made significant sacrifices to give me these opportunities. This created a strong sense of responsibility in me, along with an awareness of the pressure that can come with ambition.
        </p>
        <p>
            I chose York University for both personal and practical reasons. Being in Toronto allowed me to stay close to my sister, while also being a more financially realistic option as an international student. The program also aligns with my long-term goal of building a stable future in Canada.
        </p>
        <p>
            I decided to pursue Computer Science because it has been part of my life for a long time. I started competitive programming in sixth grade, lost interest due to pressure, and later returned to it in high school. That experience helped me realize that I genuinely enjoy problem-solving and working through challenges.
        </p>
        <p>
            I chose a collage of myself wearing headphones as my artifact because they are part of my everyday life. They help me focus, think, and manage my emotions, while also allowing me to stay connected to people who are far away. In many ways, they represent both independence and connection.
        </p>
        <img
            src={img}
            alt={title}
            className="rounded-xl ease-in-out group-hover:opacity-10 w-full h-full"
        />
      </div>
    </div>
  );
};

export default Interests;
