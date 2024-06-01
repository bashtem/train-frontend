import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import { Button } from "./components/Button";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      },
      body: {
        fontFamily: "Roboto, sans-serif",
        fontSize: "13px",
        height: "100vh",
        backgroundColor: "#FAFAFA",
      },
      "body::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  components: {
    Button,
  },
});
