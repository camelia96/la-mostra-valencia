import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import Film from './Film.tsx'
import { Box, ChakraProvider, createSystem, defaultConfig, defineConfig, defineRecipe, Heading, HStack, Image } from "@chakra-ui/react"
import Footer from './components/Footer.tsx'
import Nav from './components/Nav.tsx'
import LoopText from './components/LoopText.tsx'
import About from './About.tsx';
import { EXTRALARGE, LARGE, MEDIUM, SMALL } from './helpers/constants.ts';
import Sections from './Sections.tsx';


const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "regular",
    letterSpacing: "sans",
    borderRadius: "4xl",
    border: "1px solid black",
    _hover: {
      color: "brand.white",
    },
  },

  variants: {
    size: {
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
    },
    colorScheme: {
      custom: { color: "brand.black", background: "transparent" }
    }
  },
  defaultVariants: {
    colorScheme: "custom"
  }

})


const headingRecipe = defineRecipe({
  variants: {
    size: {
      sm: { fontSize: "sm", fontFamily: "DM Sans", fontWeight: "bold", letterSpacing: "sans" },
      lg: { fontSize: "lg", fontFamily: "DM Sans", fontWeight: "semibold", letterSpacing: "sans" },
      xl: { fontSize: "xl", fontFamily: "DM Sans", fontWeight: "semibold", letterSpacing: "sans" },
      "2xl": { fontSize: "2xl", fontFamily: "DM Sans", fontStyle: "italic", fontWeight: "extra", letterSpacing: "sans" },
      "3xl": { fontSize: "3xl", fontFamily: "EB Garamond", fontStyle: "italic", fontWeight: "regular", letterSpacing: "serif" },
      "4xl": { fontSize: "4xl", fontFamily: "DM Sans", fontWeight: "semibold", letterSpacing: "sans" },
      "5xl": { fontSize: "5xl", fontFamily: "DM Sans", fontWeight: "semibold", letterSpacing: "sans" },
      "6xl": { fontSize: "6xl", fontFamily: "DM Sans", fontWeight: "semibold", letterSpacing: "sans" },
    },
  },
})


const customConfig = defineConfig({
  globalCss: {
    body: {
      fontFamily: "DM Sans",
      fontWeight: "regular",
      letterSpacing: "sans",
    },
    p: {
      fontFamily: "EB Garamond",
      fontWeight: "regular",
      letterSpacing: "serif",
    }
  },
  theme: {
    breakpoints: {
      sm: SMALL + "px",
      md: MEDIUM + "px",
      lg: LARGE + "px",
      xl: EXTRALARGE + "px",
    },

    tokens: {
      colors: {
        brand: {
          gray: { value: "#D9D9D9" },
          mediumGray: { value: "7C7C7C" },
          black: { value: "#000000" },
          white: { value: "#FFFFFF" },
          red: { value: "#F7321E" },
          pink: { value: "#FAC2D3" },
          blue: { value: "#1B6AE3" },
          yellow: { value: "#FCDB39" },
        },
      },
      fontSizes: {
        xs: { value: "16px" },
        sm: { value: "18px" },
        md: { value: "20px" },
        lg: { value: "23px" },
        xl: { value: "26px" },
        "2xl": { value: "30px" },
        "3xl": { value: "40px" },
        "4xl": { value: "60px" },
        "5xl": { value: "70px" },
        "6xl": { value: "90px" },
      },
      fontWeights: {
        extra: { value: "200" },
        light: { value: "300" },
        regular: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
      },
      letterSpacings: {
        sans: { value: "-6%" },
        serif: { value: "-4%" }
      },

    },
    recipes: {
      button: buttonRecipe,
      heading: headingRecipe,/* 
      link: linkRecipe */
    },
  },
})

const system = createSystem(defaultConfig, customConfig)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <BrowserRouter>

        <Box bg="brand.gray" h={"5vh"} >
          <LoopText repetitions={4} element={
            <HStack p="5" fontWeight="regular" w={"100%"} px={"40px"}>
              <Image src="/img/elements/element-eye.svg" w="2rem"></Image>
              <Heading size={"sm"} fontWeight={"medium"} >La Mostra de València</Heading>
              <Image src="/img/elements/element-palm-color.svg" w="2rem"></Image>
              <Heading size={"sm"} fontWeight={"medium"} >24 oct - 3 nov, 2024</Heading>
            </HStack>} />
        </Box>
        <Nav responsive={true} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/film/:id?" element={<Film />} />
          <Route path="/about" element={<About />} />
          <Route path="/sections/:id?" element={<Sections />} />
        </Routes>
        <Footer /></BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
