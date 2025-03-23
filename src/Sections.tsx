import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Section } from "./interfaces/interfaces";
import { Link } from "react-router";


const sections: Section[] = [
  {
    id: 1,
    title: "Sección oficial",
    films: [
      {
        name: "Backstage",
        image: "Backstage-1.png",
        id: 1
      },
      {
        name: "Backstage",
        image: "Backstage-1.png",
        id: 1
      },
      {
        name: "Backstage",
        image: "Backstage-1.png",
        id: 1
      },
    ],
  },
  {
    id: 2,
    title: "Sección informativa",
    films: [],
  },
  {
    id: 3,
    title: "Sesiones especiales",
    films: [{
      name: "When the phone rang",
      image: "When-the-phone-rang-1.jpeg",
      id: 2
    },
    {
      name: "When the phone rang",
      image: "When-the-phone-rang-1.jpeg",
      id: 2
    },
    {
      name: "When the phone rang",
      image: "When-the-phone-rang-1.jpeg",
      id: 2
    },
    {
      name: "When the phone rang",
      image: "When-the-phone-rang-1.jpeg",
      id: 2
    },
    {
      name: "When the phone rang",
      image: "When-the-phone-rang-1.jpeg",
      id: 2
    }],
  },
  {
    id: 4,
    title: "Palmera de Honor: Isaki Lacuesta",
    films: [],
  },
]

export default function Sections() {

  return (
    <Box>
      {sections.map((section) => (
        <Box key={section.id} w={{ base: "100%" }} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
          <Heading bgColor={"brand.pink"} w={"100%"} p={"1.55rem"} size={"6xl"} textAlign={"center"} fontSize={{ base: "4xl" }}>{section.title}</Heading>
          <Box w={{ base: "100%", sm: "10/12" }} >
            <Box gapX={"3rem"} my={"2rem"}>
              {section.films.length > 0 ? (<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gapX={"3rem"} px={"1.55rem"} my={"2rem"}>
                {section.films.map((film, index) =>
                (<GridItem key={index} justifyContent={"center"} alignItems={"center"} display={"flex"} gap={"3"} flexDir={"column"} w={{ base: "100%" }} my={"2rem"}>
                  <Box bgImage={`url(/img/films/${film.image})`} bgSize={"cover"} bgPos={"center"} w={"100%"} h={"35vh"}></Box>
                  <Heading fontFamily={"EB Garamond"} fontSize={"xl"} fontWeight={"regular"} fontStyle={"italic"}>{film.name}</Heading>
                  <Link to={`/film/${film.id}`} ><Button fontSize={"xs"}>Más info</Button></Link>
                </GridItem>)
                )}
              </Grid>)

                :
                (<Text  px={"1.55rem"} w={"100%"} my={"2rem"}>Aún no hay películas para esta sección</Text>

                )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
