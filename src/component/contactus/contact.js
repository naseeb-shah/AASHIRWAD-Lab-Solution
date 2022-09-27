
import { Box, Center ,HStack,Text, VStack,Image,Link} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import './contact.css';


export default function Contact(){
var redirect=useNavigate()
    return(<>
<Box >
<Center pt='100px' textColor={'white'}>
    <Text fontSize={'45px'} w='-moz-max-content' bg='blackAlpha.500'p='15px' borderRadius={'10px'}>
    CONTACT US
    </Text>
</Center>
<Center>
<Box>
<Text maxW={'450px'} bg='blackAlpha.500'p='20px' color={'white'} borderRadius='25px'>
If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.
<Text>
    Call +918708730331
</Text>

<HStack >
    <Text >
    
    <Image     src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNTU3Ljk0IDMyNC4zOWgtOTEuODMydjIyLjIzOGg3NC4wMzl2MTcyLjA2aC0yNS4xNTJsMi40MTggMjQuNDMgMC43MjY1NiA3LjMzNTktNDUuNTgyLTI4LjQwMi01LjM5ODQtMy4zNjMzaC0xNDEuMjR2LTEyMS40OGgtMjIuMjM4djEzOS4yN2MwIDIuNDU3IDEuOTkyMiA0LjQ0OTIgNC40NDkyIDQuNDQ5MmgxNTIuNjdsNzYuMjU4IDQ3LjUxMmMwLjcxNDg0IDAuNDQ1MzEgMS41MzEyIDAuNjcxODggMi4zNDc3IDAuNjcxODhzMS42Mjg5LTAuMjIyNjYgMi4zNDc3LTAuNjcxODhjMS40Mzc1LTAuODk0NTMgMi4yNDYxLTIuNTI3MyAyLjA3ODEtNC4yMTQ4bC00LjI4NTItNDMuMjk3aDE4LjM5NWMyLjQ1NyAwIDQuNDQ5Mi0xLjk5MjIgNC40NDkyLTQuNDQ5MmwtMC4wMDM5MDYtMjA3LjY0YzAtMi40NTctMS45OTIyLTQuNDQ5Mi00LjQ0OTItNC40NDkyeiIvPgogIDxwYXRoIGQ9Im00NDMuODcgMTYyLjg5aC0yNDkuODFjLTIuNDU3IDAtNC40NDkyIDEuOTkyMi00LjQ0OTIgNC40NDkydjIwNy42NGMwIDIuNDU3IDEuOTkyMiA0LjQ0OTIgNC40NDkyIDQuNDQ5MmgxOC4zOTVsLTQuMjg1MiA0My4yOTdjLTAuMTY3OTcgMS42ODc1IDAuNjQwNjIgMy4zMjAzIDIuMDc4MSA0LjIxNDggMC43MTg3NSAwLjQ0NTMxIDEuNTM1MiAwLjY3MTg4IDIuMzQ3NyAwLjY3MTg4IDAuODE2NDEgMCAxLjYzMjgtMC4yMjI2NiAyLjM1MTYtMC42NzE4OGw3Ni4yNTgtNDcuNTEyaDE1Mi42N2MyLjQ1NyAwIDQuNDQ5Mi0xLjk5MjIgNC40NDkyLTQuNDQ5MmwtMC4wMDM5MDctMjA3LjY0YzAtMi40NTMxLTEuOTkyMi00LjQ0NTMtNC40NDkyLTQuNDQ1M3ptLTE4My45OSAxMjQuMmMtOS40NzY2IDAtMTcuMTYtNy42ODM2LTE3LjE2LTE3LjE2IDAtOS40NzY2IDcuNjgzNi0xNy4xNiAxNy4xNi0xNy4xNiA5LjQ3NjYgMCAxNy4xNiA3LjY4MzYgMTcuMTYgMTcuMTYgMCA5LjQ3NjYtNy42ODM2IDE3LjE2LTE3LjE2IDE3LjE2em01OS4wODIgMGMtOS40NzY2IDAtMTcuMTYtNy42ODM2LTE3LjE2LTE3LjE2IDAtOS40NzY2IDcuNjgzNi0xNy4xNiAxNy4xNi0xNy4xNiA5LjQ3NjYgMCAxNy4xNiA3LjY4MzYgMTcuMTYgMTcuMTYgMCA5LjQ3NjYtNy42Nzk3IDE3LjE2LTE3LjE2IDE3LjE2em01OS4wODYgMGMtOS40NzY2IDAtMTcuMTYtNy42ODM2LTE3LjE2LTE3LjE2IDAtOS40NzY2IDcuNjgzNi0xNy4xNiAxNy4xNi0xNy4xNiA5LjQ3NjYgMCAxNy4xNiA3LjY4MzYgMTcuMTYgMTcuMTYgMCA5LjQ3NjYtNy42ODM2IDE3LjE2LTE3LjE2IDE3LjE2eiIvPgogIDxwYXRoIGQ9Im0zOTEuMTEgNDMyLjM2YzAgOS40ODA1LTcuNjgzNiAxNy4xNi0xNy4xNiAxNy4xNnMtMTcuMTYtNy42Nzk3LTE3LjE2LTE3LjE2YzAtOS40NzY2IDcuNjgzNi0xNy4xNTYgMTcuMTYtMTcuMTU2czE3LjE2IDcuNjc5NyAxNy4xNiAxNy4xNTYiLz4KICA8cGF0aCBkPSJtNDUwLjIgNDMyLjM2YzAgOS40ODA1LTcuNjgzNiAxNy4xNi0xNy4xNiAxNy4xNi05LjQ3NjYgMC0xNy4xNi03LjY3OTctMTcuMTYtMTcuMTYgMC05LjQ3NjYgNy42ODM2LTE3LjE1NiAxNy4xNi0xNy4xNTYgOS40NzY2IDAgMTcuMTYgNy42Nzk3IDE3LjE2IDE3LjE1NiIvPgogIDxwYXRoIGQ9Im01MDkuMjggNDMyLjM2YzAgOS40ODA1LTcuNjgzNiAxNy4xNi0xNy4xNiAxNy4xNi05LjQ3NjYgMC0xNy4xNi03LjY3OTctMTcuMTYtMTcuMTYgMC05LjQ3NjYgNy42ODM2LTE3LjE1NiAxNy4xNi0xNy4xNTYgOS40NzY2IDAgMTcuMTYgNy42Nzk3IDE3LjE2IDE3LjE1NiIvPgogPC9nPgo8L3N2Zz4K'>
    </Image>
    <Link onClick={()=>redirect('/feed')}>
    Give Feedback
    </Link>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d215.1423279202137!2d77.4180315847215!3d30.37148427979076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390f1c83e4876b77%3A0x88b222eb4dd9722c!2sTaharpur%2C%20Haryana%20135021!3m2!1d30.371935399999998!2d77.4185024!5e0!3m2!1sen!2sin!4v1664293899986!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Text>
</HStack>
</Text>



</Box>
</Center>
<Center>
    <VStack>
    <HStack>

<a
        href="https://wa.me/+918708730331"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i h='95px' class="fa fa-whatsapp whatsapp-icon"></i>
      </a>


    </HStack>
    </VStack>
</Center>

    <Box>



    </Box>
    
    </Box>
    </>)
}