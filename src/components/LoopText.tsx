import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import horizontalLoop from "@/helpers/horizontalLoop";


export default function LoopText({ repetitions, element }: { repetitions: number, element: React.ReactNode }) {

    let repetitionsArray = Array.from({ length: repetitions }, (_, i) => (
        <Box key={i} className="loop-element">{element}</Box>
    ));

    useGSAP(() => {

        const scrollingText = gsap.utils.toArray('.loop-element') as Element[] as HTMLElement[];

        const tl = horizontalLoop(scrollingText, {
            repeat: -1,
            paused: false,
            speed: 0.3,
            snap: true,
            paddingRight: 300,
        });

    })


    return (
        <Box overflow={"hidden"} height={"full"} display={"flex"}  whiteSpace={"nowrap"} alignItems={"center"}  >
            {repetitionsArray}
        </Box>
    )
}