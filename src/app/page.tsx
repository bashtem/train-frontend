"use client";

import {
  Box,
  Flex,
  Button,
  Text,
  HStack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { PiCaretDownBold } from "react-icons/pi";
import "@fontsource/rubik";
import partners from "../app/json_data/partners.json";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <Box h={"100%"}>
      <Box bg="#3D3D3E" h="5.5em">
        <Flex
          justifyContent={"space-between"}
          align={"center"}
          h={"100%"}
          px="8.5em"
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

      <Box pt={"2em"} px={"8.5em"}>
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

      <Box pt={"2em"} px={"8.5em"} pb={"12em"}>
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
          <HStack pt={"3em"} spacing={7}>
            {partners.map(({ img }, index) => (
              <Image key={index} src={img} />
            ))}
          </HStack>
        </Box>
      </Box>

      <Box bg={"white"} pt={"5em"} pb={"6em"}>
        <Box px={"8.5em"}>
          <Flex maxHeight={"46em"}>
            <Box bgColor={"#722F48"} width={"60%"} px={"2.5em"} color={"white"}>
              <Text
                pt={"4em"}
                fontWeight={"bold"}
                fontSize={"48px"}
                lineHeight={1.2}
                width={"90%"}
                fontFamily={"Rubik"}
              >
                Simplified record keeping
              </Text>
              <Text pt={"1em"} fontSize={"18px"}>
                Keep all your financial records in one place, making audits and
                financial analysis a breeze.
              </Text>
              <HStack spacing={10} pt={"2.5em"}>
                <Button size={"lg"}>Discover products</Button>
                <Link
                  textDecoration={"none"}
                  fontWeight={"semibold"}
                  fontSize={"16px"}
                >
                  Learn more
                </Link>
              </HStack>
            </Box>
            <Image
              borderTopRightRadius={"22em"}
              width={"50%"}
              src="./assets/sitting.svg"
            />
          </Flex>

          <Flex pt="4em">
            <Image width={"50%"} src="./assets/deliver.svg" />
            <Box bgColor={"#FFF3DB"} width={"60%"} px={"2.5em"}>
              <Text
                pt={"4em"}
                fontWeight={"bold"}
                fontSize={"48px"}
                lineHeight={1.2}
                width={"90%"}
                fontFamily={"Rubik"}
              >
                Cost Savings
              </Text>
              <Text pt={"1em"} fontSize={"18px"} width={"80%"}>
                Deal directly with suppliers and enjoy cost savings that impact
                your profitability...
              </Text>
              <HStack spacing={10} pt={"2.5em"}>
                <Button size={"lg"}>Save more, spend less</Button>
                <Link
                  textDecoration={"none"}
                  fontWeight={"semibold"}
                  fontSize={"16px"}
                >
                  Learn more
                </Link>
              </HStack>
            </Box>
          </Flex>

          <Flex pt={"4em"}>
            <Box bgColor={"#4D6425"} width={"60%"} px={"2.5em"} color={"white"}>
              <Text
                pt={"4em"}
                fontWeight={"bold"}
                fontSize={"48px"}
                lineHeight={1.2}
                width={"90%"}
                fontFamily={"Rubik"}
              >
                Grow your business
              </Text>
              <Text pt={"1em"} fontSize={"18px"}>
                Leverage the benefits of Train to optimize your retail business.
                and watch your business thrive. We're here to support your
                growth
              </Text>
              <HStack spacing={10} pt={"2.5em"}>
                <Button size={"lg"}>Unlock growth</Button>
                <Link
                  textDecoration={"none"}
                  fontWeight={"semibold"}
                  fontSize={"16px"}
                >
                  Learn more
                </Link>
              </HStack>
            </Box>
            <Image width={"50%"} src="./assets/courier.svg" />
          </Flex>
          <VStack justifyContent={"center"}>
            <Text
              color={"#6B7280"}
              fontSize={"14px"}
              pt={"0.7em"}
              fontWeight={"semibold"}
              letterSpacing={"0.1em"}
            >
              TRAIN MAKES IT EASY
            </Text>

            <Text
              fontWeight={"bold"}
              fontSize={"36px"}
              fontFamily={"Rubik"}
              noOfLines={2}
              lineHeight={1.2}
              width={"45%"}
              textAlign={"center"}
            >
              Your journey to retail success with Train
            </Text>
          </VStack>

          <HStack>
            <Box color={"#374151"} width={"30%"}>
              <Text
                fontWeight={"semibold"}
                fontSize={"20px"}
                fontFamily={"Rubik"}
              >
                Register your business
              </Text>
              <Text fontSize={"18px"} noOfLines={3} pt={"0.6em"}>
                Begin your journey by registering on Train. It's a quick and
                easy process. Just provide your basic business information to
                get started.
              </Text>
              <Box>
                <Link>
                  Browse Template{" "}
                  <Box as="span">
                    <FaArrowRightLong />
                  </Box>
                </Link>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
