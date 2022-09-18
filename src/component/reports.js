import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer } from "@chakra-ui/react"

 import { useParams } from "react-router-dom"


export default function Report(){

     var {id }= useParams()

 return (
 <Box>
<Button onClick={()=>window.print()} >
Print
</Button>
    {id}
 </Box>
    
 )


}