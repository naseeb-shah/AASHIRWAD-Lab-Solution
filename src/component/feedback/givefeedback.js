import { Box, Button, Center, CircularProgress, CircularProgressLabel, Image, Input, Text } from '@chakra-ui/react';

import {
    Alert, AlertDescription, AlertIcon,
    AlertTitle,
    CloseButton, Textarea, useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";

import base from '../axios';

export default function Feedback(){

    const [wait,fin]=useState("none")
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })
    

 const [re,se]=useState({
    "name":'',
   
  'msg':'',
    'number':'',
   

 })

const handle=(e)=>{

    se({...re,[e.target.name]:e.target.value})

}

const sai=()=>{
    console.log(re)
 for(let i in  re){
    console.log(re[i])
if(re[i]==''){
alert("Please fill all Details")
return
}
 }
 fin('block')
 
//  const url='http://localhost:4000/'
 base.post(`/feed`, {
  
   
        "type":"Feed",
        "name":re.name,
        "mobile":re.number,
        "msg":re.msg
    }
 
)
    .then((x) => x)
    .then((x) => {
      
      fin("none")
        onOpen()

    
      for(let i in  re){
        
    re[i]=''
    
    }
      console.log(x)
   }).catch(e=>console.log(e))






}
    return (
        <>
<Center>
    <Box  textColor={'white'} p='30px' w='max-content' border={'1px'} mt='50px' borderRadius={'15px'}  borderColor='blackAlpha.50' bg='facebook.400'>
        <Box>
            <Text fontSize={'25px'}> Name (नाम )</Text>
            <Input value={re.name} name='name'h='35px'type={'text'} onChange={handle} autoFocus></Input>
        </Box>
        
        <Box>
            <Text fontSize={'25px'}> Mobile No.(मोबाइल न.)</Text>
            <Input value={re.number} name='number'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}>Feedback</Text>
            <Textarea value={re.msg} name='msg'h='35px'type={'text'} onChange={handle}></Textarea>
        </Box>
     
     


<Center>
<CircularProgress  value={60} color='blue.600' display={wait} position='fixed' size={'150px'} left='40%'  isIndeterminate>
  <CircularProgressLabel><Image ocapcity='.5'  w='113px'h='110px' src='/logo.jpg'mt='-54px'ml='17px' position={'absolute'} borderRadius={'50%'} ></Image></CircularProgressLabel>
</CircularProgress>
<Button mt='20px' variant={'outline'} onClick={sai}>
   Submit
</Button>

</Center>
{isVisible?<Alert bg='blue' color={'white'} status='success' position={'fixed'}
mt='-20%'
w='400px'
>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your Request has been received
          and respond within the next 4 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>:""}

    </Box>
</Center>

        
        </>
    )
}