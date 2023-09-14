import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-lg" };
const variants = {
  fill: {
    gray_100_01: "bg-gray-100_01 text-teal-800",
    deep_orange_50: "bg-deep_orange-50",
    red_700: "bg-red-700 shadow-bs text-white-A700",
    red_50: "bg-red-50 text-red-900",
    gray_900: "bg-gray-900 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 shadow-bs text-blue_gray-800",
    red_400: "bg-red-400 shadow-bs text-white-A700",
  },
  outline: {
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
    gray_200: "border border-gray-200 border-solid text-gray-600",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[11px]", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_100_01",
    "deep_orange_50",
    "red_700",
    "red_50",
    "gray_900",
    "white_A700",
    "red_400",
    "blue_gray_100_01",
    "gray_200",
  ]),
};

export { Button };
