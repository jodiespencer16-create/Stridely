import React from "react";
import PropTypes from "prop-types";

const Card = ({
  image,
  title,
  price,
  children,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <img
      src={image}
      alt={title}
      className="w-48 h-48 object-cover rounded-lg mb-4"
      loading="lazy"
    />
    <h3 className="text-lg font-bold text-primary">{title}</h3>
    <p className="text-accent text-xl font-semibold my-2">${price}</p>
    <div>{children}</div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
};

export default Card;