import { Heading, Button, HStack, Text, Input, Box, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import base from '../axios'

import Allrepohelper from "./allreporthelpres"

export default  function Allrepo(){

var [all,rep]=useState({data:[]})
var [name,sname]=useState('')

useEffect(()=>{
 
    base.get('/report/allreport')
    .then(x=>rep({data:x.data.reports}))
}
,[])

return(
    <>
    <Box >
<HStack mt='50px' w='600px'>
<Text fontSize={'25px'}w='150px' fontWeight={500}>Search Report</Text>
    <Input onChange={(e)=>sname(e.target.value)} value={name} bg='white' borderColor={'black'} border={'1px'}></Input>
<Button colorScheme={'blue'} onClick={()=>{
    var result=all.data.filter(e=>e.name==name)
    result.length>0?rep({data:result}):alert("Not Found !")

}}> Search </Button>
</HStack>
      
      <HStack overflowWrap={'hidden'} mt='50px' backgroundColor={'white'} color='whatsapp'p='5px' border={'2px'}>

<Text w='100px' borderLeft={'2px'}p='5px' paddingLeft={'4px' }   >
    Name
</Text>
<Text w='50px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'  } >
    Age
</Text>

<Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}   >
    Date
</Text>

<Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}   >
Reference
</Text>
<Text w='70px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}   >
    Gender
</Text><Text w='170px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}   >
    Mobile
</Text>

<Text colorScheme={'whatsapp'}>
Payment
</Text>
<Text w='170px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    {"sbumit by"}
</Text>

</HStack>
    {all.data.map((e,i)=><Allrepohelper element={e} key={i+1}/>)}
</Box>
    {/* { JSON.stringify(all)} */}
    </>
)

}