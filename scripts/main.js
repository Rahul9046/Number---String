var number=0,fact=0,flag=0;

var factor=function(str,fact){
    var splitStr=str.split(" ");
    for(var i=0;i<splitStr.length;i++){
      switch(splitStr[i]){
          case "ten":
                  if(!fact){
                    fact=10;
                  }
                  else{
                    fact+=10; 
                  } 
                   break;
          case "twenty":
                   if(!fact){
                    fact=20;
                  }
                  else{
                    fact+=20; 
                  } 
                   break;
          case "thirty":
                   if(!fact){
                    fact=30;
                  }
                  else{
                    fact+=30; 
                  } 
                   break;
          case "forty":
                   if(!fact){
                    fact=40;
                  }
                  else{
                    fact+=40; 
                  } 
                   break;
          case "fifty":
                   if(!fact){
                    fact=50;
                  }
                  else{
                    fact+=50; 
                  } 
                   break;
          case "sixty":
                   if(!fact){
                    fact=60;
                  }
                  else{
                    fact+=60; 
                  } 
                   break;
          case "seventy":
                   if(!fact){
                    fact=70;
                  }
                  else{
                    fact+=70; 
                  } 
                   break;
          case "eighty":
                   if(!fact){
                    fact=80;
                  }
                  else{
                    fact+=80; 
                  } 
                   break; 
         case "ninety":
                   if(!fact){
                    fact=90;
                  }
                  else{
                    fact+=90; 
                  } 
                   break;
         case "hundred":
                  fact*=100; 
                   break;
         case "one":
                   if(!fact){
                    fact=1;
                  }
                  else{
                    fact+=1; 
                  } 
                   break;
         case "two":
                   if(!fact){
                    fact=2;
                  }
                  else{
                    fact+=2; 
                  } 
                   break; 
         case "three":
                   if(!fact){
                    fact=3;
                  }
                  else{
                    fact+=3; 
                  } 
                   break;  
         case "four":
                   if(!fact){
                    fact=4;
                  }
                  else{
                    fact+=4; 
                  } 
                   break;  
         case "five":
                   if(!fact){
                    fact=5;
                  }
                  else{
                    fact+=5; 
                  } 
                   break;  
         case "six":
                   if(!fact){
                    fact=6;
                  }
                  else{
                    fact+=6; 
                  } 
                   break;
         case "seven":
                   if(!fact){
                    fact=7;
                  }
                  else{
                    fact+=7; 
                  } 
                   break;  
         case "eight":
                   if(!fact){
                    fact=8;
                  }
                  else{
                    fact+=8; 
                  } 
                   break;
         case "nine":
                   if(!fact){
                    fact=9;
                  }
                  else{
                    fact+=9; 
                  } 
                   break;                                                                                                                                                                          
      }
    }
    return fact;
}
var findNum=function (str,number,flag) {
    console.log(number,str);
    var splitStr=str.split(" ");
    for (var i=0; i<splitStr.length; i++) {
        if(splitStr[i]==="billion"){
             number=factor(splitStr[i].split("billion")[0].toString(),0)*1000000000+findNum(splitStr[i].split("billion")[1].toString(),number,flag);
             break;
        }
       else if(splitStr[i]==="million"){
             if(!number){
                number=factor(str.split("million")[0].toString(),0)*1000000+findNum(str.split("million")[1].toString(),number,flag);
             }
             else{
                number+=factor(str.split(" million")[0].toString(),0)*1000000+findNum(str.split("million")[1].toString(),number,flag);
             }
             break;
        }
       else if(splitStr[i]==="thousand"){
           
           if(!number){
             number=factor(str.split("thousand")[0].toString(),0)*1000+findNum(str.split("thousand")[1].toString(),number,flag);
           }
           else{
             number+=factor(str.split("thousand")[0].toString(),0)*1000+findNum(str.split("thousand")[1].toString(),number,flag);  
           }
             
             break;
        }
      else if(splitStr[i]==="hundred"){
          flag=1;
          if(!number){
             number=factor(str.split("hundred")[0].toString(),0)*100+ findNum(str.split("hundred")[1].toString(),number,flag);
          } 
          else{
             number+=factor(str.split("hundred")[0].toString(),0)*100+ findNum(str.split("hundred")[1].toString(),number,flag);
          }
             break;
        }
      else{
          if(flag){
              number+=factor(str,0);
              flag=0;
          }
          else if(i===splitStr.length-1){
              number=factor(str,0);
          }
      }     
    }

      return number;
    }

 var parseSentence=function(str){
      var splitStr=str.split(" "),
           parsedStr="",toBeParsed="",flag=0;
      for(var i=0;i<splitStr.length;i++){
          switch(splitStr[i]){
          case "ten":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="ten "; 
                   break;
          case "twenty":
                   if(!flag){
                     flag=1;
                  }
                  toBeParsed+="twenty "; 
                   break;
          case "thirty":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="thirty "; 
                   break;
          case "forty":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="forty "; 
                   break;
          case "fifty":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="fifty "; 
                   break;
          case "sixty":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="sixty "; 
                   break;
          case "seventy":
                  if(!flag){
                     flag=1
                  }
                  toBeParsed+="seventy "; 
                   break;
          case "eighty":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="eighty "; 
                   break; 
         case "ninety":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="ninety "; 
                   break;
         case "hundred":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="hundred ";
                   break;
         case "one":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="one ";
                   break;
         case "two":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="two "; 
                   break; 
         case "three":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="three "; 
                   break;  
         case "four":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="four "; 
                   break;  
         case "five":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="five "; 
                   break;  
         case "six":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="six "; 
                   break;
         case "seven":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="seven "; 
                   break;  
         case "eight":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="eight "; 
                   break;
         case "nine":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="nine "; 
                   break; 
         case "billion":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="billion "; 
                   break;   
         case "million":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="million "; 
                   break;
         case "thousand":
                  if(!flag){
                     flag=1;
                  }
                  toBeParsed+="thousand "; 
                   break;                           
                          
        default:
                if(!flag){
                    parsedStr+=splitStr[i]+" ";
                }
                else{
                      if(splitStr[i]!=="and"){
                       // console.log(toBeParsed);  
                        parsedStr+=findNum(toBeParsed,0,0)+" "+splitStr[i]+" ";
                        toBeParsed="";
                        flag=0;
                      }
                } 
          }              
         }
     parsedStr=parsedStr.slice(0,parsedStr.length-1);    
     return parsedStr;      
 }   

module.exports={
    factor:factor,
    findNum:findNum,
    parseSentence:parseSentence
};