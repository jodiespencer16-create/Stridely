import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Product = () => {
  const { filteredProducts, addToCart } = useContext(ShopContext);
  
  if (!filteredProducts.length) {
    return (
      <div className="text-center my-20 text-neutral-dark/80">
        <p>No sneakers found. Try another search!</p>
      </div>
    );
  }
  
  return (
    <section className="py-16 bg-neutral-light" id="shop">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark text-center mb-10">
          Shop Sneakers & Kicks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div
                key={id}
                className="bg-white rounded-xl shadow-lg overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-2xl transition group"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-44 h-44 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                <p className="text-accent text-xl font-semibold mb-4">${price}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => addToCart(product, id)}
                    className="p-3 rounded-full bg-accent text-neutral-dark shadow hover:bg-secondary transition flex items-center"
                    aria-label="Add to cart"
                  >
                    <BiCartAdd className="text-xl" />
                  </button>
                  <Link to={`/product/${id}`}>
                    <button
                      className="p-3 rounded-full bg-neutral-light border border-primary text-primary hover:bg-primary hover:text-neutral-light transition flex items-center"
                      aria-label="View details"
                    >
                      <FaEye className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;