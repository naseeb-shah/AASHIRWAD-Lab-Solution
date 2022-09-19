const te = [ 
        ["HAEMOGLOBIN (HB)", "gm/dl", "11 – 16"],
        ["TOTAL LEUCOCYTE COUNT", "/cumm", "4000 - 11000"],
        ["NEUTROPHIL", " %", "45-75"],
        ["LYMPHOCYTE", "%", "20-40"],
        ['EOSINOPHIL', '03.00', '%', '01-06'],
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
      
      
      
      
      
      
        ["ERYTHROCYTE SADIMENTATION RATE", "mm/1st hr", " 0-20 "],
      
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
      ,
      
        ['CHOLESTEROL', 'mg/di', '130-200']
        ,
        ['TRIGLYCRIDES', 'mg/di', '80-200'],
        ['HDL CHOLESTEROL', 'mg/di', '36-65'],
        ['LDL CHOLESTEROL', 'mg/di', '90-150'],
        ['VLDL CHOLESTEROL', 'mg/di', '15-35'],
        ['CHOL / HDL RATIO', "", '0-4.50'],
        ['LDL / HDL RATIO', "", '0-3.50'],
      
        ['MP CARD ( Antigen )', "", "NA"],
        ['S.TYPHI"H" ', "", "NA"],
        ['S.TYPHI"O" ', "", "NA"],
        ['S.TYPHI"AH" ', "", "NA"],
        ['S.TYPHI"BH" ', "", "NA"],
      
        ['UREA', "mg/dl", '13-15'],
        ['S CREATININE', "mg/dl", '0.6-1.4'],
        ['URIC ACID', "mg/dl", '2.0-6.0'],
        ['CALCIUM', "mg/dl", '8.5-10.5'],
      
        ['PLASMA GLUCOSE (FASTING)', 'mg/dl', '≤110'],
        ['PLASMA GLUCOSE (P.P)', 'mg/dl', '≤140'],
        ['PLASMA GLUCOSE (Random)', 'mg/dl', '≤150'],
      
      
        ["DENGUE  NS1Ag", '', "Neg/Pos"],
        ["DENGUE  IGM", '', "Neg/Pos"],
        ["DENGUE  IGG", '', "Neg/Pos"],
      
        ['PLASMA GLUCOSE (FASTING)', 'mg/dl', '≤95'],
        ['PLASMA GLUCOSE (1 HOUR)', 'mg/dl', '≤155'],
        ['PLASMA GLUCOSE (2 HOUR)', 'mg/dl', '≤180'],
      
        ['URINE FOR SUGAR(FASTING)', '', 'NA'],
        ['URINE FOR SUGAR(1 HOUR)', '', 'NA'],
        ['URINE FOR SUGAR(2 HOUR)', '', 'NA'],
      
        ["Chikungunya virus Ab Igm" , '','NEG/POS'],
      
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
      ,
      
      ['IGM ANTIBODY TEST','','NA'],
      ['IGG ANTIBODY TEST','','NA']
      
      
      ] 
          var obj={}
          
                for(var j =0; j<te.length ;j++){
         obj={...obj,[te[j][0]]:te[j]}

                
                }
            console.log(obj)
        


