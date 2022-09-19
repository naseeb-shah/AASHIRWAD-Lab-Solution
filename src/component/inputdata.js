import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Heading,Box, FormLabel, Input,HStack ,Flex, Button,Text, VStack} from "@chakra-ui/react";
import { useState } from "react";
// import store from "../app/store";
import { useDispatch,useSelector } from "react-redux"

import Repo from "./display";
 export default function Inputdata(){
var store=useSelector((e)=>e.data.value)
const [per,sr]=useState({})
const [cap,setcap]=useState(1)
const [disp,setdisp]=useState('none')


   const [HAEMATOLOGY,setstate]=useState(true)
   const [ESR,setesr]=useState(false)
   const [LFT,setlft]=useState(false)
   const [LPT,setlpt]=useState(false)
   const [IMS,setims]=useState(false)
   const [RFT,setrft]=useState(false)
   const [BS,sbs]=useState(false)
   const [DN,sdn]=useState(false)
   const [GT,sgt]=useState(false)
   const [GTU,sgtu]=useState(false)
   const [I,si]=useState(false)
   const [S,ss]=useState(false)
   const [TH,sth]=useState(false)
const Test=(e) =>{
  sr({...per,[e.target.name]:e.target.value})
  console.log(per)

}
const sendata=()=>{
 var sai={ 'tests':store,...per}
 console.log(sai)
 setdisp('block')
 setcap(.5)
 fetch('https://labcare.vercel.app/report', {
    method: "POST",
    body: JSON.stringify(sai),
    headers: {
        'Content-Type': "application/json"
    }
})
    .then((x) => x.json())
    .then((x) => {
      
      
      setdisp('none')
      setcap(1)
      console.log(x)})





 

}

 return(
 <>
 <Box opacity={cap} border='1px' borderColor='teal.800' ml='100px' p='10px' borderRadius={'15px'}>
 <Text fontStyle={'italic'} textColor='green' fontSize={'40px'}>
Fill Patient Data
 </Text>
 <HStack flexWrap={'wrap'}>
<HStack >
<FormLabel w='105px'>
   Patient Name
</FormLabel>
<Input  name='name' backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
</Input>
</HStack>
<HStack >
<FormLabel w='100px'>
   Gender
</FormLabel>
<Input  name='Gender'backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
</Input>
</HStack>
<HStack >
<FormLabel w='100px'>
   Age
</FormLabel>
<Input type={'Number'}  name='age'backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
</Input>
</HStack>


<HStack >
<FormLabel w='100px'>
Date
</FormLabel>
<Input type='date' name='time' backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
</Input>
</HStack>
<HStack >
   
<FormLabel w='100px'>
   Address
</FormLabel>
<Input  name='address'backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
</Input>
</HStack>
<HStack >
<FormLabel w='100px'>
   Ref. By
</FormLabel>
<Input  name='reference'backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
   </Input>
</HStack>
<HStack >
<FormLabel w='100px'>
Mobile No.
</FormLabel>
<Input type='Number' name='mobile'backgroundColor={'green.100'} h='30px' onChange={Test} w='300px'>
</Input>
</HStack>
</HStack>
 </Box>
 <Flex ml='100px' opacity={cap}
 flexWrap={'wrap'}> 
<VStack  > 
<Button colorScheme='whatsapp'w='150px' onClick={()=>{HAEMATOLOGY?setstate(false):setstate(true)}}>
HAEMATOLOGY
</Button>
<Button colorScheme='whatsapp' w='150px' onClick={()=>{ESR?setesr(false):setesr(true)}}>
ESR
</Button>
<Button colorScheme='whatsapp' w='150px' onClick={()=>{LFT?setlft(false):setlft(true)}}>
LFT
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{LPT?setlpt(false):setlpt(true)}}>
LPT
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{IMS?setims(false):setims(true)}}>
IMM SERO
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{RFT?setrft(false):setrft(true)}}>
   RFT
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{BS?sbs(false):sbs(true)}}>
BIOCHEMISTRY
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{DN?sdn(false):sdn(true)}}>
DENGUE  ANTIBODY
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{GT?sgt(false):sgt(true)}}>
GTT
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{GTU?sgtu(false):sgtu(true)}}>
GTT (URINE)
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{I?si(false):si(true)}}>
IMMUNOLOGY
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{S?ss(false):ss(true)}}>
STOOL EXAM
</Button>
<Button  colorScheme='whatsapp' w='150px'onClick={()=>{TH?sth(false):sth(true)}}>
TYPHIDOT
</Button>
</VStack>
<Box>
 <CircularProgress display={disp} size={'200px'} left='40%' isIndeterminate color='green.300' />
 {HAEMATOLOGY?< Repo y={0} x={"HAEMATOLOGY"}/>:""}
 {ESR?< Repo y={1}  x={"ESR"}/>:""}
 {LFT?< Repo  y={2} x={"LIVER FUNCTION TEST"}/>:""}
 {LPT?< Repo  y={3} x={"LIPID PROFILE TEST"}/>:""}
 {IMS?< Repo y={5} x={"IMMUNOLOGY -SEROLOGY"}/>:""}
 {RFT?< Repo y={4} x={"RENAL FUNCTION TEST"}/>:""}
 {BS?< Repo y={6}  x={"BIOCHEMISTRY"}/>:""}
 {DN?< Repo  y={7} x={"DENGUE  ANTIBODY  TEST"}/>:""}
 {GT?< Repo   y={8}x={"GLUCOSE TOLERANCE TEST ( GTT )"}/>:""}
 {GTU?< Repo y={10}  x={"URINE ANALYSIS"}/>:""}
 {I?< Repo y={11} x={"IMMUNOLOGY"}/>:""}
 {S?< Repo y={12} x={"STOOL EXAMINATION REPORT"}/>:""}
 {TH?< Repo   y={13}x={"TYPHIDOT CARD TEST"}/>:""}
 <Button
 onClick={sendata}> Report done</Button>
</Box>
 </Flex>
 </>
 )
}