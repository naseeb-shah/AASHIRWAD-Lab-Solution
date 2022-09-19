import {Box,Flex,Text,Image, Heading, Divider,Center, HStack} from '@chakra-ui/react'
import { Outlet ,Link} from 'react-router-dom'
import  fotter from '../src/component/footer'
import './App.css';

 export default function Navbar(){


    return (
        <>

<Box>
<Flex 
id='navbar'

backgroundColor={'blue.600'} alignItems={'center'} justifyContent='space-around' flexWrap={'wrap'} >
    <Box>
                   <Image h='45px'src='https://media1.giphy.com/media/LnW9Odhzh7ssfakcsz/giphy.gif?cid=ecf05e47j6b4nogyu7onxwkcfj21rf6ojxciwbu82kk74s6b&rid=giphy.gif&ct=s'></Image>

       
    </Box>
    <Box>
<Text fontSize={'20px'} fontWeight='600' textColor={'yellow.400'}>
    <Link to='/'>AASHIRWAD LABORATORY</Link>

</Text>
    </Box>
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
<Text fontSize={'20px'} fontWeight='600'>
    Contact Us
</Text>
    </Box>
    <Box>
<Text fontSize={'20px'} fontWeight='600'>
    <Link to='/report'>
    Admin
    </Link>
</Text>
    </Box>
    
    
    
    </Flex>  
    <Divider>
        </Divider>  
        </Box><Box backgroundImage={'/bg.jpg'} backgroundAttachment='fixed' minHeight={'400px'}>

        
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
