import { MenuProps } from "@/interfaces/interfaces";
import { Box, Text, MenuContent, MenuItem, MenuItemCommand, MenuPositioner, MenuRoot, MenuTrigger, Portal, Button, MenuItemGroup, MenuSeparator, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "react-router";


const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Secciones",
        href: "/sections",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contacto",
        href: "/#contact",
    },
]
export default function Menu({ direction, textAlign, color, width, responsive }: MenuProps) {

    return (
        <Box>
            {responsive ?

                (
                    <Box>
                        <Box display={{ base: "block", md: "none" }}>
                            <MenuRoot size={"sm"}>
                                {/* Open button */}

                                <MenuTrigger asChild>
                                    <Button>
                                        Open
                                    </Button>
                                </MenuTrigger>

                                {/* Inside menu*/}
                                <Portal>
                                    <MenuPositioner>
                                        <MenuContent>
                                            <MenuItemGroup>
                                                {links.map((link) => (
                                                    <MenuItem key={link.href} asChild value={link.title}>
                                                        <Link to={link.href} >
                                                            {link.title}
                                                        </Link>
                                                    </MenuItem>
                                                ))}
                                            </MenuItemGroup>
                                            <MenuSeparator></MenuSeparator>
                                            <MenuItemGroup>
                                                <MenuItem value="Entradas" >
                                                    <LinkChakra href="https://www.reservaentradas.com/" target="blank" >
                                                        Entradas
                                                    </LinkChakra>
                                                </MenuItem>
                                            </MenuItemGroup>
                                        </MenuContent>
                                    </MenuPositioner>
                                </Portal>
                            </MenuRoot>
                        </Box>
                        <Box display={{ base: "none", md: "flex" }} flexDir={direction} textAlign={{base: textAlign, md: "left"}} gap="2" w={width}  color={color}>
                            <Link to={"/"}>
                                <Text>Home</Text>
                            </Link>
                            <Link to={"/sections"}>
                                <Text>Secciones</Text>
                            </Link>
                            <Link to={"/about"}>
                                <Text>About</Text>
                            </Link>
                            <Link to={"/#footer"}>
                                <Text>Contacto</Text>
                            </Link>
                        </Box>
                    </Box>)
                :
                (<Box display={"flex"} flexDir={direction} gap="2" w={width} textAlign={{base: textAlign, md: "left"}} color={color}>
                    <Link to={"/"}>
                        <Text>Home</Text>
                    </Link>
                    <Link to={"/sections"}>
                        <Text>Secciones</Text>
                    </Link>
                    <Link to={"/about"}>
                        <Text>About</Text>
                    </Link>
                    <Link to={"/#footer"}>
                        <Text>Contacto</Text>
                    </Link>
                </Box>)
            }
        </Box>
    )
}
