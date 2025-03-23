import { Box, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import Menu from "./Menu";
import { useLocation } from "react-router";
import { useEffect } from "react";


export default function Footer() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <VStack bgColor="brand.black" color="brand.gray" textAlign="center" id="footer">
            <Box borderBottom="1px solid white" h="100px" w={"100%"} mb={"80px"}></Box>
            <Box display={"flex"} flexDir={{ "base": "column", "md": "row" }} alignItems={{base: "center", md:"start"}} justifyContent={"center"} w={"10/12"} gap={"14"}>
                <Box w={{ "base": "100%", "md": "2/12" }} display={"flex"} justifyContent={{base: "center", md: "flex-start"}}>
                    <Image src="/img/elements/footer-logos.png" w={{ "base": "3/12", "md": "6/12" }}></Image>
                </Box>
                <VStack w={{ "base": "100%", "md": "2/12" }} alignItems={{base: "center", md: "flex-start"}}>

                    <Heading as={"h3"} size={"xl"} fontFamily={"EB Garamond"} fontStyle={"italic"} fontWeight={"regular"}>Edición 2025</Heading>
                    <Menu textAlign={"center"} responsive={false} direction="column" color="brand.gray" width="" />
                </VStack>
                <VStack w={{ "base": "100%", "md": "2/12" }} alignItems={{base: "center", md: "flex-start"}} >
                    <Heading as={"h3"} size={"xl"} fontFamily={"EB Garamond"} fontStyle={"italic"} fontWeight={"regular"}>Contáctanos</Heading>
                    <Link color={"brand.gray"}>Facebook</Link>
                    <Link color={"brand.gray"}>Instagram</Link>
                    <Link color={"brand.gray"}>Twitter</Link>
                </VStack>
                <VStack w={{ "base": "8/12", "md": "3/12" }} alignItems={{base: "center", md: "flex-start"}}>
                    <Heading as={"h3"} size={"xl"} fontFamily={"EB Garamond"} fontStyle={"italic"} fontWeight={"regular"}>La mostra</Heading>
                    <Text textAlign={{base: "center", md:"left"}}>Mostra de València –Cinema del Mediterrani es un festival de cine que se celebra en València y que se centra en la producción audiovisual del ámbito geográfico y cultural mediterráneo.</Text>
                </VStack>
            </Box >
            <Image src="/img/elements/element-wave.svg" w="150px" py={"2rem"}></Image>
            <Text whiteSpace="nowrap" fontSize="8.5vw"  textAlign="center" textTransform="uppercase" fontWeight="semibold" >La Mostra de València</Text>
            <HStack justifyContent="space-between" w="100%" px="2">
                <Text >Copyright 2024 © Mostra de València. All rights reserved.</Text>
                <HStack>
                    <Link color="brand.gray">Protección de datos</Link>
                    <Link color="brand.gray">Aviso legal</Link>
                </HStack>
            </HStack>
        </VStack>
    )
}
