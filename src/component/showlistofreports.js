import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


export default function List({data,key}){
    
    
        var redirect=useNavigate()
      
      

    
     return(
        <>
        <HStack key={key}fontStyle={'italic'} ml='80px'w={'400'} p='30px' background={'blue.600'} flexWrap={'wrap'} textColor='black' borderRadius={'10px'} border='1px' borderRight={'none'}>
            
           
            
            <Box>
        <Text >Reports</Text>
       < Flex h='50px' border='2px' 
        flexWrap='wrap' >
                <Text w='150px'>{"Name"}</Text>
                <Text w='30px'>{'Age'}</Text>
                <Text w='100px'>{"Mobile"}</Text>
                <Text w='100px'>{"Date"}</Text>
                <Spacer></Spacer>
<Text>
    Download
</Text>
            </Flex>
        {
            data.map(e=>{
                {console.log(e)}
           return <HStack onClick={()=>redirect(`../rep/${e._id}`)}  h='50px' p='3px' fontWeight={'500'} borderRadius={'10px'} border='1px' flexWrap='wrap' borderRight={'none'}>
                <Text w='150px' maxWidth={'150px'}>{e.name}</Text>
                <Text w='30px'>{e.age}</Text>
                {/* <Text w='100px'>{e.mobile}</Text> */}
                <Spacer></Spacer>
<Image h='40px' src='./deen.gif'  borderRadius='5px'></Image>
            </HStack>
            })
        }
        </Box>
        </HStack>
        </>
     )
}