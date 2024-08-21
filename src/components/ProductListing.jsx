import React, { useState } from 'react';
import './ProductListing.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductCard from './ProductCard.jsx';
import FilterSection from './FilterSection.jsx';

const products = [
  { id: 1, name: "PPXOC Milkyway dress in pressed flowers", isNew: true, image: "./assets/product1.png" },
  { id: 2, name: "PPXOC Milkyway dress in pressed flowers", isOutOfStock: true, image: "./assets/product2.png" },
  { id: 3, name: "Product Name", image: "./assets/product3.png" },
  { id: 4, name: "Product Name", image: "./assets/product4.png" },
  { id: 5, name: "Product Name", image: "./assets/product1.png" },
  { id: 6, name: "Product Name", image: "./assets/product2.png" },
  { id: 7, name: "Product Name", image: "./assets/product3.png" },
  { id: 8, name: "Product Name", image: "./assets/product4.png" },
  { id: 9, name: "Product Name", image: "./assets/product1.png" },
  { id: 10, name: "Product Name", image: "./assets/product2.png" },
  { id: 11, name: "Product Name", image: "./assets/product3.png" },
  { id: 12, name: "Product Name", image: "./assets/product4.png" },
  { id: 13, name: "Product Name", image: "./assets/product1.png" },
  { id: 14, name: "Product Name", image: "./assets/product2.png" },
  { id: 15, name: "Product Name", image: "./assets/product3.png" },
];

function ProductListing() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleSortChange = (option) => {
    setSelectedSort(option);
  };

  const sortOptions = ["Recommended", "Newest first", "Popular", "Price: high to low", "Price: low to high"];

  return (
    <div className="productListingContainer">
      <Header />
      <main className="mainContent">
        <h1 className="pageTitle">DISCOVER OUR PRODUCTS</h1>
        <p className="pageDescription">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        <div className="contentDivider" />
        <section className="productSection">
          <div className="productHeader">
            <div className="productCount">
              <span>3425 Items</span>
              <button className="filterToggle" onClick={toggleFilter}>
                {isFilterVisible ? '< HIDE FILTER' : '> SHOW FILTER'}
              </button>
            </div>
            <div className="sortSection">
              <select
                className="sortDropdown"
                value={selectedSort}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="contentDivider" />
          <div className="productContent">
            <div className={`filterWrapper ${isFilterVisible ? 'show' : 'hide'}`}>
              <FilterSection />
            </div>
            <div className={`productGrid ${isFilterVisible ? 'filterVisible' : ''}`}>
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductListing;
