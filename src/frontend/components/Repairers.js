import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating'; // Import Rating component
import './Repairers.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../Header'; // Import Header component

const repairers = [
  {
    id: 1,
    name: 'John Smith',
    reviews: 5,
    description: 'Experienced electrician specializing in residential repairs.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    reviews: 4,
    description: 'Skilled plumber for various plumbing needs.',
  },
  {
    id: 1,
    name: 'John Smith',
    reviews: 5,
    description: 'Experienced electrician specializing in residential repairs.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    reviews: 4,
    description: 'Skilled plumber for various plumbing needs.',
  },
  {
    id: 1,
    name: 'John Smith',
    reviews: 5,
    description: 'Experienced electrician specializing in residential repairs.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    reviews: 4,
    description: 'Skilled plumber for various plumbing needs.',
  },
  // Add more repairer details
];

function Repairers() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleViewProfile = (repairerId) => {
      // Navigate to Profile page with the selected repairer's ID
      navigate(`/repairers/${repairerId}`);
    };
  return (
    <div>      <Header /> {/* Include the Header component */}
    <div className="repairers-container">
      {repairers.map((repairer) => (
        <Card key={repairer.id} className="repairer-card">
          <h2>{repairer.name}</h2>
          <p>{repairer.description}</p>
          <div className="review-rating">
            <Rating value={repairer.reviews} readonly cancel={false} />
            <span>{repairer.reviews} Reviews</span>
          </div>
          <Button
            label="View"
            className="p-button-success"
            onClick={() => handleViewProfile(repairer.id)}
          />
          <Button label="Hire" className="p-button-danger" />
        </Card>
      ))}
    </div>
    </div>
  );
}

export default Repairers;
