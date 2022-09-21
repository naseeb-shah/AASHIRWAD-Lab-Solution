import {
  Image,
  Select,
  AlertDialog,
  AlertDialogBody, AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Flex, HStack, Input, Link, Spinner, Text, useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
  import {Setuser,loguser} from '../features/authlevel'
export default function Log() {
  var dispatch=useDispatch()
  var redirect = useNavigate()
  var auth= useSelector((e)=>e.auth.value)
  console.log(auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  var match = false
  const [sp, sps] = useState(false)
  const [helper, shelper] = useState()
  const [us, sus] = useState({})
  const [ds, dus] = useState('none')
  const [al, set] = useState({

  })

  const Handler = (e) => {

    sus({ ...us, [e.target.name]: e.target.value })
    console.log(us)
  }






  const Login = () => {
    var flag = false
    Object.keys(us).forEach((e) => {
      if (us[e] === '') {
        alert("Please Fill Valid " + e.toUpperCase())
        flag = true
      }

    })
    if (flag)
      return
    sps(true)

    console.log(us)
    
    fetch('http://localhost:4000/admin/log', {
      method: "POST",
      body: JSON.stringify(us),
      headers: {
        'Content-Type': "application/json"
      },
    }).then(x => x.json()).then(x => {
      sps(false)
     var  res=x.response
  if(x.status=="Successfully"){
   
      set({
        h: `${res.name}`,
        b: " Welcome to AASHIRWAD LABORATORY",
        button: 'Thank You'
      })

if(res.role=='admin'){
  dispatch(Setuser({
    'addreport':'block',
    'labstatas':'block',
    'reports':'block',
    'name':res.name,
    'role':res.role
}))
}else{
  dispatch(Setuser({
    'addreport':'block',
    'labstatas':'none',
    'reports':'none',
    'name':res.name,
    'role':res.role
}))

}


      onOpen()
      shelper(x.response)
     
      if (x.response._id) {
        // dispatch(login(x))
        localStorage.setItem('cur', JSON.stringify(x))
        localStorage.setItem('id', x._id)

      }

    }
    else{
      set({
        h: `${x.response}`,
        b: "Please try with correct details",
        button: 'Try Again'
      })
      shelper(x.response)
      onOpen()
      


    }



    }).catch((e) => console.log(e))






  }

  const goto = () => {
    if (helper ==='Credainls Invalid') {
      redirect('/log')
    } else {
      redirect('/')
    }
  }
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        // leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {al.h}
            </AlertDialogHeader>

            <AlertDialogBody>
              {al.b}
            </AlertDialogBody>

            <AlertDialogFooter>

              <Button colorScheme='green' onClick={() => {
                goto()
                onClose()
              }} ml={3}>
                {al.button}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>



      <Center>
        <Flex  >

          <Box mt='90px' borderRadius={'15px'} border={'2px'} borderColor='blackAlpha.50' p='35px' display={ds === 'block' ? "none" : 'blo  '} >
            {/* <Text fontSize={'40px'}>
              Login
            </Text> */}
            <Center>
              <Image h='100px' src='/user.svg'></Image>

            </Center>
            <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
              <Text color='black' fontSize={'20px'} w={'100px'}>
                Email
              </Text>
              <Input
                borderColor={'green'}
                border={'2px'}
                name='email'
                w="300px"
                onChange={Handler}
                placeholder='Username@gmail.com'
              >

              </Input>
            </HStack>
            <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px' >
              <Text color='black' fontSize={'20px'} w={'100px'}>
                Password
              </Text>
              <Input
                type='password'
                name='password'
                w="300px"
                borderColor={'green'}
                border={'2px'}
                onChange={Handler}
                placeholder='Password'
              >

              </Input>

            </HStack>
            <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px' >
              <Text color='black' fontSize={'20px'} w={'100px'}>
                Role
              </Text>
              <Select
                type='text'
                name='role'
                w="300px"
                borderColor={'green'}
                border={'2px'}
                onChange={Handler}
                placeholder='Postion'
              >
<option value={'user'}>
  User
</option>
<option value={'admin'}>
  Admin
</option>
              </Select>

            </HStack>
            <Box w='400px' mt='20px'>
              <Center>

                <Button ml='69px'
                  // borderColor={'green'}
                  colorScheme='facebook'
                  w='300px'
                  onClick={Login}
                >
                  {sp ? <Spinner /> : ''}
                  Log in
                </Button>


              </Center>



            </Box>

          </Box>



        </Flex>
      </Center>

    </>
  )
}
