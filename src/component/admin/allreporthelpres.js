import { Button, HStack, Input, Text } from "@chakra-ui/react";

import base from '../axios';

export default  function Allrepohelper({element}){
  
var date=cleanDate(element.date)
function cleanDate(d) {return new Date(+d.replace(/\/Date\((\d+)\)\//, '$1'));}

const pay=(id)=>{

    if(element.payment.s)
    return
console.log("start")
    base.post('report/pay',{
id:id,
am:element.payment.am

    }).then(x=>console.log(x)).catch(e=>console.log(e))

}

// console.log(element)

return(
    <>
    {/* {JSON.stringify(element)} */}
    <HStack backgroundColor={'blue.600'} color='white'p='5px' borderBottom={'2px'} >

        <Text w='100px' borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.name}
        </Text>
        <Text w='50px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.age }
        </Text>
    
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {JSON.stringify(date).substring(1,11)}
        </Text>
        <Text w='100px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.reference}
        </Text>
       
        <Text w='70px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.gender}
        </Text>
       
        <Text w='120px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.mobile}
        </Text>
        {/* onChange={(e)=>sam(e.target.value)} */} 
        <Input w='100px' type={'number'} value={element.payment.am} ></Input>
        <Button colorScheme={element.payment.s?'whatsapp':'red'} onClick={()=>pay(element._id)} >
        {element.payment.s?"Paid":"Pay"}
        </Button>
    
        <Text w='170px'  borderLeft={'2px'}p='5px' paddingLeft={'4px'}>
            {element.techname}
        </Text>

    </HStack>
   
    </>
)

}