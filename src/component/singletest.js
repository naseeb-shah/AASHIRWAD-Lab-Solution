import { HStack, Text } from "@chakra-ui/react"

 let val={ 'HAEMOGLOBIN (HB)': [ 'HAEMOGLOBIN (HB)', 'gm/dl', '11 – 16' ],
  'TOTAL LEUCOCYTE COUNT': [ 'TOTAL LEUCOCYTE COUNT', '/cumm', '4000 - 11000' ],
  "NEUTROPHIL": [ 'NEUTROPHIL', ' %', '45-75' ],
  "LYMPHOCYTE": [ 'LYMPHOCYTE', '%', '20-40' ],
  "EOSINOPHIL": [ 'EOSINOPHIL', '%', '01-06' ],
  "MONOCYTE": [ 'MONOCYTE', '%', '0-5' ],
"BASOPHIL": [ 'BASOPHIL', '%', '0-01' ],
 'R B C (Red Blood Cells) ': [ 'R B C (Red Blood Cells) ', 'Mlllions/cmm ', '3.8 - 5.8 ' ],
  'PLATELET COUNT': [ 'PLATELET COUNT', 'Lakh/cumm', '1.50-4.50' ],
  'P.C.V /  HAEMATOCRIT': [ 'P.C.V /  HAEMATOCRIT', '%', '35-47' ],
  'M C V': [ 'M C V', 'fl', '80-96' ],
  'M C H': [ 'M C H', 'picogram', '26-34' ],
  'M C H C': [ 'M C H C', '%', '32-36' ],
  "RDW": [ 'RDW', '%', '10.0-15.0' ],
"TOTAL EOSINOPHIL COUNT"  :      ['TOTAL EOSINOPHIL COUNT' , '%', '40 – 440'],
  'ERYTHROCYTE SADIMENTATION RATE': [ 'ERYTHROCYTE SADIMENTATION RATE', 'mm/1st hr', ' 0-20 ' ],
  'TOTAL BIURUBIN': [ 'TOTAL BIURUBIN', 'mg/di', '0.00-1.00' ],
  'CONJUGATED (D. Bilinabin)': [ 'CONJUGATED (D. Bilinabin)', 'mg/di', '0.1-0.4' ],
  'UNCONJUGATED(I.D.Bilinabin)': [ 'UNCONJUGATED(I.D.Bilinabin)', 'mg/di', '0.2- 0.6' ],
  'AST/ SGOT': [ 'AST/ SGOT', 'U/L', '5-40' ],
  'ALT/SGPT': [ 'ALT/SGPT', 'U/L', '5-40' ],
  'ALKAUNE PHOSPHATASE': [ 'ALKAUNE PHOSPHATASE', 'IU/L', '28-78' ],
  "TOTALPROTEIN": [ 'TOTALPROTEIN', 'gm/di', '6.8-8.2' ],
  "ALBUMIN": [ 'ALBUMIN', 'gm/di', '3.5', '-', '5.5' ],
  "GLOBUUN": [ 'GLOBUUN', 'gm/di', '3-4.5' ],
  'A/GRatio': [ 'A/GRatio', ' ', '1.0-2.3' ],
  "CHOLESTEROL": [ 'CHOLESTEROL', 'mg/di', '130-200' ],
  "TRIGLYCRIDES": [ 'TRIGLYCRIDES', 'mg/di', '80-200' ],
  'HDL CHOLESTEROL': [ 'HDL CHOLESTEROL', 'mg/di', '36-65' ],
  'LDL CHOLESTEROL': [ 'LDL CHOLESTEROL', 'mg/di', '90-150' ],
  'VLDL CHOLESTEROL': [ 'VLDL CHOLESTEROL', 'mg/di', '15-35' ],
  'CHOL / HDL RATIO': [ 'CHOL / HDL RATIO', '', '0-4.50' ],
  'LDL / HDL RATIO': [ 'LDL / HDL RATIO', '', '0-3.50' ],
  'MP CARD ( Antigen )': [ 'MP CARD ( Antigen )', '', 'NA' ],
  'S.TYPHI"H" ': [ 'S.TYPHI"H" ', '', 'NA' ],
  'S.TYPHI"O" ': [ 'S.TYPHI"O" ', '', 'NA' ],
  'S.TYPHI"AH" ': [ 'S.TYPHI"AH" ', '', 'NA' ],
  'S.TYPHI"BH" ': [ 'S.TYPHI"BH" ', '', 'NA' ],
"RESULT" : ['RESULT', "", "NAG/POS"],
  "UREA": [ 'UREA', 'mg/dl', '13-15' ],
  'S CREATININE': [ 'S CREATININE', 'mg/dl', '0.6-1.4' ],
  'URIC ACID': [ 'URIC ACID', 'mg/dl', '2.0-6.0' ],
  "CALCIUM": [ 'CALCIUM', 'mg/dl', '8.5-10.5' ],
  'PLASMA GLUCOSE (FASTING)': [ 'PLASMA GLUCOSE (FASTING)', 'mg/dl', '≤95' ],
  'PLASMA GLUCOSE (P.P)': [ 'PLASMA GLUCOSE (P.P)', 'mg/dl', '≤140' ],
  'PLASMA GLUCOSE (Random)': [ 'PLASMA GLUCOSE (Random)', 'mg/dl', '≤150' ],
  'DENGUE  NS1Ag': [ 'DENGUE  NS1Ag', '', 'Neg/Pos' ],
  'DENGUE  IGM': [ 'DENGUE  IGM', '', 'Neg/Pos' ],
  'DENGUE  IGG': [ 'DENGUE  IGG', '', 'Neg/Pos' ],
  'PLASMA GLUCOSE (1 HOUR)': [ 'PLASMA GLUCOSE (1 HOUR)', 'mg/dl', '≤155' ],
  'PLASMA GLUCOSE (2 HOUR)': [ 'PLASMA GLUCOSE (2 HOUR)', 'mg/dl', '≤180' ],
  'URINE FOR SUGAR(FASTING)': [ 'URINE FOR SUGAR(FASTING)', '', 'NA' ],
  'URINE FOR SUGAR(1 HOUR)': [ 'URINE FOR SUGAR(1 HOUR)', '', 'NA' ],
  'URINE FOR SUGAR(2 HOUR)': [ 'URINE FOR SUGAR(2 HOUR)', '', 'NA' ],
  'Chikungunya virus Ab Igm': [ 'Chikungunya virus Ab Igm', '', 'NEG/POS' ],
  "COLOR": [ 'COLOR', '', '' ],
  "REACTION": [ 'REACTION', '', 'ACIDIC' ],
  "CONSISTENCY": [ 'CONSISTENCY', '', '' ],
  "BLOOD": [ 'BLOOD', '', 'NIL' ],
  "OVA": [ 'OVA', '', 'NIL' ],
  "CYSTS": [ 'CYSTS', '', 'NIL' ],
  "RBCs": [ 'RBCs', '/HPF', 'NIL' ],
  'PUS CELLS': [ 'PUS CELLS', '/HPF', 'NIL' ],
  "BACTERIA": [ 'BACTERIA', '', 'NIL' ],
  'VEG CELL': [ 'VEG CELL', '', 'NIL' ],
  'STOOL FOR OCCULT BLOOD': [ 'STOOL FOR OCCULT BLOOD', '', 'NEG/POS' ],
  'IGM ANTIBODY TEST': [ 'IGM ANTIBODY TEST', '', 'NA' ],
  'IGG ANTIBODY TEST': [ 'IGG ANTIBODY TEST', '', 'NA' ] ,
  'HBSag ( Australia Antigen )':  ['HBSag ( Australia Antigen )' ,"" ,'NA'],
  'HCV ANTIBODY TEST':[ 'HCV ANTIBODY TEST' , '' ,'NA'],
  'HIV ( AIDS ) ANTIBODY I & II': ['HIV ( AIDS ) ANTIBODY I & II' ,'' ,'NA'
  ],
  'VDRL (Syphilies)':  ['VDRL (Syphilies)' ,'', 'NA' 
]
,'INDIRECT COOMBS TEST':['INDIRECT COOMBS TEST','', 'NEG/POS']

}







export default function SingleTest({test,g}){

 const Sai=(x)=>{
    if(x.includes('H')||x.includes('h')||x.includes('L')||x.includes('l')){
    
        return(<>
        <Text fontWeight={400} color={'red'}>{x}</Text>
        </>)

    }
    else  {
        return(<>
        
        <Text>{x}</Text>
        </>)

    }
    
    // if(x.includes)
    
 }


 
    return(
        <>
        {/* <Text>{JSON.stringify(test)}</Text> */}
        {
            g.map((e)=>{
                return(
                    <><HStack maxWidth={'800px'} m='auto' pr='5px' pl='5px' >
                    <Text w='300px'>{e}</Text> <Text w='150px'>{Sai(test[e])}</Text>
                    <Text w='100px'>{val[e][1]}</Text>
                    <Text w='150'>{val[e][2]}</Text>
                    
                    </HStack>
                   
                    </>
                )
            })
        }
 
        </>
    )
}