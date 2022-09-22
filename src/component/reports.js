import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer, Link } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState ,useMemo,useRef } from "react"
import Deen from "./singlereport"
 import { useParams  } from "react-router-dom"
import JsPDF from 'jspdf';
 import './test.css'
 import QRCode from "react-qr-code";


export default function Report(){
    
    
    const [report,setreport]=useState({})
    const [d,sd]=useState('none')
   
    var totel =[]

     var {id }= useParams()
     

     useEffect(()=>{
        // const url='http://localhost:4000/'
         const url='https://labcare.vercel.app/'
        axios.get(`${url}report/id/${id}`)
        .then(x=>{
            console.log(x)
            setreport(x.data.reports[0])
            sd("block")
console.log(report)
           
        }).catch((e)=>console.log(e))

     },[])
   
     if(d==='block'){
    totel=Object.keys(report.test)
     }
     
     const generatePDF = () => {

        // const report = new JsPDF('portrait','pt','a4');
        // report.html(document.querySelector('#report')).then(() => {
        //     report.save('report.pdf');
        // });
    window.print()
    
    }

     
     const page=useMemo(()=>d=='block'?<Deen g={totel} test={report.test} />:"",[d])
 return (<>
  <Button id="outprint" colorScheme={'facebook'} onClick={generatePDF} >Download Report</Button>

  <Box  fontStyle={'italic'}  maxWidth={'800px'}m='auto'>
  
    <HStack>
       <Box as={Link}>
<Text   fontSize='20px' textColor={'white'} color='red'>
            Aashirwad
                </Text>
                <HStack>                <Image h='35px'src='/logo.jpg'></Image>
                <Text  fontSize='20px'textColor={'white'}>Laboratory
            
                </Text>
                </HStack>
                </Box>
                <Spacer></Spacer>
                <QRCode  value={window.location.href} 
                  size={50}
                //   style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  
                //   viewBox={`0 0 100 100`}
                />
    <Text>M:+91-87087-33011</Text>
                </HStack>
                </Box>







<Box display={d}
id="report"
border='1px' borderRadius={'10px'} pl='25px'pr='25px' maxWidth={'800px'}m='auto'
>
   
    <Box  >

   <HStack>{
    }
   
    <Text>Patient Name :  {report.name}</Text>
    <Spacer></Spacer>
    <Text> Date :  {report.date} </Text>

    </HStack>
    <HStack>
    <Text>Age/Gender :  {report.age} Years / {report.gender}
</Text>
    <Spacer></Spacer>
    <Text> Report Time :  {report.time}</Text>

    </HStack>
    <HStack>
    <Text>Ref. By. : {report.reference}
</Text>
    </HStack>
</Box>
<Box>
 

{/* ------------------------------------ */}

</Box>

</Box>
<Box  p='25px' maxWidth={'800px'}m='auto' >
<Text fontWeight={'500'} textColor={'green'}>TEST REPORT STATUS 
</Text>
<HStack justifyContent={'space-between'} border={'2px'}pl='5px' pr='5px'>
    <Text>Investigation</Text>
    <Text>value</Text>
    <Text>Units</Text>
    <Text>Biological Ref. lnterwal </Text>

    

</HStack>
</Box>

{
    page
}
 </> 
 )


}