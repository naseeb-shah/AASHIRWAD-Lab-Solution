



import Allrepohelper from './allreporthelpres'
import { useEffect, useState } from "react"
import {CircularProgress,CircularProgressLabel,HStack,Image,Box ,
   Flex,
   Input,
   Text, Center, Spacer ,Button} from '@chakra-ui/react'
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import base from '../axios'
import { getdata } from "../stats"
export default function Main(){
   const dis=useDispatch()
   const [d,s]=useState('none')
   const [date,setdate]=useState({})
   
   
   
   var  all  = JSON.parse(sessionStorage.getItem('sta'))
   
   var currentdoc=[]
   var totelsale=0
   var no=0
   const [current,cs]=useState(all.ref[0])
if(current){
 currentdoc=all.allreports.filter(e=>e.reference==current )
for(var i =0; i<currentdoc.length;i++){
    totelsale+=currentdoc[i].payment.am

    if(currentdoc[i].payment.s){
        no+=currentdoc[i].payment.am
    }
}
 console.log(currentdoc)
} 

 const handle=(e)=>{
   setdate({...date,[e.target.name]:e.target.value})
   console.log(date)

 }
const timedata=()=>{
   console.log(date)
   if(!date.start||!date.end)
   {
      alert("Please Select Valid time Period")
      return
   }
   s('block')
   base.post('/report/time',date)
   .then(x=>{
      console.log(x,"reps")
  const am=x.data.reports
  var sale=0
  var cash=0
  var ref=[]
  var tec=[]
  for(var i =0; i<am.length;i++){
     var val= am[i]
     sale +=val.payment.am
     if(val.payment.s){
        cash +=val.payment.am

     }
     if(val.reference =='self'||val.reference =='Self'){
        

     }else{
        ref.push(val.reference )
     }
if(val.techname){
  tec.push(val.techname)
}

    
  }
  dis(getdata({sale:sale,
     credit:sale-cash,
     cash:cash,
     tech:[...new Set(tec)],
     ref:[...new Set(ref)],
     noreports:am.length,
     allreports:am,

 }))
 sessionStorage.setItem('sta',JSON.stringify({sale:sale,
    credit:sale-cash,
    cash:cash,
    tech:[...new Set(tec)],
    ref:[...new Set(ref)],
    noreports:am.length,
    allreports:am
 }))
     s('none')
   }).catch(e=>{
     s('none')
     alert("Some Thing Went Wrong !")
   })


}

// var relteddata=all.

    return (<>
<HStack m='40px' flexwrap='wrap'>
    
   <Box> <Input type={'Date'} name='start' onChange={handle}   ></Input></Box>
   <Box> <Input  type={'Date'} name='end'   onChange={handle}  ></Input></Box>
   <Button variant={'outline'} colorScheme='facebook' onClick={timedata}>Time Period</Button>
     </HStack>
    <CircularProgress display={d} value={60} color='blue.600' position='fixed' size={'150px'} left='40%'  isIndeterminate>
  <CircularProgressLabel><Image ocapcity='1'  w='113px'h='110px' src='/logo.jpg'mt='-54px'ml='17px' position={'absolute'} borderRadius={'50%'} ></Image></CircularProgressLabel>
</CircularProgress>
    {/* <Outlet></Outlet> */}
{/* <VStack> */}
<HStack flexWrap={'wrap'} w='800px' m='auto' >
<HStack flexWrap={'wrap'}  mt='50px' >
<Box border={'1px'}  borderRadius='15px' fontSize={'30px'} fontWeight='400' bg={'facebook.100'} p='25px'fontStyle={'italic'}>
<Text  >Doctors</Text>
{
   all.ref.length>0? all.ref.map((e,i)=><Box><Button onClick={()=>{
    s('block')
    cs(e)
   
   setTimeout(()=>s('none'),1000)
   }}>{i+1} Dr. {e}</Button></Box>):''
}
</Box>




</HStack>
<Spacer></Spacer>

<Box  fontStyle={'italic'} w='400px'>
   <Text fontSize={'30px'}> Incentive Statas</Text>
   <Text fontSize={'30px'}> Dr. {current}</Text>
   
   <CircularProgress ml='50px'  value={(currentdoc.length/all.allreports.length)*100} color='blue.600' size={'150px'}   >
  <CircularProgressLabel>
  <Text  fontSize={'20px'} textColor={'blue.600'}>{((currentdoc.length/all.allreports.length)*100).toFixed(1)} %</Text>

   </CircularProgressLabel>
</CircularProgress>

 <Flex w='300px'  >
   <Text fontSize={'20px'} fontWeight='500'  color='blue'>
   Total Sale:
   </Text>
   <Spacer>
    
   </Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='blue'>
   {totelsale}
   </Text>
   </Flex>
    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   Commision
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   {totelsale/100*15}
   </Text>
   </Flex>
  
   
</Box>


</HStack>

<Box maxWidth='800px'  m='auto'mt='50px' >
{currentdoc.map((e,i)=><Allrepohelper element={e} key={i+1}/>)}
</Box>
    </>)
}


