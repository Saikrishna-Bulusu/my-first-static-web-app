import React from 'react';
import './index.css'; // Import the CSS file for styling

const TeamMember = ({ name, introduction, linkedin, github, photo }) => {
  return (
    <div className="team-member">
      <div className="member-info">
        <img src={photo} alt={`${name} photo`} className="member-photo" />
        <div className="member-details">
          <h2>{name}</h2>
          <p>{introduction}</p>
          <div className="social-links">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const teamMembers = [
    {
      name: "John Doe",
      introduction: "I'm a passionate researcher interested in machine learning and natural language processing.",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      photo: "john.jpg" // Example photo path
    },
    {
      name: "Jane Smith",
      introduction: "I'm a data scientist with expertise in deep learning and computer vision.",
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      photo: "jane.jpg" // Example photo path
    },
    // Add more team members here
  ];

  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            introduction={member.introduction}
            linkedin={member.linkedin}
            github={member.github}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
