import { Accordion, Box, Button, Heading, HStack, Image, Span, Text, Link } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoopText from './components/LoopText';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { FilmData } from './interfaces/interfaces';
import { EXTRALARGE, LARGE, MEDIUM, SMALL } from './helpers/constants';


const films: FilmData[] = [
    {
        id: 1,
        cover: "Backstage-1.png",
        origin: "Marruecos",
        title: "Backstage",
        synopsis: "Tras una accidentada representación que provoca tensiones entre sus miembros, una compañía de danza sufre una avería en el autobús en que viaja durante la noche y se encuentra inesperadamente aislada en medio de un bosque.",
        year: 2023,
        duration: 102,
        format: "Color",
        section: "Sección oficial",
        images: ["Backstage-1.png", "Backstage-2.png", "Backstage-3.png"],
        technicalData:
            [
                { id: 1, title: "Fotografía", children: ["Martin Dicicco"] },
                { id: 2, title: "Dirección, guion, montaje y música", children: ["Iva Radivojević"] },
                { id: 3, title: "Producción", children: ["Set Sail Films", "Ivaasks Films"] },
                { id: 4, title: "Reparto", children: ["Natalija Ilincic", "Anton Augustinov", "Slavica Bajceta", "Danica Maksimovic", "Dunja Vladisavljevic", "Mila Drobnjak"] },
                { id: 5, title: "Distribución", children: ["Lights On"] },
                { id: 6, title: "Música", children: ["Steve Shehan"] }
            ],
        screenings: [
            {
                value: "1",
                day: "Lunes 28",
                hour: "11:00",
                description: "Proyección de prensa abierta al público. Con la presencia de los directores, Afef Ben Mahmoud y Khalil Benkirane",
                room: "Babel Sala 1"
            },
            {
                value: "2",
                day: "Miércoles 30",
                hour: "20:00",
                description: "Con la presencia de los directores, Afef Ben Mahmoud y Khalil Benkirane",
                room: "Babel Sala 4"
            },
            {
                value: "3",
                day: "Jueves 31",
                hour: "16:00",
                room: "Babel Sala 4"
            },
        ]

    },
    {
        id: 2,
        origin: "Serbia, EEUU",
        cover: "When-the-phone-rang-1.jpeg",
        title: "When the phone rang",
        synopsis: "Una llamada telefónica borra de la mente de una niña de once años todo rastro de su país, su historia y su identidad, y oculta su existencia en los libros, películas y recuerdos de los nacidos antes de 1995.",
        year: 2024,
        duration: 73,
        format: "color",
        section: "Sección oficial",
        images: ["When-the-phone-rang-2.jpg", "When-the-phone-rang-3.jpg", "When-the-phone-rang-4.jpg"],
        screenings: [
            {
                value: "1",
                day: "Domingo 27",
                hour: "16:00",
                description: "Proyección de prensa abierta al público. Con la presencia de la directora, Iva Radivojević",
                room: "Babel Sala 1"
            },
            {
                value: "2",
                day: "Lunes 28",
                hour: "20:00",
                description: "Con la presencia de la productora, Andrijana Sofranić Šućur",
                room: "Babel Sala 1"
            },
            {
                value: "3",
                day: "Martes 29",
                hour: "20:00",
                room: "Babel Sala 4"
            },
        ],
        technicalData: [
            { id: 1, title: "Fotografía", children: ["Martin Dicicco"] },
            { id: 2, title: "Dirección, guion, montaje y música", children: ["Iva Radivojević"] },
            { id: 3, title: "Producción", children: ["Set Sail Films", "Ivaasks Films"] },
            { id: 4, title: "Reparto", children: ["Natalija Ilincic", "Anton Augustinov", "Slavica Bajceta", "Danica Maksimovic", "Dunja Vladisavljevic", "Mila Drobnjak"] },
            { id: 5, title: "Distribución", children: ["Lights On"] },
        ]


    },
];

let technicalDataFrontEnd: { id: number, color: string }[] = [
    { id: 1, color: "red" },
    { id: 2, color: "pink" },
    { id: 3, color: "blue" },
    { id: 4, color: "black" },
    { id: 5, color: "yellow" },
    { id: 6, color: "gray" },
]
let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: SMALL,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: MEDIUM,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: LARGE,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true
            }
        },
        {
            breakpoint: EXTRALARGE,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true
            }
        },

    ]

};
function Film() {
    // Get id from URL
    const {id, url} = useParams();
console.log(url)
    const [error, setError] = useState({ state: false, message: "" });
    const [film, setFilm] = useState<FilmData>();

    useEffect(() => {

        let filmDatabase;

        if (!id || isNaN(parseInt(id))) {
            setError({ state: true, message: "El id de la película seleccionada no es correcto" });
        } else {
            filmDatabase = films.find((film) => film.id == parseInt(id));

            if (!filmDatabase) {
                setError({ state: true, message: "No se ha encontrado la película" });
            } else {
                setFilm(filmDatabase)
            }
        }


    }, [id])


    return (
        <Box overflowX={"hidden"}>
            {error.state ?
                (
                    <Box w={"100%"} display={"flex"} justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
                        <Box bgColor={"brand.yellow"} w={"100%"} h={"2rem"}></Box>
                        <Box display={"flex"} flexDir={"column"} w={"10/12"}  px={"1rem"} h={"20rem"} alignItems={"center"} justifyContent={"center"} gap={"5"}>
                            <Heading size={"2xl"} fontWeight={"bold"}>ERROR</Heading>
                            <Heading size={"xl"} fontWeight={"regular"}>{error.message}</Heading>
                            <Link href='/'><Button>Volver</Button></Link>
                        </Box>
                    </Box>
                )
                :
                (<Box>
                    {/** Hero */}
                    <Box w={"100%"} display={"flex"} h={{ base: "85vh" }} flexDir={{ base: "column-reverse", md: "row" }} >
                        <Box h={{ base: "50vh", md: "inherit" }} w={{ base: "100%" }} bgImage={`url(/img/films/${film?.cover})`} bgSize={"cover"} bgPos={"center"} />
                        <Box textAlign={{ base: "center", md: "right" }} w={{ base: "100%" }} bgColor={"brand.gray"} display={"flex"} flexDir={"column"} alignItems={{ base: "center", md: "flex-end" }} justifyContent={{ base: "center", md: "flex-end" }} p={{ base: "1rem", md: "25px" }} gap={"10"}>
                            <Link w={{ base: "100%" }} display={"flex"} justifyContent={"flex-end"} href="https://www.reservaentradas.com/"><Button w={{ base: "100%", md: "6/12" }}  >Comprar entradas</Button></Link>
                            <Image w={{ base: "75%", sm: "6/12" }} src='/img/elements/element-eye.svg' />
                            <Heading w={"100%"} size={"6xl"} fontSize={{ base: "3xl", sm: "3xl", md: "6xl" }}>{film?.title}</Heading>
                        </Box>
                    </Box>

                    {/* Film data */}
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mx={"1.5rem"} mt={"5rem"} pb={"0"} flexDir={"column"}>
                        <Box w={"10/12"} display={"flex"} justifyContent={"space-between"} gap={"10"} flexDir={{ base: "column", md: "row" }} >
                            <Box w={{ base: "100%", md: "6/12" }}>
                                <HStack mb={"4"} display={"flex"} alignItems={"center"}>
                                    <Image h={"2rem"} src='/img/elements/element-circle.png'></Image>
                                    <Heading size={"xl"}>Sinopsis</Heading>
                                </HStack>
                                <Text fontFamily={"EB Garamond"} letterSpacing={"serif"}>{film?.synopsis}</Text>
                            </Box>
                            <Box w={{ base: "100%", md: "6/12" }}>
                                <Box display={"flex"} gap={{ base: "1", md: "10" }} w={"100%"} justifyContent={{ base: "center", sm: "space-between", md: "flex-start" }} flexDir={{ base: "column", sm: "row" }} pb={{ md: "2" }} p={{ base: "4", sm: "inherit" }} borderBottom={"1px solid black"} alignItems={"center"}>
                                    <Heading size={"xl"}>Origen</Heading>
                                    <Text fontSize={"26px"}>{film?.origin}</Text>
                                </Box>
                                <Box display={"flex"} gap={{ base: "1", md: "10" }} w={"100%"} justifyContent={{ base: "center", sm: "space-between", md: "flex-start" }} flexDir={{ base: "column", sm: "row" }} pb={{ md: "2" }} p={{ base: "4", sm: "inherit" }} borderBottom={"1px solid black"} alignItems={"center"}>
                                    <Heading size={"xl"}>Duration</Heading>
                                    <Text fontSize={"26px"}>{film?.duration}'</Text>
                                </Box>
                                <Box display={"flex"} gap={{ base: "1", md: "10" }} w={"100%"} justifyContent={{ base: "center", sm: "space-between", md: "flex-start" }} flexDir={{ base: "column", sm: "row" }} pb={{ md: "2" }} p={{ base: "4", sm: "inherit" }} borderBottom={"1px solid black"} alignItems={"center"}>
                                    <Heading size={"xl"}>Year</Heading>
                                    <Text fontSize={"26px"}>{film?.year}</Text>
                                </Box>
                                <Box display={"flex"} gap={{ base: "1", md: "10" }} w={"100%"} justifyContent={{ base: "center", sm: "space-between", md: "flex-start" }} flexDir={{ base: "column", sm: "row" }} pb={{ md: "2" }} p={{ base: "4", sm: "inherit" }} borderBottom={"1px solid black"} alignItems={"center"}>
                                    <Heading size={"xl"}>Format</Heading>
                                    <Text fontSize={"26px"}>{film?.format}</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w={"10/12"} mt={"5rem"}>
                            <Slider {...settings} >
                                {film?.images.map((image, index) => (
                                    <Box key={index} w={"100%"}>
                                        <Box w={{ base: "100%", md: "11/12" }} h={"50vh"} bgSize={"cover"} bgPos={"center"} bgImage={`url(/img/films/${image})`}></Box>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>



                    </Box>
                    <Box bgColor={"brand.pink"} py={"1rem"} mt={"-5px"}>
                        <LoopText repetitions={5} element={
                            <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} >
                                <Heading size={"lg"} as={"h3"} display={"flex"} >{film?.section}</Heading>
                                <Image h={"1.2rem"} mx={"5rem"} src='/img/elements/element-star.png'></Image>
                            </Box>
                        } />
                    </Box>

                    {/* Projections */}
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mx={"1.5rem"} py={"5rem"} flexDir={"column"}>
                        <Box w={"10/12"} display={"flex"} flexDir={"column"} justifyContent={"space-between"} gap={"10"} >

                            <HStack w={"100%"}>
                                <Image w={{ base: "1/12", lg: "4rem" }} src="/img/elements/element-play.png" />
                                <Heading w={{ base: "10/12", md: "10/12", lg: "11/12" }} as={"h2"} size={"6xl"} fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }} lineBreak={{ base: "" }}>Proyecciones</Heading>
                            </HStack>
                            <Box mb={"3rem"}>
                                <Accordion.Root collapsible >
                                    {film?.screenings.map((item, index) => (
                                        <Accordion.Item pb={"3rem"} mt={"-1px"} borderBottom={"1px solid black"} fontSize={"23px"} key={index} value={item.value}>
                                            <Accordion.ItemTrigger pt={"3rem"} borderTop={"1px solid black"} borderRadius={"0"}>
                                                <Text flex="1" fontWeight={"black"} ><Span fontWeight={"regular"}>{item.day}</Span>{item.hour}</Text><Span fontFamily={"EB Garamond"} fontWeight={"regular"} fontStyle={"italic"} letterSpacing={"serif"}>{item.room}</Span>
                                                <Accordion.ItemIndicator />
                                            </Accordion.ItemTrigger>
                                            <Accordion.ItemContent >
                                                <Accordion.ItemBody><Text color={"brand.mediumGray"}>{item.description}</Text></Accordion.ItemBody>
                                            </Accordion.ItemContent>
                                        </Accordion.Item>
                                    ))}
                                </Accordion.Root>
                            </Box>

                            {/* Film TECHNICAL data */}
                            <Box display={"flex"} w={{ base: "100%" }} flexWrap={{ base: "wrap", lg: "nowrap" }} justifyContent={"flex-start"} mb={"2rem"} textAlign={"center"}>

                                {film?.technicalData.map((item, indexItem) => (
                                    <Box key={indexItem} w={{ base: "100%", sm: "6/12", md: "4/12", lg: "100%" }} pb={"2rem"} >
                                        <Box w={{ base: "100%" }} h={"1rem"} bgColor={`brand.${technicalDataFrontEnd.find((data) => data.id == item.id)?.color}`}></Box>
                                        <Box px={"1rem"}>
                                            <Heading>{item.title}</Heading>
                                            <Box>{item.children.map((child, indexChild) => (
                                                <Text fontFamily={"EB Garamond"} letterSpacing={"serif"} key={indexChild}>
                                                    {child}
                                                </Text>))}
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}


                            </Box>
                        </Box>
                    </Box>
                </Box>)}


        </Box>
    )
}

export default Film
