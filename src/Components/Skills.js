import React from 'react';
import './Skills.css';

const skillData = [
  { title: 'Languages', skills: ['Python', 'R', 'SQL/NoSQL', 'Java', 'JavaScript', 'HTML/CSS', 'C', 'C++'] },
  { title: 'DevOps & Cloud', skills: ['AWS', 'Kubernetes', 'Docker', 'Google Cloud Console', 'Heroku'] },
  { title: 'Machine Learning', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Pandas', 'Apache Spark'] },
  { title: 'Frameworks', skills: ['Flask', 'React', 'Next.js', 'Tailwind CSS', 'Redux', 'Express.js'] },
  { title: 'Tools', skills: ['Tableau/Power BI', 'Power BI', 'Postman API'] },
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