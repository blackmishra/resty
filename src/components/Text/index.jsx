import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular16Gray600: "font-inter font-normal",
  txtInterRegular14Bluegray300: "font-inter font-normal",
  txtInterMedium18Gray900: "font-inter font-medium",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium14Gray600: "font-inter font-medium",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterRegular14Bluegray800: "font-inter font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14Bluegray800: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterRegular18Bluegray300: "font-inter font-normal",
  txtInterExtraBold30: "font-extrabold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterMedium12Bluegray900: "font-inter font-medium",
  txtInterRegular14Gray900: "font-inter font-normal",
  txtCopperplate26: "font-copperplate font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
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
