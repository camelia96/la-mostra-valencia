import './App.css'
import { Box, Button,  Heading, HStack, Image, Link, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import LoopText from './components/LoopText';
import { useLocation } from 'react-router';
import { New } from './interfaces/interfaces';


var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

};
var settingsEntities = {
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500

};

const filmImages = ["Avant-Drag-1.jpg", "Backstage-1.png", "Backstage-2.png"];

const news: New[] = [
  {
    title: "‘Faruk’, de la directora Asli Özge, obtiene la Palmera de Oro y el premio al Mejor Guion de la 39ª Mostra de València ",
    image: "https://lamostradevalencia.com/wp-content/uploads/2024/11/faruk-palmares-1536x752.png",
    description: "En el palmarés, que no pudo anunciarse en la gala de clausura por la suspensión de actividades del festival, destaca también la libanesa ‘Moondove’ con la Palmera de Plata y Mejor Fotografía",
    link: "https://lamostradevalencia.com/faruk-de-la-directora-asli-ozge-obtiene-la-palmera-de-oro-y-el-premio-al-mejor-guion-de-la-39a-mostra-de-valencia/"
  },
  {
    title: "‘It all ends here’: el croata Rajko Grlic dispara contra la corrupción en su país",
    image: "https://lamostradevalencia.com/wp-content/uploads/2024/10/croata.jpg",
    description: "Es uno de los directores que más veces ha competido en el concurso de Mostra de València",
    link: "https://lamostradevalencia.com/it-all-ends-here-el-croata-rajko-grlic-dispara-contra-la-corrupcion-en-su-pais/"
  },
  {
    title: "‘Faruk’: un anciano de 90 años en Estambul, víctima de la gentrificación ",
    image: "https://lamostradevalencia.com/wp-content/uploads/2024/10/K4K01464-1536x1027.jpg",
    description: "Ganadora del FIPRESCI Panorama en la Berlinale, reflexiona sobre el paso del tiempo, la memoria y la resistencia frente a los desafíos urbanos",
    link: "https://lamostradevalencia.com/faruk-un-anciano-de-90-anos-en-estambul-victima-de-la-gentrificacion/"
  },
  {
    title: "‘Les enfants rouges’, una exploración del duelo infantil en las montañas de Túnez ",
    image: "https://lamostradevalencia.com/wp-content/uploads/2024/10/les-enfants.png",
    description: "La cinta de Lotfi Achour sigue el impacto emocional de un joven pastor testigo de un terrible asesinato",
    link: "https://lamostradevalencia.com/les-enfants-rouges-una-exploracion-del-duelo-infantil-en-las-montanas-de-tunez/"
  }
]
function App() {

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
    <Box overflowX={"hidden"}>
      {/* HERO */}
      <Box >
        <Slider {...settings} className='slider' >
          {filmImages.map((image, index) =>
          (<Box key={index} bgPos={"center"} bgSize="cover" bgRepeat="no-repeat" bgImage={`url(/img/films/${image})`} h="85vh" p="25px" textAlign="end" alignContent="end">
            <Heading as={"h2"} color="brand.gray" size={"6xl"} fontSize={{ "base": "5xl", "md": "6xl" }} >Cinema del mediterrani</Heading>
          </Box>))}
        </Slider>
      </Box>

      {/* Entidades */}
      <Box display={"flex"} h={"40vh"} justifyContent={"center"} m={"1.5rem"}>
        <Box w={"10/12"} display={"flex"} justifyContent={{ base: "center", md: "space-between" }} gap={"10"} alignItems={"center"} flexDir={{ base: "column", md: "row" }}>
          <Box w={{ "base": "100%", "md": "5/12" }} >
            <HStack mb={"4"} w={{ "base": "100%", "lg": "5/12" }}>
              <Image w={"1.5rem"} src="/img/elements/element-waves.svg" />
              <Heading size={"xl"}>Entidades</Heading>
            </HStack>
            <Text fontFamily={"EB Garamond"} letterSpacing={"serif"}>Todas aquellas instituciones y/o entidades que, de manera directa o  indirecta, organizan, participan, colaboran o brindan su apoyo para la  realización, promoción y éxito de nuestro festival.</Text>
          </Box>
          <Box w={{ "base": "100%", "md": "6/12" }}>
            <Slider {...settingsEntities} className="slider">
              <Box display={"flex"} alignItems={"center"}>
                <Image src="/img/elements/logo-palau.png"></Image>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Image src="/img/elements/logo-gva.png"></Image>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Image src="/img/elements/logo-apunt.png"></Image>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Image src="/img/elements/logo-ajun.png"></Image>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>

      {/* SECTIONS */}
      <Box h={{ base: "100%", md: "100vh" }} id='sections' display={"flex"} flexDir={"column"}>
        {/* First row */}
        <Box h={{ base: "100%", md: "50vh" }} display={"flex"} flexDir={{ base: "column", sm: "column", md: "row" }}>

          {/* First Item */}
          <Box display={"flex"} flexDir={{ base: "column", sm: "row" }} w={{ "base": "100%" }}>
            <Box w={{ "base": "100%", sm: "6/12" }} bgColor={"brand.blue"}>
              <Heading p={"10"} size={"3xl"}>
                <Link color={"brand.gray"}>Sección <br />Oficial</Link>
              </Heading>
            </Box>
            <Image src="/img/films/Backstage-1.png" w={{ "base": "100%", sm: "6/12" }} >
            </Image>
          </Box>

          {/* Second Item */}
          <Box display={"flex"} flexDir={{ base: "column", sm: "row-reverse", md: "row" }} w={{ "base": "100%" }}>
            <Box w={{ "base": "100%", sm: "6/12" }} bgColor={"brand.red"}>
              <Heading p={"10"} size={"3xl"}>
                <Link color={"brand.gray"}>Sección <br />Informativa</Link>
              </Heading>
            </Box>
            <Image src="/img/films/Avant-Drag-1.jpg" w={{ "base": "100%", sm: "6/12" }} >
            </Image>
          </Box>
        </Box>


        {/* Second row */}
        <Box h={{ base: "100%", md: "50vh" }} display={"flex"} flexDir={{ base: "column", sm: "column", md: "row" }}>

          {/* Third item */}
          <Box display={"flex"} flexDir={{ base: "column", sm: "row-reverse", md: "row" }} w={{ "base": "100%" }}>
            <Image src="/img/films/Las-novias-del-sur-1.png" w={{ "base": "100%", sm: "6/12" }} >
            </Image>
            <Box w={{ "base": "100%", sm: "6/12" }} bgColor={"brand.pink"}>
              <Heading p={"10"} size={"3xl"}>
                <Link>Sesiones <br />Especiales</Link>
              </Heading>
            </Box>
          </Box>

          {/* Fourth item */}
          <Box display={"flex"} flexDir={{ base: "column", sm: "row" }} w={{ "base": "100%" }}>
            <Image src="/img/films/Segundo-premio.jpg" w={{ "base": "100%", sm: "6/12" }} >
            </Image>
            <Box w={{ "base": "100%", sm: "6/12" }} bgColor={"brand.yellow"}>
              <Heading p={"10"} size={"3xl"}>
                <Link whiteSpace={"pre"}>Palmera<br />
                  de<br />
                  Honor:<br />
                  Isaki<br />
                  Lacuesta</Link>
              </Heading>
            </Box>
          </Box>
        </Box>



      </Box>


      {/* News */}
      <Box backgroundColor={"brand.gray"} display={"flex"} flexDir={"column"} justifyContent={"center"} pt={"24"}>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} pb={"24"} flexDir={{ base: "column", md: "row" }}>

          <Box w={{ base: "10/12" }} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"10"} flexDir={{ base: "column", md: "row" }}>
            <HStack w={{ base: "100%", md: "5/12", lg: "4/12" }} display={"flex"} justifyContent={{ base: "center", md: "left" }}>
              <Image w={"1.8rem"} src="/img/elements/element-palm-red.png" />
              <Heading as={"h2"} fontSize={{ base: "5xl", lg: "6xl" }} size={"6xl"}>Noticias</Heading>
            </HStack>
            <Box textAlign={{ base: "center", md: "left" }} w={{ base: "100%", md: "2/12", lg: "2/12" }}><Link href="https://lamostradevalencia.com/noticias/" target='blank'><Button>Más noticias</Button></Link></Box>
            <Text textAlign={{ base: "center", md: "left" }} w={{ base: "100%", md: "5/12", lg: "6/12" }} fontFamily={"EB Garamond"} letterSpacing={"serif"}>Todas aquellas instituciones y/o entidades que, de manera directa o  indirecta, organizan, participan, colaboran o brindan su apoyo para la  realización, promoción y éxito de nuestro festival.</Text>
          </Box>
        </Box>

        {/** Element */}
        <Box borderTop={"1px solid black"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}  >
          {news?.map((item, index) => (
            <Box key={index} w={"100%"} px={"8.5%"} py={{ base: "2rem", md: "0" }} display={"flex"} alignItems={"center"} flexDir={{ base: "column", sm: "row" }} gap={"6"} borderBottom={"1px solid black"}>
              <Box display={{ base: "none", md: "block" }} w={{ base: "0", md: "3/12", xl: "2/12" }} bgImage={`url(${item.image})`} h={"200px"} bgSize={"cover"} bgPos={"center"} />
              <Box w={{ base: "100%", sm: "9/12" }}  >
                <Heading as={"h4"} size={"sm"} textAlign={{ base: "center", sm: "left" }}>{item.title}</Heading>
                <Text w={{ base: "100%", sm: "9/12" }} fontFamily={"EB Garamond"} textAlign={{ base: "center", sm: "left" }} letterSpacing={"serif"}>{item.description}</Text>
              </Box>
              <Link href={item.link} target="blank"><Button w={{ base: "" }}>Leer más</Button></Link>
            </Box>
          ))}

        </Box>
      </Box>

      {/* Banner about */}
      <Box display={"flex"} position={"relative"} textAlign={"center"} whiteSpace={"nowrap"} >

        <LoopText repetitions={5} element={
          <Box display={"flex"} gap={"5"} py={"3rem"}>
            <Heading as={"h3"} fontSize={"3xl"} fontWeight={"light"} fontStyle={"italic"} display={"flex"}>
              <Link>About La Mostra de València / </Link>
            </Heading>
          </Box>
        } />


      </Box>


      {/* TILES */}
      <Box>
        <Image src="/img/elements/element-tiles.png"></Image>
      </Box>

      {/* AWARDS */}
      <Box w={"8/12"} gap={"5"} textAlign={"center"} py={"28"} mx={"auto"} display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Heading as={"h2"} size={"6xl"}>PREMIOS</Heading>
        <Text fontSize={"sm"} fontFamily={"EB Garamond"} letterSpacing={"serif"}>Los diferentes premios otorgados por el festival “La Mostra de Valencia”.</Text>
        <Text fontSize={"2xl"} fontFamily={"EB Garamond"} letterSpacing={"serif"} fontWeight={"medium"} color={"brand.blue"}>Palmera de oro • Palmera de plata • Premio especial del jurado • Premio a la mejor dirección • Premio a la mejor interpretación masculina • Premio a la mejor interpretación femenina • Premio a la mejor fotografía •  Premio a la mejor banda sonora original • Premio al mejor guión • Palmera de honor • Premio Á PUNT</Text>
      </Box>
    </Box>
  )
}

export default App
