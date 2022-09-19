import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer } from "@chakra-ui/react"

import Test from "./test"







export default function Deen({test,g}){


console.log(g)
    return(
        <>
        <Test test={test} g={g}/>        
        </>
    )
}