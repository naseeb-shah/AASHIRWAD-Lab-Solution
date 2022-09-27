
import {  Alert,
    AlertIcon,
    AlertTitle,
    CloseButton,
    useDisclosure,
    AlertDescription,Heading,Box,Select, FormLabel, Input,HStack ,Flex, Button,Text, VStack, Center} from "@chakra-ui/react";
import { useState } from "react";

import base from './axios'

export default function Book(){
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })
    

 const [re,se]=useState({
    "name":'',
    "fname":'',
    'landmark':'',
    'number':'',
    "vill":'',

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
 const url='https://labcare.vercel.app'
//  const url='http://localhost:4000/'
 base.post(`/feed`, {
  
   
        "type":"Sample",
        "name":re.name,
        "mobile":re.number,
        "address":`${re.fname} ,${re.landmark},${re.vill}`
    }
 
)
    .then((x) => x)
    .then((x) => {
      
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
    <Box  textColor={'white'} p='30px' w='max-content' border={'1px'} mt='50px' borderRadius={'15px'}  backgroundColor='blue.600'nack
    
   
    backgroundColor='blackAlpha.400'
    // backgroundSize='cover'
    
    >
        <Box>
            <Text fontSize={'25px'}> Name (नाम )</Text>
            <Input value={re.name} name='name'h='35px'type={'text'} onChange={handle} autoFocus></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}>Father Name( पिता का नाम )</Text>
            <Input value={re.fname} name='fname'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}> Mobile No.(मोबाइल न.)</Text>
            <Input value={re.number} name='number'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}>Landmark(नजदीक स्थल )</Text>
            <Input value={re.landmark} name='landmark'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
    

<Box>
            <Text fontSize={'25px'}> Select Village(गांव )</Text>

<Select value={
    re.vill
} name='vill' placeholder='Select option' onChange={handle}  color='black'>
  <option  value='Taharpur Kalan'>Taharpur Kalan</option>
  <option value='Gohra Bani (236)'>Gohra Bani (236)</option>
  <option value='Jogiwara (228)'>Jogiwara (228)</option>
  <option value='Lalhari Kalan (226)'>Lalhari Kalan (226)</option>
  <option value='Lalhari Khurd (224)'>Lalhari Khurd (224)</option>
  <option value='Manakpur-1'>Manakpur-1</option>
  <option value='Tahri (27)'>Tahri (27)</option>
  <option value='Jogiwara (228)'>Jogiwara (228)</option>
  <option value='Ibrahimpur (29)'>Ibrahimpur (29)</option>
  <option value='Ramgarh Alias Arjun Majra (186)'>Ramgarh Alias Arjun Majra (186)
</option>
</Select>
    </Box>
<Center>
<Button mt='20px' variant={'outline'} onClick={sai}>
    Request to Collect Sample
</Button>

</Center>
{isVisible?<Alert bg='blackAlpha.600 ' status='success' position={'fixed'}
mt='-20%'
w='400px'
>
      <AlertIcon />
      <Box >
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