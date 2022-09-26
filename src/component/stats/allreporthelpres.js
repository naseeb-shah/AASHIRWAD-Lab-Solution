import { Button, HStack, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

import base from '../axios'

export default  function Allrepohelper({element,fun}){

    
const s=cleanDate(element.date)
    function cleanDate(d) {return new Date(+d.replace(/\/Date\((\d+)\)\//, '$1'));}


var sai=false
const pay=(id)=>{

  if(sai)
   window.location.reload()
  
 
 
     base.delete(`report/allreport/${id}`).then(x=>console.log(x)).catch(e=>console.log(e))
    
 }

// console.log(element)

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
    
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {JSON.stringify(s).substring(1,11)}
        </Text>
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.reference}
        </Text>
       
        <Text w='170px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.techname}
        </Text>

        <Text w='120px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.mobile}
        </Text>
        <Button colorScheme={sai?'whiteAlpha':'red'} onClick={(e)=>{
            pay(element._id)
            sai=true
        }
            
        } disabled={sai}>
       Delete
        </Button>
    
       
    </HStack>
   
    </>
)

}