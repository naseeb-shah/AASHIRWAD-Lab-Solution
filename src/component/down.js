import { Box, Button, CircularProgress, CircularProgressLabel, HStack, Image, Input, Text } from "@chakra-ui/react"

import { useState } from "react"
import sai from './axios'
import List from "./showlistofreports"


export default function(){
 const [phone,sphone]=useState('')
 const[al,sal]=useState('block')
 const[l,s]=useState('none')
 const[reports,sr]=useState({
  re:[],
  se:false
 })


 const getreport=()=>{
  if(al=='none'){
    s('block')
    sai.get(`/report/m/${phone}`)
    .then(x=>{
      s('none')
      console.log(x.data.reports)
      sr({re:x.data.reports,se:true})}).catch((e)=>console.log(e))
  }
 }
    return (<>
    
    <HStack flexWrap={'wrap'} pt='50px'ml='80px'   >
        {/* <Image h='150px'src='https://media1.giphy.com/media/St3NH8X8DMq52JyMOF/giphy.gif?cid=ecf05e47wopg20i7hy9afhl30z5jbjro8w1eeewl9lqlvtw0&rid=giphy.gif&ct=s'></Image> */}
<Box  backgroundColor='blue.300' p='15px' borderRadius='10px' color={'white'}>
    <Text fontSize={'25px'}  fontStyle='italic'>
        Download Report
    </Text>
<Text fontSize={'20px'}  fontStyle='italic'>
  Mobile NO.
</Text>
<Input type="number" onChange={(e)=>{
    sphone(e.target.value)
  if(phone.length==9)sal('none')
  else
  sal("block") 
    }}>
</Input>
<Text textColor={'red.200'} display={al}> Please Enter Valid Mobile Number</Text>
<Button  variant={'outline'} onClick={getreport}>
    Get Report
</Button>
{reports.re.length==0&&reports.se?"No report Found":""}

</Box>

{/* <Image h='100px' src='https://media1.giphy.com/media/CxXiBGOPU9qHCHW2kN/giphy.gif?cid=ecf05e475i0fazosg4rsi1e623hd1yra4xptq42mn889b7yk&rid=giphy.gif&ct=s'></Image> */}
 </HStack>
 {/* <CircularProgress display={'block'} position='fixed' size={'200px'} left='40%' isIndeterminate color='green.300' /> */}


 <CircularProgress ml='100px'mt='-100px' position={'fixed'} display={l} value={60} color='blue.500'size='125px' isIndeterminate>
  <CircularProgressLabel><Image ocapcity='.2'  w='100px'h='100px' src='/logo.jpg'mt='-49px'ml='9px' position={'absolute'} borderRadius={'50%'} ></Image></CircularProgressLabel>
</CircularProgress>
 <Box w='max-content'  >
{reports.re.length>0?< List  key={1}data={reports.re}></List>:''}

</Box>
    </>)
}