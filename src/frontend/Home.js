// Home.js
import React from 'react';
import Header from './Header';
import ProductSlider from './components/Slider';
import CategoryCard from './components/CategoryCard'; // Import the CategoryCard component
import './Home.css';

const sliderItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/100x100', // Replace with your image URL
      title: 'Product 1',
      price: '$100',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/100x100', // Replace with your image URL
      title: 'Product 2',
      price: '$200',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/100x100', // Replace with your image URL
      title: 'Product 3',
      price: '$200',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/100x100', // Replace with your image URL
      title: 'Product 4',
      price: '$200',
    },
    // Add more items with custom URLs
  ];
  

const categories = [
    {
        id: 1,
        name: 'Smartphone Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 2,
        name: 'Laptop Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 3,
        name: 'TV Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 4,
        name: 'Audio System Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 5,
        name: 'Camera Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 1,
        name: 'Smartphone Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 2,
        name: 'Laptop Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 3,
        name: 'TV Repair',
    },
      {
        id: 4,
        name: 'Audio System Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
    image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 5,
        name: 'Camera Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 1,
        name: 'Smartphone Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 2,
        name: 'Laptop Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 3,
        name: 'TV Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 4,
        name: 'Audio System Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
      {
        id: 5,
        name: 'Camera Repair',
        image: 'https://via.placeholder.com/100x100', // Replace with image URL
      },
  // Add more categories
];

function Home() {
    return (
        <div>
        <Header />
        <div className="content">
          <div className="slider-container">
            <ProductSlider items={sliderItems} />
          </div>
          <div className="category-container">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
