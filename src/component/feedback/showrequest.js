import { Button, HStack, Spacer, Text } from '@chakra-ui/react';

import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import base from '../axios';

export default function Feed(){
  var [req,sreq]=useState({main:[],up:[]})

    const [wait,fin]=useState(false)
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })
    useEffect(()=>{
base.get('/feed')
.then((x)=>sreq({main:x.data.reports,up:x.data.reports}))
    },[])



// const handle=(e)=>{

//     se({...re,[e.target.name]:e.target.value})

// }

// const sai=()=>{
//     console.log(re)
//  for(let i in  re){
//     console.log(re[i])
// if(re[i]==''){
// alert("Please fill all Details")
// return
// }
//  }
//  fin('block')
 
// //  const url='http://localhost:4000/'
//  base.post(`/feed`, {
  
   
//         "type":"Feed",
//         "name":re.name,
//         "mobile":re.number,
//         "msg":re.msg
//     }
 
// )
//     .then((x) => x)
//     .then((x) => {
      
//       fin("none")
//         onOpen()

    
//       for(let i in  re){
        
//     re[i]=''
    
//     }
//       console.log(x)
//    }).catch(e=>console.log(e))






// }


const  updated=(id)=>{


  base.patch(`/feed/updated/${id}`).then(e=>console.log(e))
  
}
const  dlete=(id)=>{


  base.delete(`/feed/updated/${id}`).then(e=>console.log(e))
  
}
    return (
        <>
<HStack p='50px'>
  <Button variant={'outline'} colorScheme='facebook' onClick={()=>{
    var sai=req.main.filter((e)=>e.type=='Sample')

    sreq({...req,up:sai})
  }} >Sample Collection</Button>
  <Button variant={'outline'} colorScheme='facebook'  onClick={()=>{
    var sai=req.main.filter((e)=>e.type=='Feed')

    sreq({...req,up:sai})
  }} >Feedback</Button>
    <Button variant={'outline'} colorScheme='facebook'  onClick={()=>{
    var sai=req.main.filter((e)=>e.type=='Feed')

    sreq({...req,up:req.main})
  }} >Reset Filter</Button>
</HStack>
{
  req.up.map((e)=>{
    if(true){
   return (
  <>
  <HStack  bg='blue.300'border={'2px'} mr='100px' ml='100px' p='10px' borderRadius={'20px'} overflow='auto' textColor={'white'}>
    <Text>
      {e.name}
    </Text>
    <Text>
      {e.mobile}
    </Text>
  
    <Text>
      {e.type=='Sample'?e.address:""}
    </Text>
    <Text>
    {e.type}
    </Text>
    <Text>
    {e.msg}
    </Text>
    <Spacer></Spacer>
    <Button  
    onClick={()=>updated(e._id)}
    
    variant={'outline'} colorScheme='facebook'> {e.done?"Done":"Panding"}</Button>
  
  <Button  
    onClick={()=>dlete(e._id)}
    
    variant={'outline'} colorScheme='red'> {'Delete'}</Button>
  
  
  
  </HStack>
  
  {/* {JSON.stringify(e)} */}
  </>
   ) }
  })
}
  
        </>
    )
}