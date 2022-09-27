import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer } from "@chakra-ui/react"
import { useEffect, useState ,useMemo} from "react"

import SingleTest from "./singletest"
import  './test.css'


import Helperprint from "./printreport"






export default function Test({test,g}){
const [index,sindex]=useState(0)


var  addinfo=useMemo(()=><Helperprint key={g[index]} test={g[index]}></Helperprint>)
    

 
    return(
        <>
        
         <Flex ><Button position={'fixed'} left='0'id="pre" onClick={()=>{ if(index<g.length-1)sindex(index+1)}} colorScheme='facebook' >Pre report</Button><Spacer></Spacer><Button id="next" onClick={()=> {if(index>0)sindex(index-1)}} position={'fixed'} right='0' colorScheme={'facebook'}>Next report</Button></Flex> 
  <Box fontStyle={'italic'} 
  bg='whiteAlpha.700'

  >
    <Image id="b" src='/back.png' position={'fixed'} display='none'  opacity='0.3'></Image>
   
    <Center>
  <Text  fontWeight={600}  fontSize='20px'>{g[index]}</Text></Center>
 
  {/* <Text border={'1px'}w='max-content' pr='5px' pl='5px'>Sample Type  : {g[index]=="ESR"?"Whole Body":''}</Text> */}
    <SingleTest test={test[g[index]]} g={Object.keys(test[g[index]])}/>
  </Box>
  
        {/* <Heading> {JSON.stringify(g[index])}</Heading> */}
        {addinfo}
        {/* {JSON.stringify(g[index])} */}
        
   
        
        </>
    )
}