import { Heading, Button, HStack, Text, Input, Box, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./main";
import Pay from "./payment";
import Delte from "./delte";
import Incentive from "./commison";

import { Outlet,Link } from "react-router-dom";
export default  function Stahome(){

var [all,rep]=useState([])


return(
    <>
    
   <HStack bg='blue.300'  fontSize={'20px'} flexWrap='wrap' justifyContent={'space-around'}       >

<Link to={'/sta'}> <Box> Payment</Box></Link>
<Link to={'/sta/delte'}> <Box> Report Delte</Box></Link>
<Link to={'/sta/inn'}> <Box>Docter Incentive</Box></Link>
<Link to={'/sta/inn'}> <Box>Technicain </Box></Link>
{/* <Box border={'1px'} w='25%'><Link  to={'/sta/pay'}>Pay</Link></Box> */}
</HStack>

    <Outlet />



    
  
    </>
)

}