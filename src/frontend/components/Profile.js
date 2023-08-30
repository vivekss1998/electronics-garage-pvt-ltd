// Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { repairerId } = useParams(); // Get the repairerId from URL params

  // Fetch the repairer details using repairerId (you can use your own data fetching logic)
  const repairerDetails = {
    id: repairerId,
    name: 'John Smith',
    reviews: 5,
    description: 'Experienced electrician specializing in residential repairs.',
    // ... other details
  };

  return (
    <div>
      <h2>{repairerDetails.name}</h2>
      <p>{repairerDetails.description}</p>
      <p>{repairerDetails.reviews} Reviews</p>
      {/* Render other details */}
    </div>
  );
}

export default Profile;
