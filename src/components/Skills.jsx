import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'Supabase', 'PostgreSQL', 'Authentication']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Vite', 'npm/yarn', 'VS Code', 'Figma', 'Agile Methodology']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
