import {Box,Flex,Text,Image, Heading, Divider} from '@chakra-ui/react'
import { Outlet ,Link} from 'react-router-dom'

 export default function Navbar(){

    return (
        <>

<Box>
<Flex  alignItems={'center'} justifyContent='space-around' flexWrap={'wrap'}>
    <Box>
        <Image src='/logo.jpg' h='75px'></Image>
       
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
    Download Report
 
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
        </Box><Box backgroundImage={'/bg.jpg'} >

        
    <Outlet></Outlet>
    </Box>
        </>
    )
 }
