import { Heading, Button, HStack, Text, Input, Box, Center } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {add} from '../features/handle'
var test = {
    "HAEMATOLOGY": [
        ["HAEMOGLOBIN (HB)", "gm/dl", "11 – 16"],
        ["TOTAL LEUCOCYTE COUNT", "/cumm", "4000 - 11000"],
        ["NEUTROPHIL", " %", "45-75"],
        ["LYMPHOCYTE", "%", "20-40"],
        ['EOSINOPHIL', '%', '01-06'],
        ['MONOCYTE', '%', '0-5'],
        ['BASOPHIL', '%', '0-01'],
        ['R B C (Red Blood Cells) ', 'Mlllions/cmm ', '3.8 - 5.8 '],
        ['PLATELET COUNT', 'Lakh/cumm', '1.50-4.50'],
        ['P.C.V /  HAEMATOCRIT', '%', '35-47'],
        ['M C V', 'fl', '80-96'
        ],
        ['M C H', 'picogram', '26-34'],
        ['M C H C', '%', '32-36'],
        ['RDW', '%', '10.0-15.0'],
        ['TOTAL EOSINOPHIL COUNT' , '%', '40 – 440']






    ]
    ,
    "ESR": [
        ["ERYTHROCYTE SADIMENTATION RATE", "mm/1st hr", " 0-20 "]
    ],
    "LIVER FUNCTION TEST": [
        ['TOTAL BIURUBIN', 'mg/di', '0.00-1.00']
        ,
        ['CONJUGATED (D. Bilinabin)', 'mg/di', '0.1-0.4'],
        ['UNCONJUGATED(I.D.Bilinabin)', 'mg/di', '0.2- 0.6'],
        ['AST/ SGOT', 'U/L', '5-40'],
        ['ALT/SGPT', 'U/L', '5-40'],
        ['ALKAUNE PHOSPHATASE', 'IU/L', '28-78'],
        ['TOTALPROTEIN', 'gm/di', '6.8-8.2'],
        ['ALBUMIN', 'gm/di', '3.5', '-', '5.5'],
        ['GLOBUUN', 'gm/di', '3-4.5'],
        ['A/GRatio', " ", '1.0-2.3']

    ],
    "LIPID PROFILE TEST": [
        ['CHOLESTEROL', 'mg/di', '130-200']
        ,
        ['TRIGLYCRIDES', 'mg/di', '80-200'],
        ['HDL CHOLESTEROL', 'mg/di', '36-65'],
        ['LDL CHOLESTEROL', 'mg/di', '90-150'],
        ['VLDL CHOLESTEROL', 'mg/di', '15-35'],
        ['CHOL / HDL RATIO', "", '0-4.50'],
        ['LDL / HDL RATIO', "", '0-3.50']
    ],
    "WIDAL AGGLUTINATION TITRE(IMMUNOLOGY-SEROLOGY)": [
      
        ['S.TYPHI"H" ', "", "NA"],
        ['S.TYPHI"O" ', "", "NA"],
        ['S.TYPHI"AH" ', "", "NA"],
        ['S.TYPHI"BH" ', "", "NA"],
        ['RESULT', "", "NAG/POS"],
    ],
    "IMMUNOLOGY-SEROLOGY": [
        ['MP CARD ( Antigen )', "", "NA"],
    ],
    "RENAL FUNCTION TEST": [
        ['UREA', "mg/dl", '13-15'],
        ['S CREATININE', "mg/dl", '0.6-1.4'],
        ['URIC ACID', "mg/dl", '2.0-6.0'],
        ['CALCIUM', "mg/dl", '8.5-10.5'],
    ],
    "BIOCHEMISTRY": [
        ['PLASMA GLUCOSE (FASTING)', 'mg/dl', '≤110'],
        ['PLASMA GLUCOSE (P.P)', 'mg/dl', '≤140'],
        ['PLASMA GLUCOSE (Random)', 'mg/dl', '≤150'],

    ],
    "DENGUE  ANTIBODY  TEST": [
        ["DENGUE  NS1Ag", '', "Neg/Pos"],
        ["DENGUE  IGM", '', "Neg/Pos"],
        ["DENGUE  IGG", '', "Neg/Pos"],
    ],
    "GLUCOSE TOLERANCE TEST ( GTT )": [
        ['PLASMA GLUCOSE (FASTING)', 'mg/dl', '≤95'],
        ['PLASMA GLUCOSE (1 HOUR)', 'mg/dl', '≤155'],
        ['PLASMA GLUCOSE (2 HOUR)', 'mg/dl', '≤180'],
    ],
    "URINE ANALYSIS": [
        ['URINE FOR SUGAR(FASTING)', '', 'NA'],
        ['URINE FOR SUGAR(1 HOUR)', '', 'NA'],
        ['URINE FOR SUGAR(2 HOUR)', '', 'NA'],
    ],
    "IMMUNOLOGY":
    [
        ["Chikungunya virus Ab Igm" , '','NEG/POS']
    ],
    "STOOL EXAMINATION REPORT":[
        ['COLOR','',''],
        ['REACTION','','ACIDIC'],
        ['CONSISTENCY','',''],
        ['BLOOD','','NIL'],
        ['OVA','','NIL'],
        ['CYSTS','','NIL'],
        ['RBCs','/HPF','NIL'],
        ['PUS CELLS','/HPF','NIL'],
        ['BACTERIA','','NIL'],
        ['VEG CELL','','NIL'],
        ['STOOL FOR OCCULT BLOOD','','NEG/POS']

    ],
    "TYPHIDOT CARD TEST":[
    ['IGM ANTIBODY TEST','','NA'],
    ['IGG ANTIBODY TEST','','NA']
    ],
    "IMMUNOLOGY-SEROLOGY(HHH)":[
        ['HBSag ( Australia Antigen )' ,"" ,'NA'],
       [ 'HCV ANTIBODY TEST' , '' ,'NA'],
       ['HIV ( AIDS ) ANTIBODY I & II' ,'' ,'NA'
       ],
       ['VDRL (Syphilies)' ,'', 'NA' 
       ],
      ],
      'HAEMATOLOGY(ICT)':[
        ['INDIRECT COOMBS TEST','', 'NEG/POS']
       ]


}


export default function Repo({ x,y}) {
     var dis=useDispatch()
     var report=useSelector((e)=>e.data.value)
     console.log(report)

    // console.log(update)
    const [est, settest] = useState({})
    
    const onhan = (e) => {
        let name = e.target.name
        let value = e.target.value
        settest({ ...est, [name]: value })
        // console.log(est)
    }
    var obj={data:est,['name']:x}
 

    return (
        <>
            <Box key={y} ml='50px' mt='50px' border={'2px'} borderColor='green' borderRadius={'15px'}>
                <Center>
                    <Text fontWeight={600} fontSize={'25px'} p='10px' color='green' borderRadius={'15px'} fontStyle="italic" borderLeft={'4px'} borderLeftColor='green '>{x}</Text>

                </Center>  {
                    test[x].map((e, i) => {

                        return (
                            <>
                                <HStack m='20px' color={'black'} fontWeight='500' key={i}>
                                    <Text w='300px'>{e[0]}</Text>
                                    <Input border='2px' name={e[0]} onChange={onhan} borderColor={'yellow.200'} w='100px'></Input>
                                    <Text w='100px'>{e[1]}</Text>
                                    <Text >{e[2]}</Text>
                                </HStack>

                            </>)
                    })
                }
                <>
                    <Center mb='30px'>
                        <Button colorScheme='whatsapp' onClick={()=>dis(add(obj))} >Save </Button>
                    </Center>
                </>
            </Box>
        </>
    )



}