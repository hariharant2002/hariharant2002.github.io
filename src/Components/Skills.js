import React from 'react';
import './Skills.css';

const skillData = [
  { title: 'Languages', skills: ['Java', 'Python', 'SQL'] },
  { title: 'Frontend Development', skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux'] },
  { title: 'Backend Development', skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { title: 'Database', skills: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'DevOps & Cloud', skills: ['Docker', 'AWS', 'Git'] },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-wrapper">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillData.map((category, index) => (
            <div key={index} className="card">
              <h2>{category.title}</h2>
              <div className="tags">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
