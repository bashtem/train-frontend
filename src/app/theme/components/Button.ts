import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    bgColor: "#060D0D",
    color: "white",
    borderRadius: "8px",
    fontSize: "13px",
    _hover: {
      bgColor: "#E2E8F0",
      color: "#060D0D",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: {
      py: "1.7em",
      fontSize: "16px",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    ghost: {
      bgColor: "#FFFFFF",
      color: "#060D0D",
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "md",
    variant: "",
    colorScheme: "",
  },
};
