import { Heading, Button, HStack, Text, Input, Box, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



export default  function Stahome(){

var [all,rep]=useState([])


return(
    <>
    <HStack p='100px' backgroundColor={'facebook.300'}>
        <Text>Paid</Text><br></br>
        <Text>Credit</Text>
    <CircularProgress value={40} color='green.400'size='200px'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
    </HStack>
  
    </>
)

}