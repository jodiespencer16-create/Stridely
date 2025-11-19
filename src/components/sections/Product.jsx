import React from "react";

const products = [
  {
    id: 1,
    name: "Ceiling Light",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=250&h=250&fit=crop",
  },
  {
    id: 2,
    name: "Wood Chair",
    price: "$132.00",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=250&h=250&fit=crop",
  },
  {
    id: 3,
    name: "Papper Cupboard",
    price: "$105.00",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=250&h=250&fit=crop",
  },
  {
    id: 4,
    name: "Ole Gunderson Spring",
    price: "$82.00",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=250&h=250&fit=crop",
  },
  {
    id: 5,
    name: "Treos Seroes 911",
    price: "$200.00",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=250&h=250&fit=crop",
  },
  {
    id: 6,
    name: "Multi Bilderman Slibber",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=250&h=250&fit=crop",
  },
  {
    id: 7,
    name: "XORA Corner Desk",
    price: "$320.00",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=250&h=250&fit=crop",
  },
  {
    id: 8,
    name: "Black Forest Series Wood",
    price: "$225.00",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=250&h=250&fit=crop",
  },
];

const Product = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-3">
            All Product
          </h2>
          <p className="text-neutral-dark/60 text-sm max-w-2xl mx-auto">
            The products we provide only for you as our service are selected from the best products with number 1 quality in the world
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-neutral-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-[#1A7B7B] text-base font-bold">{product.price}</p>
              </div>
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
