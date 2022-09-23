import { Heading, Button,Flex, HStack, Text, Input, Box, Center,Image, Spacer } from "@chakra-ui/react"
import { useEffect, useState } from "react"




export default function Helperprint({test}){
    console.log(test)

if(test=='ESR'){
    return (
        <>
        <Box maxW={'800px'} m='auto' pt='20px'>
<Text border={'1px'} p='1.5px'w= 'max-content' fontStyle={'italic'}> Sample Type : Whole Blood</Text>
<Text fontWeight={'500'}>
COMMENTS :
</Text>
<Text lineHeight={'17px'} fontSize='15px'>
ESR is an acute phase reactant which indicates presence and intensity of an inflammatory process . It is never diagnostic
of a specific disease . It is used to monitor the course or response to treatment of certain diseases . Extremely high levels
are found in cases of malignancy, hematologic diseases, collagen disorders and renal diseases
</Text>
<Text textDecoration={'underline'}>
Increased levels may indicate : 
</Text>
<Text lineHeight={'17px'} fontSize='15px'>
Chronic renal failure (e. g, nephritis ,nephrosis) , malignant diseases (e . g, multiple myeloma , Hodgkin disease ,
advanced carcinomas ) , bacterial infections ( e .g , abdominal infections , acute pelvic inflammatory disease , syphilis ,
pneumonia ) , inflammatory diseases (e .g. temporal arteritis , polymyalgia rheumatic , rheumatoid arthritis , rheumatic
fever , systemic lupus erythematosus (SLE) ,necrotic diseases (e .g , acute myocardial infection , necrotic tumor ,
gangrene of an extremity ) , diseases associated with increased proteins (e.g. , hyperfibrinogenemia , macroglobulinemia)
, and severe anemias (e.g.,iron deficiency or B12 deficiency )
</Text>
<Text textDecoration={'underline'}>
Increased levels may indicate : 
</Text>
<Text lineHeight={'17px'} fontSize='15px'>
Sickle cell anemia , spherocytosis , hypofibrinogenemia , or polycythemia vera . 

</Text>
<Text m='10px'>
        **End of Reports**
        </Text>
        </Box>
        </>
    )
}
else if(test=='BIOCHEMISTRY'||test=='GLUCOSE TOLERANCE TEST ( GTT )'){
    return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>
        <Text border={'1px'} pr='2px' pl='2px'w= 'max-content' 
        fontStyle={'italic'}> Primary Sample Type : Fluoride Plasma</Text>
            <Text fontWeight={500}>
            Note:-
            <Text>* Test done on By Spectrum Kt+ Auto Biochemistry Analyser.
</Text>
            </Text>
            <Text m='10px'>
        **End of Reports**
        </Text>

        </Box>
        </>
    )

}
else if(test=='HAEMATOLOGY'){
    return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>
        <Text border={'1px'} p='1.5px'w= 'max-content' fontStyle={'italic'}> Sample Type : Whole Blood</Text>
          
        <Text m='10px'>
        **End of Reports**
        </Text>

        </Box>
        </>
    )

}
else if(test=='IMMUNOLOGY-SEROLOGY'){
    return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>
        <Text border={'1px'} p='1.5px'w= 'max-content' fontStyle={'italic'}> Sample Type : Whole Blood</Text>
            <Text fontWeight={500}>
            Note:-
            <ul>
                <li>
                In the gametogony stage, P. falciparum may not be secreted. Such carriers may show falsely negative 
result.
                </li>
                <li>
                This test is used to indicate therapeutic response. Positive test results 5 – 10 days post treatment indicate 
the possibility of a resistant strain of malaria
                </li>
                <li>
                 Test conducted on EDTA whole blood .

                </li>
            </ul>
            </Text>


        </Box>
        </>
    )

}else if(test=='WIDAL AGGLUTINATION TITRE(IMMUNOLOGY-SEROLOGY)'){
    return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>
        <Text border={'1px'} p='1.5px'w= 'max-content' fontStyle={'italic'}>Primary Sample Type : Serum
</Text>
          
<Text textDecoration={'underline'}>INTERPRETATION : -</Text>
    <Text>POSITIVE AGGLUTINATION AT TITRE OF 1 : 160 OR MORE ARE CONSIDERED
SIGNIFICANT HOWEVER RISING TITRE ON SUBSEQUENT.</Text>






        <Text m='10px'>
        **End of Reports**
        </Text>

        </Box>
        </>
    )

}else if(test=='DENGUE  ANTIBODY  TEST'){
    return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>

            <Box>
<Text textDecoration={'underline'}>REMARKS :</Text>
<Text>
This test determines simultasneously for the presence of IgM Antibodies to Dengue 
Virus. The total is panreactive to Dengue viruses
</Text>
<Text>

1, 2, 3 and 4 . Serum IgM Antibodies can be detected as early as three to five days after the 
onset of fever and generally persist for 30 to 90 days
</Text>
<Text>
It may be detected as long as eight months post – infection . Secondary infection is 
characterized by high IgG Antibody levels and may be accompanied by elevated Igm levels
</Text>
{/* <Box maxW={'500'}>
    <HStack><Text>Primary Dengue : 
</Text>
<Spacer></Spacer>
<Text>IgM Detected</Text>
</HStack>
<HStack><Text>Secondary Dengue :

</Text>
<Spacer></Spacer>
<Text> Both IgM & IgG Detected</Text>
</HStack>

</Box> */}
            </Box>
        {/* <Text border={'1px'} p='1.5px'w= 'max-content' fontStyle={'italic'}> Sample Type : Whole Blood</Text> */}
          
        <Text m='10px'>
        **End of Reports**
        </Text>

        </Box>
        </>
    )

}else if(test=='URINE ANALYSIS'){
    return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>
        <Text border={'1px'} pr='2px' pl='2px'w= 'max-content' 
        fontStyle={'italic'}> Primary Sample Type : Urine</Text>
          
            <Text border={'1px'} pr='2px' pl='2px'w= 'max-content' 
        fontStyle={'italic'}>Sample Method : Hexokinase
        </Text>
          <Box>
            <ul>
                <li>After 75 gms Glucose.
</li>
                <li>Mainly used for gestational diabetes.
</li>
                <li>According to recent American diabetes association criteria.
</li>
            </ul>
          </Box>

          <Text fontWeight={400}>
NOTE :-
          </Text>
          <Text ml='20px'> 
          All refrence ranges are age and sex matched. Reference limits mentioned herein are in accordance <br></br>
          With the literature provided along with kit which may change with the change in chemistry or the kit. 


          </Text>
            <Text m='10px'>
        **End of Reports**
        </Text>

        </Box>
        </>
    )

}else if(test=='IMMUNOLOGY'){
 return (
        <>
        <Box maxW={'800px'} m='auto'  p='20px'>
        <Text border={'1px'} p='1.5px'w= 'max-content' fontStyle={'italic'}>Primary Sample Type : Plain Serum
</Text>
<Box>
<Text>
INTERPRETATION :
</Text>
<ul ml='80px'>
<li>The Onsite Chikungunya Igm rapid test is limited to the qualitative detection of IgM in human sera.
</li>
<li>The test is intended to be used as screening test.
</li>
<li>Any reactive specimen must confirmed with alternate testing methods and clinical findings.
</li>
<li>A negative result indicates absence of detectable IgM antibodies. However a negative result does not 
preclude the possibility of exposure of infection with chikungunya.

</li>
<li>Kindly correlate the result with clinical findings.
</li>
<li>
Chikungunya is a fever caused by an alphavirus that is spread by mosquito bites Amdthsa gyptimosquitos. 
Major symptoms include flue, high fever, severe back pains, joint plains (sometime for a months,) rash on 
the trunks and limbs, vomiting and mild hemorrhaging ( in children).

</li>
</ul>
    
</Box>
          
        <Text m='10px'>
        **End of Reports**
        </Text>

        </Box>
        
        </>)
}

}