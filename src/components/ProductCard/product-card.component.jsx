import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  return (
    <section className="pcard">
      <h4>{product.name}</h4>
      <div className="pcard__details">
        <img className="pcard_img" src={product.imageURL} alt={product.name} />

        <div className="pcard__desc">
          <p className="pcard__para">{product.description}</p>

          <div className="pcard_btns">
            <div className="pcard__btns--big">
              <span>MRP Rs.{product.price}</span>
              <CustomButton className="btn--big">Buy Now</CustomButton>
            </div>

            <CustomButton className="pcard__btns--small">
              Buy Now @ Rs.{product.price}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
