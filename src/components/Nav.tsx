import { Box, Button, HStack, Image, Link, MenuContent, MenuItem, MenuItemCommand, MenuPositioner, MenuRoot, MenuTrigger, Portal } from "@chakra-ui/react";
import Menu from "./Menu";


export default function Nav({ responsive }: { responsive: boolean }) {
    return (
        <>
            <Box display={"flex"} justifyContent={"center"} m={"1.55rem"} h={"5vh"}>
                <Box display={"flex"} w={"10/12"} justifyContent={"space-between"}>
                    <Link href="/" w={{ base: "6/12", md: "2/12" }}>
                        <Image w="7rem" src="/img/elements/logo-no-slogan-n.svg" />
                    </Link>
                    <Box display={"flex"} width="10/12" justifyContent={"flex-end"} alignItems={"center"} gap={"5"}>
                        <Menu textAlign="left" width="" direction="row" color="brand.black" responsive={responsive} />
                        <Link href="https://www.reservaentradas.com/" target="blank"><Button display={{ base: "none", md: "flex" }} size="sm">Entradas</Button></Link>
                    </Box>
                </Box>
            </Box></>
    )
}
