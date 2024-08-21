import React from 'react';
import './ProductCard.css';

function ProductCard({ name, isNew, isOutOfStock, image }) {
  return (
    <article className="productCard">
      <div className="imageContainer">
        <img src={image} alt={name} className="productImage" />
        {isNew && <span className="newLabel">new product</span>}
        {isOutOfStock && <div className="outOfStock">out of stock</div>}
      </div>
      <div className="productInfo">
        <p className="pricingInfo">
          <span>Sign in</span> or Create an account to see pricing
        </p>
        <button aria-label="Add to wishlist" className="wishlistButton">
          <img
            src=".\assets\like.png"
            alt=""
            className="wishlistIcon"
          />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
