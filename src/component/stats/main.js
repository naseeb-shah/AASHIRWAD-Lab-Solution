
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
   var [req,sreq]=useState({main:[],up:[]})

   const dis=useDispatch()
   const [d,s]=useState('none')
   const [date,setdate]=useState({})
   const all=useSelector(e=>e.alldata.value)

 useEffect(()=>{
   s('block')
    base.get('/report/allreport')
    .then(x=>{
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
      noreports:am.length,    allreports:am

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

base.get('/feed')
.then((x)=>sreq({main:x.data.reports,up:x.data.reports}))
.then(x=>console.log(req))
 },[])

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
     allreports:am

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



    return (<>

    <Box  backgroundColor={'whiteAlpha.700'} pt='30px' pb='50px'>
<HStack m='40px' flexwrap='wrap'  >
   <Box> <Input type={'Date'} name='start' onChange={handle}  bg='blackAlpha.400' ></Input></Box>
   <Box> <Input  type={'Date'} name='end'   onChange={handle} bg='blackAlpha.400' ></Input></Box>
   <Button variant={'outline'} colorScheme='facebook' onClick={timedata}>Time Period</Button>
</HStack>
    <CircularProgress display={d} value={60} color='blue.600' position='fixed' size={'150px'} left='40%'  isIndeterminate>
  <CircularProgressLabel><Image ocapcity='1'  w='113px'h='110px' src='/logo.jpg'mt='-54px'ml='17px' position={'absolute'} borderRadius={'50%'} ></Image></CircularProgressLabel>
</CircularProgress>
    {/* <Outlet></Outlet> */}
{/* <VStack> */}
<HStack ml='70px' flexWrap={'wrap'} >
<Box  fontStyle={'italic'} w='400px'>
   <Text fontSize={'30px'}> Payment Statas</Text>
   
   <CircularProgress ml='50px'  value={(all.cash/all.sale)*100} color='blue.600' size={'150px'}   >
  <CircularProgressLabel>
  <Text  fontSize={'20px'} textColor={'red'}>{((all.credit/all.sale)*100).toFixed(1)} %</Text>
   <Text fontSize={'20px'} textColor={'green'}>{((all.cash/all.sale)*100).toFixed(1)} %</Text>
  
   </CircularProgressLabel>
</CircularProgress>

 <Flex w='300px'  >
   <Text fontSize={'20px'} fontWeight='500'  color='blue'>
   Total Sale:
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='blue'>
   {all.sale}
   </Text>
   </Flex>
    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   Cash:
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   {all.cash}
   </Text>
   </Flex>
    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='red'>
   Credit:
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='red'>
   {all.credit}
   </Text>
   </Flex>
   
</Box>
<Box  fontStyle={'italic'}w='400px'>
   <Text fontSize={'30px'}> Request Statas</Text>
   <CircularProgress  value={(req.up.length/req.up.filter(e=>e.done==true).length)*100} color='blue.600' size={'150px'} left='30%'  >
  <CircularProgressLabel>
   <Text  fontSize={'20px'} textColor={'red'}>{req.up.length-(req.up.filter(e=>e.done==true).length)}</Text>
   <Text fontSize={'20px'} textColor={'green'}>{req.up.filter(e=>e.done==true).length}</Text>
  </CircularProgressLabel>
</CircularProgress>

 <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='blue'>
   Total Sample:
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='blue'>
   {req.up.length}
   </Text>
   </Flex>
    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   Complated
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   {req.up.filter(e=>e.done==true).length}
   </Text>
   </Flex>
    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='red'>
   Pending
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='red'>
   {req.up.length-req.up.filter(e=>e.done==true).length}
   </Text>
   </Flex>
   
</Box>
<Box  fontStyle={'italic'}w='400px'>
   <Text fontSize={'30px'}> Referral  Statas</Text>
   <CircularProgress  value={((all.ref.length/all.noreports)*100).toFixed(1)} color='blue.600' size={'150px'} left='30%'  >
  <CircularProgressLabel>
  <Text  fontSize={'20px'} textColor={'red'}>{((all.ref.length/all.noreports)*100).toFixed(1)} %</Text>
   <Text fontSize={'20px'} textColor={'green'}>{-((all.ref.length/all.noreports)*100).toFixed(1)+100} %</Text>

  </CircularProgressLabel>
</CircularProgress>

 

    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   Self
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='green'>
   {all.noreports-all.ref.length}
   </Text>
   </Flex>
    <Flex w='300px' >
   <Text fontSize={'20px'} fontWeight='500'  color='red'>
   Refrence
   </Text>
   <Spacer></Spacer>
   <Text fontSize={'20px'} fontWeight='500'  color='red'>
   {all.ref.length}
   </Text>
   </Flex>
   
</Box>
</HStack>
<HStack flexWrap={'wrap'} justifyContent='space-around' mt='50px' >
<Box fontSize={'30px'} fontWeight='500'>
<Text  >Connceted Docter</Text>
{
   all.ref.length>0? all.ref.map((e,i)=><Text>{i+1} Dr. {e}</Text>):''
}
</Box>
<Box fontSize={'30px'} fontWeight='500' >
<Text>Total Technician</Text>
{
   all.tech.length>0? all.tech.map((e,i)=><Text>{i+1} Dr. {e}</Text>):''
}
</Box>
<Box fontSize={'30px'} fontWeight='500'>
<Text  >Total Number Report</Text>
{all.noreports}
</Box>

</HStack>
</Box>

    </>)
}