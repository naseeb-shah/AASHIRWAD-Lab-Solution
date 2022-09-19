import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState ,useMemo,useRef } from "react"
import Deen from "./singlereport"
 import { useParams  } from "react-router-dom"
import JsPDF from 'jspdf';
 import './test.css'


export default function Report(){
    
    
    const [report,setreport]=useState({})
    const [d,sd]=useState('none')
   
    var totel =[]

     var {id }= useParams()

     useEffect(()=>{
        axios.get(`https://labcare.vercel.app/report/id/${id}`)
        .then(x=>{
            setreport(x.data.reports[0])
            sd("block")
console.log(report)
           
        }).catch((e)=>console.log(e))

     },[])
   
     if(d=='block'){
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
  <Button id="outprint" onClick={generatePDF} >Download Report</Button>
<Box display={d}
id="report"
border='2px' p='25px' maxWidth={'800px'}m='auto'
>
    <Box id="in">
        <Center>
<Text   fontSize='20px' textColor={'white'}>
            Aashirwad
                </Text>
                <HStack>                <Image h='35px'src='https://media1.giphy.com/media/LnW9Odhzh7ssfakcsz/giphy.gif?cid=ecf05e47j6b4nogyu7onxwkcfj21rf6ojxciwbu82kk74s6b&rid=giphy.gif&ct=s'></Image>
                <Text  fontSize='20px'textColor={'white'}>Laboratory
            
                </Text>
                </HStack>
                </Center>
                </Box>
    <Box  >

   <HStack>{
    }
   
    <Text>Patient Name {report.name}</Text>
    <Spacer></Spacer>
    <Text> Date 08-Sep-2022 </Text>

    </HStack>
    <HStack>
    <Text>Age/Gender {report.age} Years/Female  
</Text>
    <Spacer></Spacer>
    <Text> Report Time :- 1:20 Pm</Text>

    </HStack>
    <HStack>
    <Text>Ref. By. Dr. Bhudhu Shah
</Text>
    </HStack>
</Box>
<Box>
 

{/* ------------------------------------ */}
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
</Box>
{
    page
}
</Box>



 </> 
 )


}