import React from "react";

const products = [
  {
    id: 1,
    name: "Ceiling Light",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Wood Chair",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Papper Cupboard",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Ole Gunderson Spring",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    name: "Treos Seroes 911",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    name: "Multi Bilderman Slibber",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop",
  },
  {
    id: 7,
    name: "XORA Corner Desk",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=150&h=150&fit=crop",
  },
  {
    id: 8,
    name: "Black Forest Series Wood",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=150&h=150&fit=crop",
  },
];

const Product = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-3">
            All Product
          </h2>
          <p className="text-neutral-dark/60 text-sm max-w-2xl mx-auto">
            The products we provide only for you as our service are selected from the best products with number 1 quality in the world
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium text-neutral-dark text-center">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 gap-2">
          <button className="w-2 h-2 rounded-full bg-neutral-dark"></button>
          <button className="w-2 h-2 rounded-full bg-neutral-dark/30"></button>
          <button className="w-2 h-2 rounded-full bg-neutral-dark/30"></button>
          <button className="w-2 h-2 rounded-full bg-neutral-dark/30"></button>
          <button className="w-6 h-2 rounded-full bg-neutral-dark/30"></button>
        </div>
      </div>
    </section>
  );
};

export default Product;
