import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import SingleTest from "./singletest"
import  './test.css'









export default function Test({test,g}){
const [index,sindex]=useState(0)


    

 
    return(
        <>
        
         <Flex ><Button position={'fixed'} left='0'id="pre" onClick={()=>{ if(index<g.length-1)sindex(index+1)}} colorScheme='facebook' >Pre report</Button><Spacer></Spacer><Button id="next" onClick={()=> {if(index>0)sindex(index-1)}} position={'fixed'} right='0' colorScheme={'facebook'}>Next report</Button></Flex> 
  <Box fontStyle={'italic'} 

  >
    <Image id="b" src='/back.png' position={'fixed'} display='none'  opacity='0.3'></Image>
   
    <Center>
  <Text  fontWeight={600}  fontSize='20px'>{g[index]}</Text></Center>
    <SingleTest test={test[g[index]]} g={Object.keys(test[g[index]])}/>
  </Box>
        {/* <Heading> {JSON.stringify(test[g[index]])}</Heading>
        <Heading>{index}</Heading>
        <Heading>{g.length}</Heading> */}
        </>
    )
}