import myImage1 from '../importa_images/my3.jpg';
import { FaMapMarkerAlt, FaBook, FaUserTie, FaFutbol } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4">
      <div className="min-h-screen text-gray-100 py-16 flex flex-col md:flex-row items-center md:items-start justify-between space-y-12 md:space-y-0 md:space-x-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-teal-400 font-serif">ABOUT ME</h1>

          <h2 className="text-3xl font-bold uppercase text-cyan-300 tracking-wide">
            SHAIK BARA SHAHID
          </h2>

          <p className="italic text-gray-300">
            Preferred name: <span className="text-cyan-400">BARA SHAHID</span> | Nickname: <span className="text-cyan-400">SHAHID</span>
          </p>

          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-teal-500" />
            Vaddeswaram, Guntur, Andhra Pradesh – 522502
          </div>

          <p className="text-lg text-gray-300">
            I'm currently pursuing <span className="text-cyan-400 font-semibold">BTech in Computer Science and Engineering</span> with a specialization in <span className="text-cyan-400 font-semibold">DevOps and Software Modeling</span> at KL University.
          </p>

          <p className="text-lg text-gray-300">
            Along with DevOps, I'm skilled in <span className="text-cyan-400 font-semibold">Full Stack Development</span> using technologies like <span className="text-cyan-400">React.js</span>, <span className="text-cyan-400">Next.js</span>, <span className="text-cyan-400">Spring Boot</span>, and <span className="text-cyan-400">Tailwind CSS</span>.
          </p>

          <p className="text-lg text-gray-300">
            I’m also certified as an <span className="text-teal-400 font-semibold">AWS Cloud Practitioner</span> and <span className="text-teal-400 font-semibold">AWS Developer</span>, with a strong foundation in cloud technologies.
          </p>

          {/* Skill Set */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-cyan-400">Skill Set</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>DevOps</li>
              <li>AWS - Cloud</li>
              <li>AI/ML</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-cyan-400">Interests</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <FaBook className="text-teal-500" />
                Learing New Technology
              </li>
              <li className="flex items-center gap-2">
                <FaUserTie className="text-teal-500" />
                Business
              </li>
              <li className="flex items-center gap-2">
                <FaFutbol className="text-teal-500" />
                Sports
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={myImage1}
            alt="Vijay Profile"
            className="w-72 h-96 object-cover rounded-3xl shadow-lg shadow-cyan-500 hover:shadow-cyan-500 hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
}
