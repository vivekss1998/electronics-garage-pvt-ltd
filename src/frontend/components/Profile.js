import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import './Profile.css'; // Import your CSS file
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Header from '../Header';

function Profile() {
  const { repairerId } = useParams();

  const repairerDetails = {
    id: repairerId,
    name: 'John Smith',
    reviews: 5,
    description: 'Experienced electrician specializing in residential repairs.',
    occupation: 'mobile repairer',
    email: 'john@example.com',
    id: 1,
    phoneNumber: '123-456-7890',
    // ... other details


      // Mock data for experience
      experience: [
        {
          position: 'Senior Electrician',
          company: 'ElectroFix Services',
          years: '5 years',
        },
        {
          id: 2,
          position: 'Journeyman Electrician',
          company: 'SparkRight Electricals',
          years: '3 years',
        },
      ],
  
      // Mock data for education
      education: [
        {
          id: 1,
          degree: 'Bachelor of Science in Electrical Engineering',
          school: 'Tech University',
          year: '2010',
        },
        {
          id: 2,
          degree: 'Diploma in Electrical Technology',
          school: 'Trade School',
          year: '2007',
        },
        
      ],
    };

  return (
    <div><Header />
    <div className="profile-container">
      <div className="left-section">
        <Card className="image-card">
          {/* Image content */}
          <img src={repairerDetails.imageUrl} alt="Repairer" />
          <h2>{repairerDetails.name}</h2>
          <p>{repairerDetails.occupation}</p>
          <div className="rating">
            <Rating value={repairerDetails.reviews} readonly cancel={false} />
            <span>{repairerDetails.reviews} Reviews</span>
          </div>
        </Card>
      </div>
      <div className="right-section">
      <Accordion multiple activeIndex={null}>
          <AccordionTab header="Education">
        <Card className="experience-education-card">
          {/* Experience and education content */}
          <h3>Education</h3>
          {repairerDetails.education.map((edu) => (
            <div key={edu.id}>
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
              <p>Year of completion: {edu.year}</p>
            </div>
          ))}
        </Card>
        </AccordionTab>
        <AccordionTab header="Experience">
        <Card className="experience-education-card">
          {/* Experience and education content */}
          <h3></h3>
          {repairerDetails.experience.map((edu) => (
            <div key={edu.id}>
              <h4>Company Name: {edu.company}</h4>
              <p>Position: {edu.position}</p>
              <p>Year of experience: {edu.years}</p>
            </div>
          ))}
        </Card>
        </AccordionTab>
        <AccordionTab header="Contact Information">
        <Card className="contact-info-card">
          {/* Contact information content */}
          <h3>Contact Information</h3>
          <div className="contact-info">
            <p>Email: {repairerDetails.email}</p>
            <p>Phone: {repairerDetails.phoneNumber}</p>
            <Button label="Hire Me" className="p-button-success" />
          </div>
        </Card>
        </AccordionTab>
        </Accordion>
      </div>
    </div>
   </div> 
  );
}

export default Profile;
