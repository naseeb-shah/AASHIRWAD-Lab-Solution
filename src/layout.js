import {Box,Flex,Text,Image, Heading, Divider,Center, HStack,Button} from '@chakra-ui/react'
import { Outlet ,Link} from 'react-router-dom'
import{ChevronDownIcon} from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { loguser } from './features/authlevel';
import { useState } from 'react';



 export default function Navbar(){
    var dispatch=useDispatch()
var authtype=useSelector((e)=>e.auth.value)
var dis='block'
if(authtype.addreport=='block')
 dis='none'

    return (
        <>

<Box>
<Flex 
id='navbar'
color={'white'}
backgroundColor={'blue.600'} alignItems={'center'} justifyContent='space-around' flexWrap={'wrap'} >
    <Box>
                   <Image h='45px'src='https://media1.giphy.com/media/LnW9Odhzh7ssfakcsz/giphy.gif?cid=ecf05e47j6b4nogyu7onxwkcfj21rf6ojxciwbu82kk74s6b&rid=giphy.gif&ct=s'></Image>

       
    </Box>
    <Box>
<Text fontSize={'20px'} fontWeight='600' textColor={'yellow.400'}>
    <Link to='/'>AASHIRWAD LABORATORY</Link>

</Text>
    </Box>
{/* ------------------------------------------ */}
<Menu>
  <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} backgroundColor='inherit'  fontSize={'20px'}>
    Patient
  </MenuButton>
  <MenuList color={'black'} bg='facebook.500'>
    <MenuItem  as={Link}to='/dr'>Patient Report</MenuItem>
    <MenuItem>Request to collect Sample</MenuItem>

  
    <MenuItem>Feedback</MenuItem>
  </MenuList>
</Menu>






{/* ---------------------------------------- */}

    <Box>
<Text fontSize={'20px'} fontWeight='600'>
    <Link to='/book'>
Book A test
</Link>
</Text>
    </Box>
    <Box>
<Text fontSize={'20px'} fontWeight='600'>
    <Link to='/dr'>
    Download Report
    </Link>
</Text>
    </Box>

    
    <Box>
<Text fontSize={'20px'} fontWeight='600'display={authtype.addreport} >
    <Link to='/report'>
Add Report
    </Link>
</Text>
    </Box>
    
    <Box>
<Text fontSize={'20px'} fontWeight='600'display={authtype.labstatas} >
    <Link to='/sta'>
Lab Statas
    </Link>
</Text>
    </Box>
    <Box>
<Text fontSize={'20px'} fontWeight='600' display={authtype.reports}>
    <Link to='/all'>
Reports
    </Link>
</Text>
    </Box>
    
    <Box>
<Text fontSize={'20px'} fontWeight='600'>
    Contact Us
</Text>
    </Box>
    <Box>
<Text fontSize={'20px'} fontWeight='600' display={dis}>
    <Link to='/log' >
    Admin
    </Link>
  
</Text>

    
   <Image src='/logout.svg' display={dis=='block'?"none":'block'} h='20px' onClick={()=>dispatch(loguser())}></Image>
   
    
    </Box>
   
    
    
    
    </Flex>  
    <Divider>
        </Divider>  
        </Box><Box  backgroundColor={'facebook.50'} backgroundAttachment='fixed' minHeight={'400px'}>

        
    <Outlet></Outlet>
    <Box id='footer'
    bottom={'50%'}  fontWeight='500' mt='100px' backgroundColor={'blue.600'}>
       
            <Box lineHeight={'30px'} fontStyle='italic'>
            <Text  fontSize='30px' textColor={'white'}>
            Aashirwad
                </Text>
                <HStack>                <Image h='45px'src='https://media1.giphy.com/media/LnW9Odhzh7ssfakcsz/giphy.gif?cid=ecf05e47j6b4nogyu7onxwkcfj21rf6ojxciwbu82kk74s6b&rid=giphy.gif&ct=s'></Image>
                <Text  fontSize='30px'textColor={'white'}>Laboratory
            
                </Text>
                </HStack>
<Text lineHeight={'5'}>
LABORATORY FOR HEALTH HUMEN SERVICE :- All Investigations have their limitation which are imposed by the limits of sensitivity and specifity of  Individual assay procedures as well as the specimen received by the laboratory .Isolated laboratory investigations never confirm the final diagnosis of the disease. They only help in arriving at a diagnosis in conjuction with clinical presentation and other related investigations. ( PARTIAL REPRODUCTION OF THE REPORT IS NOT PERMITTED FOR MEDICO LEGAL PURPOSE
</Text>


        <Text  id='copy'textColor={'white'} textAlign='center' fontSize={'20px'}>2022 ©            Aashirwad
Labs All rights reserved.</Text>
            </Box>

        </Box>
    </Box>

   
        </>
    )
 }
