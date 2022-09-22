import { Heading, Button, HStack, Text, Input, Box, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"




export default  function Allrepohelper({element}){

var [all,rep]=useState([])




return(
    <>
    {/* {JSON.stringify(element)} */}
    <HStack backgroundColor={'facebook.500'} color='white'p='5px' borderBottom={'2px'} >

        <Text w='100px' borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.name}
        </Text>
        <Text w='50px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.age }
        </Text>
        <Text w='250px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'} xoverflow='scroll'>
            {element.address}
        </Text>
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.date}
        </Text>
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.time}
        </Text>
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.reference}
        </Text>
        <Text w='70px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.gender}
        </Text>
       
        <Text w='120px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.mobile}
        </Text>
        <Button colorScheme={'whatsapp'}>
        Payment
        </Button>
        <Text w='170px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {"sbumit by"}
        </Text>

    </HStack>
   
    </>
)

}