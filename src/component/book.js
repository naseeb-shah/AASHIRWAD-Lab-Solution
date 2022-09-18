
import {  Alert,
    AlertIcon,
    AlertTitle,
    CloseButton,
    useDisclosure,
    AlertDescription,Heading,Box,Select, FormLabel, Input,HStack ,Flex, Button,Text, VStack, Center} from "@chakra-ui/react";
import { useState } from "react";



export default function Book(){
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })
    

 const [re,se]=useState({})

const handle=(e)=>{

    se({...re,[e.target.name]:e.target.value})
console.log(re)
}

const sai=()=>{
 onOpen()
}
    return (
        <>
<Center>
    <Box  textColor={'black'} p='30px' w='max-content' border={'1px'} mt='50px' borderRadius={'15px'}  backgroundColor='blue.600'>
        <Box>
            <Text fontSize={'25px'}> Name (नाम )</Text>
            <Input  name='pname'h='35px'type={'text'} onChange={handle} autoFocus></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}>Father Name( पिता का नाम )</Text>
            <Input  name='fname'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}> Mobile No.(मोबाइल न.)</Text>
            <Input  name='Number'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
        <Box>
            <Text fontSize={'25px'}>Landmark(नजदीक स्थल )</Text>
            <Input  name='Number'h='35px'type={'text'} onChange={handle}></Input>
        </Box>
    

<Box>
            <Text fontSize={'25px'}> Select Village(गांव )</Text>

<Select name='vill' placeholder='Select option' onChange={handle}>
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
{isVisible?<Alert status='success' position={'fixed'}
mt='-20%'
w='400px'
>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
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