import { Heading,Box, HStack ,Image,Text,
    Flex,Button, Center} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


export default  function Topbooked(){
 var deensahh=useNavigate()
const gobook=()=>{
deensahh('/book')
}




    return <>
    <Image src='/sai.jpg' m='auto' borderRadius={'15px'}>

</Image>

    <Box ml='10%' mt='30px' >
        
<Heading fontSize={'30px'} textColor='green.400'>Top Booked Medical Tests
</Heading>
<Flex flexWrap={'wrap'} mt='30px'>
<Box  border={'2px'} w='330px' p='10px' borderRadius={'15px'} borderColor='teal'>
<HStack m='10px'>
<Image  h='70px'src='https://www.practo.com/tests/public/icons/testprofiles/liver_profile.png'></Image>
<Text fontWeight={'500'}   fontSize='25px'>
    Liver Profile
</Text>

</HStack>
<Box p= '14px' borderRadius={'15px'}  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey'  >
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Gamma Glutamyl Transferase

</Text>
<Text fontSize={'15px'} >
Also known as Gamma Glutamyl Transpeptidase Blood


</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Total Billirubin

</Text>
<Text fontSize={'15px'}>
Also known as Billirubin Total Blood
</Text>
</Box>
{/* <Flex> */}
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Ast Test
</Text>
<Text fontSize={'15px'}>
Also known as SGOT
</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Ast Test
</Text>
<Text fontSize={'15px'}>
Also known as ALkaline Phosphatase
</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
   Albumin Test 
</Text>
<Text fontSize={'15px'}>
Also known as   Albumin Test 
</Text>
</Box>
<Center mt='10px'>
<Button colorScheme={'teal'} onClick={gobook}>
    Book Now
</Button>
</Center>
</Box>
{/* ------------------------ */}
<Box  border={'2px'} w='330px' p='10px' borderRadius={'15px'} borderColor='teal'>
<HStack m='10px'>
<Image  h='70px'src='https://www.practo.com/tests/public/icons/testprofiles/blood_sugar.png'></Image>
<Text fontWeight={'500'}  fontSize='25px'>
    Blood Sugar
</Text>

</HStack>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'} >
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Hba1C Test

</Text>
<Text fontSize={'15px'}>
Also known as Glycosylated Haemoglobin Blood


</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
Fasting Blood Sugar Test

</Text>
<Text fontSize={'15px'}>
Also known as Glocose Fasting Blood
</Text>
</Box>

<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Random Blood Sugar Test
</Text>
<Text fontSize={'15px'}>
Also known as RBS
</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Blood Sugar Levels After Eating
</Text>
<Text fontSize={'15px'}>
Also known as Post Prandail Blood Sugar
</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
   Creatinine Test
</Text>
<Text fontSize={'15px'}>
Also known as  Creatinine Conventional Blood
</Text>
</Box>
<Center mt='10px'>
<Button  colorScheme={'teal'} onClick={gobook}>
    Book Now
</Button>
</Center>
</Box>
<Box   border={'2px'} w='330px' p='10px' borderRadius={'15px'} borderColor='teal' >
<HStack m='10px'>
<Image  h='70px'src='https://www.practo.com/tests/public/icons/testprofiles/lipid_profile.png'></Image>
<Text fontWeight={'500'} fontSize='25px'>
    Lipid  Profile
</Text>

</HStack>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'} >
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'} >
    Ldi Cholesterol Test

</Text>
<Text fontSize={'15px'}>
Also known as  Cholesterol Ldl Enzymatic Colormetric Method Blood


</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Hdl Cholesterol Test

</Text>
<Text fontSize={'15px'}>
Also known as Hdl Enzymatic  Colormetric Method Blood
</Text>
</Box>

<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Vldl Cholesterol Test
</Text>
<Text fontSize={'15px'}>
Also known as     Vldl Cholesterol Test

</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
    Total Cholesterol
</Text>
<Text fontSize={'15px'}>
Also known as Tatal Cholesterol Test
</Text>
</Box>
<Box p= '14px'  borderLeft={'4px'} borderLeftColor='green' borderBottom={'4px'}  borderBottomColor='grey' borderRadius={'15px'}>
<Text textColor={'green'} fontSize='25px' fontStyle={'italic'}>
   Triglycerides Blood Test
</Text>
<Text fontSize={'15px'}>
Also known as Triglycerides Blood Test
</Text>
</Box>
<Center mt='10px'>
<Button  colorScheme={'teal'} onClick={gobook}>
    Book Now
</Button>
</Center>

</Box>



</Flex>

    </Box>
    
    
    </>
}