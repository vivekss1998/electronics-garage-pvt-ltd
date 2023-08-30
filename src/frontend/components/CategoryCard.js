// CategoryCard.js
import React from 'react';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CategoryCard.css'; // Import your CSS file

function CategoryCard({ category }) {
  const gradientClass = `gradient-${category.id}`; // Generate unique gradient class

  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    // Navigate to Repairers page
    navigate('/repairers');
  };

  return (
    <div className={`category-card ${gradientClass}`} onClick={handleCardClick}>
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
    </div>
  );
}


export default CategoryCard;
