var number=0,fact=0,flag=0;

var factor=function(str,fact){

    var splitStr=str.split(" ");
    console.log(splitStr);
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
    var splitStr=str.split(" ");
    for (var i=0; i<splitStr.length; i++) {
        if(splitStr[i]==="billion"){
             number=factor(splitStr[i].split("billion")[0].toString(),0)*1000000000;
             findNum(splitStr[i].split("billion")[1].toString());
             break;
        }
       else if(splitStr[i]==="million"){
             if(!number){
                number=factor(str.split("million")[0].toString(),0)*1000000;
             }
             else{
                number+=factor(str.split(" million")[0].toString(),0)*1000000;
             }
             findNum(str.split("million")[1].toString(),number,flag);
             break;
        }
       else if(splitStr[i]==="thousand"){
           
           if(!number){
             number=factor(str.split("thousand")[0].toString(),0)*1000;
           }
           else{
             number+=factor(str.split("thousand")[0].toString(),0)*1000;  
           }
             findNum(str.split("thousand")[1].toString(),number,flag);
             break;
        }
      else if(splitStr[i]==="hundred"){
          flag=1;
          if(!number){
             number=factor(str.split("hundred")[0].toString(),0)*100;
          } 
          else{
             number+=factor(str.split("hundred")[0].toString(),0)*100;
          }
             findNum(str.split("hundred")[1].toString(),number,flag);
             break;
        }
      else{
          if(flag){
              number+=factor(str,0);
              flag=0;
              console.log(number);
          }
      }     
    }
    return number;
}
module.exports={
    factor:factor,
    findNum:findNum
};
