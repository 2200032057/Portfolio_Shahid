import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import myImage from '../importa_images/myblur.png';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 flex justify-center px-4">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 py-16 text-white">
        {/* Left Content */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-5xl font-bold text-teal-400 font-serif">PROFILE</h1>

          <h2 className="text-4xl font-bold tracking-wide uppercase text-cyan-400 font-serif">
            SHAIK BARA SHAHID
          </h2>

          <p className="text-lg text-gray-300 font-light leading-relaxed">
            BTech Computer Science and Engineering<br />
            Specialized in DevOps and Software Modeling
          </p>

          <p className="text-sm italic text-red-300">
            📍 Vaddeswaram, Guntur, Andhra Pradesh - 522502
          </p>

          {/* Contact Section */}
          <div className="pt-6 space-y-3 text-sm text-gray-200">
            <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
              <FaPhone className="text-teal-400" />
              <span className="font-medium">+91 7569786613</span>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
              <FaEnvelope className="text-teal-400" />
              <a href="mailto:2200032057cseh@gmail.com" className="hover:underline">
                2200032057cseh@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
              <FaLinkedin className="text-teal-400 hover:scale-110 transition-transform duration-200" />
              <a
                href="https://www.linkedin.com/in/bara-shahid-shaik-a4b062289/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/bara-shahid-shaik-a4b062289
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
              <FaGithub className="text-teal-400 hover:scale-110 transition-transform duration-200" />
              <a
                href="https://github.com/2200032057"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/2200032057
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-cyan-500 shadow-[0_0_40px_rgba(0,255,255,0.3)] animate-pulse">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
