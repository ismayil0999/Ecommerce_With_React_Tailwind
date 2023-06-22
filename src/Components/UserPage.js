import React from 'react';

const UserPage = () => {
  return (
    <div>
  <div class="flex flex-wrap justify-between items-center bg-gray-200 p-4">
  <div class="flex items-center space-x-4">
    <span class="font-semibold">Filter:</span>
    <button class="filter-btn">Smartphone</button>
    <button class="filter-btn">Laptop</button>
    <button class="filter-btn">All Products</button>
    <button class="filter-btn">Television</button>
    <button class="filter-btn">Discounted</button>
    <button class="filter-btn">Accessories</button>
  </div>
  <div>
    <button class="clear-btn">Clear Filters</button>
  </div>
</div>
    </div>
  );
};

export default UserPage;