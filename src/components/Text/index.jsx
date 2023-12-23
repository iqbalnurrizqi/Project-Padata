import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtMontserratSemiBold20: "font-montserrat font-semibold",
  txtMontserratSemiBold30: "font-montserrat font-semibold",
  txtMontserratSemiBold60: "font-montserrat font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtMontserratSemiBold45: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
