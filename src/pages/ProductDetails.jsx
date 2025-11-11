import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Button from "../components/common/Button";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  
  const product = products.find((p) => p.id === parseInt(id));
  
  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }
  
  const { title, image, price, description } = product;
  
  return (
    <main className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">{title}</h1>
          <p className="mb-6 text-neutral-dark text-lg">{description}</p>
          <p className="text-xl font-semibold text-accent mb-8">${price}</p>
        </div>
        <Button onClick={() => addToCart(product, product.id)} variant="primary">
          Add to Cart
        </Button>
      </div>
    </main>
  );
};

export default ProductDetails;