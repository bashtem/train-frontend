"use client";

import { Box, Flex, Button, Text, HStack, Image, Link } from "@chakra-ui/react";
import { PiCaretDownBold } from "react-icons/pi";
import "@fontsource/rubik";

export default function Home() {
  return (
    <Box h={"100%"}>
      <Box bg="#3D3D3E" h="5.5em">
        <Flex
          justifyContent={"space-between"}
          align={"center"}
          h={"100%"}
          px="9em"
        >
          <HStack spacing={"2em"}>
            <Button
              size={"lg"}
              py={"1.7em"}
              px={"1.4em"}
              fontSize={"16px"}
              bgColor={"white"}
              borderRadius={"0.5em"}
              variant={"ghost"}
            >
              For Retailer
            </Button>
            <Link fontSize={"16px"} color={"white"} fontWeight={"semibold"}>
              For Supplier
            </Link>
          </HStack>

          <HStack color="white" spacing={"2em"} alignItems={"center"}>
            <HStack spacing={"0.2em"}>
              <Box>EN</Box>
              <Box as="span">
                <PiCaretDownBold />
              </Box>
            </HStack>
            <HStack spacing={"0.5em"}>
              <Box as="span" fontSize={"22px"}>
                🇺🇿
              </Box>
              <Box as="span">Uzbeikistan</Box>
              <Box as="span">
                <PiCaretDownBold />
              </Box>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      <Box pt={"2em"} px={"9em"}>
        <HStack
          justifyContent={"space-between"}
          align={"center"}
          fontSize={"14px"}
          fontWeight={"semibold"}
        >
          <Box fontSize={"24px"} fontFamily={"rubik"} fontWeight={"bold"}>
            train
          </Box>
          <HStack spacing={"2em"}>
            <Box as="a" href="#">
              About
            </Box>
            <Box as="a" href="#">
              Pricing
            </Box>
            <Box as="a" href="#">
              Partners
            </Box>
            <Box as="a" href="#">
              Affiliates
            </Box>
            <Box as="a" href="#">
              Customers
            </Box>
            <Box as="a" href="#">
              Blog
            </Box>
            <Box as="a" href="#">
              Contact
            </Box>
          </HStack>
          <HStack spacing={"2em"}>
            <Box as="a" href="#">
              Contact admin
            </Box>
            <Button fontSize={"14px"} size={"md"} bgColor={"black"}>
              Log in
            </Button>
          </HStack>
        </HStack>
      </Box>

      <Box pt={"2em"}>
        <Flex justifyContent={"space-between"}>
          <Box pt={"12em"} width={"45%"}>
            <Box pl={"9.5em"}>
              <Text
                fontSize={"5xl"}
                fontWeight={"bolder"}
                fontFamily={"Rubik"}
                pb={"0.1em"}
                lineHeight={1.1}
              >
                Buy directly from suppliers
              </Text>
              <Text fontSize={"18px"} noOfLines={2} pt={"1em"}>
                Connect directly with a diverse network of trusted suppliers. No
                more middlemen, just direct access to the products you need
              </Text>
              <HStack pt={"2.5em"} spacing={6}>
                <Button size={"lg"}>Create a free account</Button>
                <Link
                  textDecoration={"none"}
                  fontWeight={"semibold"}
                  fontSize={"16px"}
                >
                  Contact sales
                </Link>
              </HStack>
            </Box>
          </Box>
          <Box>
            <Image src="./assets/retailer1.svg" />
          </Box>
        </Flex>
      </Box>

      <Box pt={"2em"} px={"9em"}>
        <Box>
          <Text
            width={"35%"}
            fontWeight={"semibold"}
            noOfLines={2}
            fontSize={"28px"}
            fontFamily={"Rubik"}
            lineHeight={1.2}
          >
            Assembly partners with suppliers across Uzbekistan
          </Text>
          <HStack pt={"3em"} spacing={3}>
            <Image src="./assets/persil_2.svg" />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
