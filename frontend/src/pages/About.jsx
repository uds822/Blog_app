import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);

  return (
    <div className="container mx-auto my-12 p-6 bg-gray-50 rounded-lg shadow-lg space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">About Me</h1>
      
      <section className="space-y-4">
        <p className="text-lg text-gray-700">
          Meet <span className="text-blue-800 font-semibold hover:text-blue-600">{profile?.user?.name}</span>, a passionate and versatile full-stack developer. With a keen eye for detail and a love for creating dynamic, user-friendly web applications, {profile?.user?.name} excels in crafting seamless digital experiences that bridge both front-end and back-end technologies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">Technical Expertise:</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Front-End:</strong> Expertise in React.js, Angular, Vue.js, HTML5, CSS3, and responsive design.</li>
          <li><strong>Back-End:</strong> Proficient in Node.js, Express.js, Django, MySQL, PostgreSQL, and MongoDB.</li>
          <li><strong>DevOps:</strong> Familiar with Docker, Kubernetes, CI/CD pipelines, and cloud platforms like AWS, Azure, and Google Cloud.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">Professional Highlights:</h2>
        <p className="text-gray-700">
          Over the years, {profile?.user?.name} has successfully developed and deployed numerous full-stack applications, demonstrating strong problem-solving abilities and attention to detail. With experience collaborating in fast-paced, cross-functional teams, Akhil continuously learns and adapts to emerging technologies to stay at the forefront of the industry.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">Personal Interests & Inspiration:</h2>
        <p className="text-gray-700">
          Outside of work, Akhil is an avid cricket fan with a deep admiration for <strong>King Kohli</strong>. His twin brother, <strong>Ankush</strong>, is his greatest source of inspiration, offering both competition and unwavering support throughout his journey. Their sibling bond fuels Akhil's drive to always strive for excellence.
        </p>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-8">
        <p>&copy; 2024 {profile?.user?.name} - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
