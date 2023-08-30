// Header.js
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import './Header.css'; // Import your CSS file

const categoryOptions = [
  { label: 'Electrician', value: 'electrician' },
  { label: 'Plumber', value: 'plumber' },
  { label: 'Appliance Repair', value: 'appliance_repair' },
  // Add more categories as needed
];

function Header() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search based on selectedCategory and searchQuery
    console.log('Searching for:', selectedCategory, searchQuery);
    // Implement your search logic here
  };

  const handleCartClick = () => {
    // Handle the cart icon click here
    console.log('Cart icon clicked');
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          Electronics Garage
        </div>
        <div className="category-dropdown">
          <Dropdown
            value={selectedCategory}
            options={categoryOptions}
            onChange={handleCategoryChange}
            placeholder="Select a category"
            style={{ width: '160px', height: '100%' }}
          />
        </div>
        <div className="search-bar">
          <InputText
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
        <div className="cart-icon">
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-secondary p-button-rounded"
            onClick={handleCartClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
