import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box, Button, Divider, Flex, HStack, Image, Menu,
    MenuButton, MenuItem, MenuList, Text,Spacer, Center
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { loguser } from './features/authlevel';



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
    <MenuItem as ={Link} to='/book'>Request to collect Sample</MenuItem>

  
    <MenuItem   as ={Link} to='feed'>Feedback</MenuItem>
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

    {/* ------------------------------------------------- */}
    <Menu>
  <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} backgroundColor='inherit'  fontSize={'20px'} display={authtype.addreport} >
    Action
  </MenuButton>
  <MenuList color={'black'} bg='facebook.500'>
    <MenuItem  as={Link}to='/dr'>Requests</MenuItem>
    <MenuItem as ={Link} to='/report'>Add Report</MenuItem>

  
    <MenuItem   as ={Link} to='/all'>Search Report</MenuItem>
  </MenuList>
</Menu>

{/* ------------------------------------------------------------------- */}
    {/* <Box>
<Text fontSize={'20px'} fontWeight='600'>
    <Link to='/report'>
Add Report
    </Link>
</Text>
    </Box> */}
    
    <Box>
<Text fontSize={'20px'} fontWeight='600'display={authtype.labstatas} >
    <Link to='/sta'>
Lab Statas
    </Link>
</Text>
    </Box>
    {/* <Box>
<Text fontSize={'20px'} fontWeight='600' display={authtype.reports}>
    <Link to='/all'>
Reports
    </Link>
</Text>
    </Box> */}
    
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
        </Box><Box id='out' backgroundColor={'facebook.50'} backgroundAttachment='fixed' minHeight={'400px'}
        
        // backgroundImage='./labo.jpg'
        backgroundSize={'cover'}
     
        >

        
    <Outlet></Outlet>
    <Box id='footer'
    bottom={'50%'}  fontWeight='500' mt='100px' backgroundColor={'blue.600'}>
       
            <Box lineHeight={'30px'} fontStyle='italic'>
            <Text  fontSize='30px' textColor={'red.600'}>
            Aashirwad
                </Text>
                <HStack>                <Image h='45px'src='https://media1.giphy.com/media/LnW9Odhzh7ssfakcsz/giphy.gif?cid=ecf05e47j6b4nogyu7onxwkcfj21rf6ojxciwbu82kk74s6b&rid=giphy.gif&ct=s'></Image>
                <Text  fontSize='30px'textColor={'white'}>Laboratory
            
                </Text>
                </HStack>
<Text lineHeight={'5'} >
LABORATORY FOR HEALTH HUMEN SERVICE :-<Text fontSize={'10px'}> All Investigations have their limitation which are imposed by the limits of sensitivity and specifity of  Individual assay procedures as well as the specimen received by the laboratory .Isolated laboratory investigations never confirm the final diagnosis of the disease. They only help in arriving at a diagnosis in conjuction with clinical presentation and other related investigations. ( PARTIAL REPRODUCTION OF THE REPORT IS NOT PERMITTED FOR MEDICO LEGAL )
</Text>
</Text>


        <Text  id='copy'textColor={'white'} textAlign='center' fontSize={'20px'}>2022 ©            Aashirwad
Labs All rights reserved.</Text>
            </Box>

        </Box>
    </Box>

<Box id='mainfoot' mt='50px'>
    <HStack  justifyContent={'space-between'}>
<Box lineHeight={'15px'}>
    <Text p='0' m='0'fontWeight={500}> Dr. Rajesh Kumar</Text>
    <Text  p='0' m='0' fontSize={'12px'}> DMLT</Text>
    <Text  p='0' m='0' fontSize={'12px'}>Ex.  GABA Hospital</Text>
</Box>
<HStack>
       <Box>
<Text   fontSize='20px' textColor={'white'} color='red'>
            Aashirwad
                </Text>
                <HStack>                <Image h='35px'src='/logo.jpg'></Image>
                <Text  fontSize='20px'textColor={'grey'}>Laboratory
            
                </Text>
                </HStack>
                </Box>
               
                </HStack>

<Box lineHeight={'15px'}>
    <Text  p='0' m='0' fontWeight={500}> Dr. Kunal </Text>
    <Text  p='0' m='0' fontSize={'12px'}> DMLT</Text>
    <Text  p='0' m='0' fontSize={'12px'}>Civil Hospital</Text>
</Box>

    </HStack>
   
    <Center  >
    <Text p='3px' borderRadius={'10px'} border='2px' borderColor={'facebook.800'} color={'facebook.600'}>This Report is not Valid Medico legal Purposes</Text>
    </Center>
    <Center  >
    <Text p='3px'  color={'facebook.600'}> ***ADD : NEAR SHIV MANDIR TAHARPUR KALAN, YAMUNANAGAR***
</Text>
    </Center>
    <Divider></Divider>

</Box>

   
        </>
    )
 }
