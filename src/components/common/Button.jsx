import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  ...props
}) => {
  const base =
    "inline-block px-8 py-3 rounded-full font-bold transition shadow";
  const variants = {
    primary: "bg-accent text-neutral-dark hover:bg-secondary",
    secondary: "bg-primary text-neutral-light hover:bg-accent",
    outline:
      "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-neutral-dark",
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
};

export default Button;