import React from "react";
import skillsData from "../datasets/SkillDataSet";

export default function Skills() {
  const filteredSkills = skillsData.filter(skill =>
    !["Full Stack Development", "Linux & Bash", "MBA & Business", "Human Psychology"].includes(skill.name)
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-fuchsia-900 to-purple-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-violet-300 mb-16 font-mono tracking-wide drop-shadow-[0_0_10px_#c084fc]">
          My Skills
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-[#2b0a3d] border border-violet-600/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(192,132,252,0.1)] hover:shadow-[0_0_40px_rgba(192,132,252,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={`/assets/${skill.image}`}
                alt={skill.name}
                className="w-20 h-20 object-contain mx-auto mb-4 group-hover:scale-110 transition-transform"
              />

              <h3 className="text-xl font-bold text-pink-300 text-center tracking-wide mb-1">
                {skill.name}
              </h3>

              <p className="text-xs text-center text-violet-200 bg-violet-800/40 px-4 py-1 rounded-full mb-3">
                {skill.level}
              </p>

              <p className="text-sm text-gray-200 text-center leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
