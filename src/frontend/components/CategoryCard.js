// CategoryCard.js
import React from 'react';
import './CategoryCard.css'; // Import your CSS file

function CategoryCard({ category }) {
  const gradientClass = `gradient-${category.id}`; // Generate unique gradient class

  return (
    <div className={`category-card ${gradientClass}`}>
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
    </div>
  );
}

export default CategoryCard;
