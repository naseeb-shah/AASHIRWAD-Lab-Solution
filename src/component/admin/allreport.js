import { Heading, Button, HStack, Text, Input, Box, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"


import Allrepohelper from "./allreporthelpres"

export default  function Allrepo(){

var [all,rep]=useState([])

useEffect(()=>{
    // -   ('http://localhost:4000/report/allreport')
    fetch('https://labcare.vercel.app/report/allreport')
.then(x=>x.json())
    .then((x)=>rep(x.reports))

},[])


return(
    <>
    <Box >
      <HStack overflowWrap={'hidden'} mt='100px' backgroundColor={'white'} color='whatsapp'p='5px' border={'2px'}>

<Text w='100px' borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    Name
</Text>
<Text w='50px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    Age
</Text>
<Text w='250px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    Address
</Text>
<Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    Date
</Text>
<Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    Time
</Text>
<Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
Reference
</Text>
<Text w='70px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    Gender
</Text>

<Text colorScheme={'whatsapp'}>
Payment
</Text>
<Text w='170px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
    {"sbumit by"}
</Text>

</HStack>
    {all.map((e,i)=><Allrepohelper element={e} key={i+1}/>)}
</Box>
    {/* { JSON.stringify(all)} */}
    </>
)

}