import { Box, Button, Grid, GridItem, Heading, HStack, Image, Span, Text } from '@chakra-ui/react'
import { gsap } from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AdvancedMarker, APIProvider, InfoWindow, Map, Marker, Pin, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';
import { MEDIUM, SMALL } from './helpers/constants';
import { Link } from 'react-router';
import { Jury, Location } from './interfaces/interfaces';



var settingsJury = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1500,
  easing: "ease-in",
  responsive: [
    {
      breakpoint: SMALL,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: MEDIUM,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};

const juries: Jury[] = [
  { image: "Amal-Ramsis.jpeg", name: "Amal Ramsis", country: "Egipto" },
  { image: "Marie-Balducchi.jpg", name: "Marie Balducchi ", country: "Francia" },
  { image: "Bassam-Alasad.jpg", name: "Bassam Alasad", country: "Jordania" },
  { image: "Avelina-Prat.jpg", name: "Avelina Prat", country: "España" },
  { image: "Joao-Antunes.jpg", name: "João Antunes", country: "Portugal" },
]

const locations: Location[] = [
  { name: "Cines Babel", lat: 39.47063038792079, long: -0.35713804640167457, direction: "C. de Vicent Sancho Tello, 10, 46021 València" },
  { name: "Filmoteca", lat: 39.4729136461233, long: -0.3763692874932173, direction: "Plaça de l’Ajuntament, 17, 46002 València" },
  { name: "Galeria del Tossal", lat: 39.477567359771434, long: -0.37955436874323883, direction: "Plaça del Tossal, s/n, 46001" },
  { name: "Palau de la música", lat: 39.46870956595882, long: -0.35968809356230325, direction: "Passeig de l’Albereda, 30, 46023 València" },
]

function About() {
  const mapsKey = import.meta.env.VITE_REACT_APP_MAPS_API_KEY;

  if (!mapsKey) {
    throw new Error('MAPS_API_KEY no está definida en las variables de entorno.');
  }

  return (
    <Box overflowX={"hidden"}>
      {/** Hero */}
      <Box w={"100%"} h={"85vh"} bgSize={"cover"} display={"flex"} justifyContent={"flex-end"} alignItems={"end"} px="25px" pb={"25px"} bgPos={"center"} bgImage={"url(/img/elements/about-bg.jpg)"}>
        <Heading color={"brand.gray"} size={"6xl"} >
          About
          <Span fontStyle={"italic"} fontWeight={"light"}>La Mostra de València</Span>
        </Heading>
      </Box>

      {/** About */}
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mx={"1.5rem"} my={"5rem"} flexDir={"column"}>
        <Box w={"10/12"} display={"flex"} flexDir={"column"} justifyContent={"space-between"} gap={"10"} >
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} gap={"10"}>
            <Box w={{ base: "100%", md: "4/12" }} h={"40vh"} bgSize={"cover"} bgPos={"center"} bgImage={"url(/img/elements/mostra-de-valencia.webp)"}></Box>
            <Box display={"flex"} w={{ base: "100%", md: "7/12" }} flexDir={"column"}>
              <HStack mb={"4"} display={"flex"} alignItems={"center"}>
                <Image h={"2rem"} src='/img/elements/element-waves.svg'></Image>
                <Heading size={"xl"}>Cinema del mediterrani</Heading>
              </HStack>
              <Text whiteSpace={"pre-line"} fontFamily={"EB Garamond"} letterSpacing={"serif"}>
                Mostra de València–Cinema del Mediterrani es una cita para amantes del cine, tanto par expertos como aficionados, donde se reúne el público y los creadores para disfrutar de una programación especialmente seleccionada con el objetivo de acercarles títulos de gran calidad que no se encuentran habitualmente en los circuitos comerciales. La programación de la Mostra es, además, específica de un espacio geográfico y cultural tan definitorio de nuestra identidad como es el de la cuenca meditterránea; un espacio diverso y plural, tan enriquecedor como trágico; fuente de inspiración para la producción artística, plagado de contradicciones, retos, choques, esperanzas y un futuro por definir.
              </Text>
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDir={{ base: "column", md: "row" }} gap={"10"}>
            <Box w={{ base: "100%", md: "8/12", lg: "7/12" }} >
              <HStack mb={"4"} display={"flex"} alignItems={"center"}>
                <Image h={"2rem"} src='/img/elements/element-square.png'></Image>
                <Heading size={"xl"}>Organización</Heading>
              </HStack>
              <Text whiteSpace={"pre-line"} fontFamily={"EB Garamond"} letterSpacing={"serif"}>Mostra de València e Iniciativas Audiovisuales es el Organismo Autónomo Municipal del Ayuntamiento de València a cargo de la realización del festival de cine Mostra de València-Cinema del Mediterrani, con la visión de construir un proyecto sólido y a largo plazo que consolide la Mostra como un referente cultural de la ciudad y para la ciudad, con la máxima proyección fuera de nuestro territorio.</Text>
            </Box>
            <Box display={"flex"} flexDir={"column"} w={{ base: "100%", md: "3/12", lg: "2/12" }} gap={"4"}>
              <Link to={"http://www.valencia.es/transparenciaspl/ca/web/mostra-de-valencia/inici"}><Button w={{base: "100%"}}>Portal de transparencia</Button></Link>
              <Link to={"https://contrataciondelestado.es/wps/poc?uri=deeplink%3AperfilContratante&ubicacionOrganica=NG%2FOhfTo9Cw%3D"}><Button w={{base: "100%"}}>Perfil del contratante</Button></Link>
              <Link to={"https://lamostradevalencia.com/wp-content/uploads/2020/07/INFORMACIO%CC%81-COMPLEMENTA%CC%80RIA-07_20.pdf"}><Button w={{base: "100%"}}>Más información</Button></Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/** International jury */}
      <Box bgColor={"brand.pink"} py={"5rem"}>
        <Heading size={"4xl"} fontSize={"3xl"} sm={{ fontSize: "4xl" }} px={"3rem"} pb={"3rem"} textTransform={"uppercase"}>Jurado Internacional</Heading>
        <Slider {...settingsJury} >
          {juries.map((jury, index) => (
            <Box key={index}>
              <Box w={"10/12"} border={"1px solid black"} h={"40vh"} bgSize={"cover"} bgPos={"top"} bgImage={`url(/img/elements/${jury.image})`}></Box>
              <Box bgColor={"brand.yellow"} w={"10/12"} p={"2"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                  <Heading>{jury.name}</Heading>
                  <Text fontStyle={"italic"}>{jury.country}</Text>
                </Box>
                <Image h={"3vh"} src='/img/elements/element-star-raw.png'>
                </Image>
              </Box>
            </Box>))}

        </Slider>
      </Box>

      {/** Locations */}
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mx={"1.5rem"} my={"5rem"} flexDir={"column"}>
        <Box w={"10/12"} display={"flex"} flexDir={"column"} justifyContent={"space-between"} gap={"10"} >
          <Heading size={"6xl"}>Sedes</Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={"10"}>
            {locations.map((location, index) => (
              <GridItem colSpan={{ base: 4, md: 2 }} key={index}>
                <APIProvider apiKey={mapsKey}>
                  <Map
                    style={{ width: '100%', height: '50vh' }}
                    defaultCenter={{ lat: location.lat, lng: location.long }}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                  >
                    <Marker position={{ lat: location.lat, lng: location.long }} />

                  </Map>
                </APIProvider>
                <Heading>{location.name}</Heading>
                <Text>{location.direction}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default About
