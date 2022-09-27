import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";



import { Link, Outlet } from "react-router-dom";
export default  function Stahome(){

var [all,rep]=useState([])


return(
    <>
    
   <HStack bg='blue.300'  fontSize={'20px'} flexWrap='wrap' justifyContent={'space-around'}       >

<Link to={'/sta'}> <Box> Payment</Box></Link>
<Link to={'/sta/delte'}> <Box> Report Delete</Box></Link>
<Link to={'/sta/inn'}> <Box>Doctor Incentive</Box></Link>
<Link to={'/sta/inn'}> <Box>P & L </Box></Link>
{/* <Box border={'1px'} w='25%'><Link  to={'/sta/pay'}>Pay</Link></Box> */}
</HStack>

    <Outlet />



    
  
    </>
)

}