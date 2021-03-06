String.prototype.splitInTwo=function () {
    var twoParts=["",""];
    var splitStr=this.split(" ");
    for(var i=0; i<splitStr.length; i++) {
       if(splitStr[i]===arguments[0]) {
           for(var j=0; j<i; j++) {
               twoParts[0] +=splitStr[j]+" ";
           }
           for(var j=i+1; j<splitStr.length; j++){
               twoParts[1] +=splitStr[j]+" ";
           }
           break;
       }
    }
    return twoParts;
}
String.prototype.contains=function(arr){
    var splitStr=this.split("");
    for(var i=0;i<splitStr.length;i++){
      for(var a in arr){
        if(arr[a]===splitStr[i]){
           return true;
        }
      }
    }
    return false;
}
var keywords= {
               "factors": {
                          "one":1,
                          "two":2,
                          "three":3,
                          "four":4,
                          "five":5,
                          "six":6,
                          "seven":7,
                          "eight":8,
                          "nine":9,
                          "ten":10,
                          "eleven":11,
                          "twelve":12,
                          "thirteen":13,
                          "fourteen":14,
                          "fifteen":15,
                          "sixteen":16,
                          "seventeen":17,
                          "eighteen":18,
                          "nineteen":19,
                          "twenty":20,
                          "thirty":30,
                          "forty":40,
                          "fifty":50,
                          "sixty":60,
                          "seventy":70,
                          "eighty":80,
                          "ninety":90,
                          "hundred":100                  
               },
               "multipliers": {
                   "thousand":1000,
                   "million":1000000,
                   "billion":1000000000,
                   "trillion":1000000000000,
                   "quadrillion":1000000000000000,
                   "quintillion":1000000000000000000
               },
               "Ty": {
                   "2":"twenty",
                   "3":"thirty",
                   "4":"forty",
                   "5":"fifty",
                   "6":"sixty",
                   "7":"seventy",
                   "8":"eighty",
                   "9":"ninety"
               },
               "append": {
                   "3":"thousand",
                   "6":"million",
                   "9":"billion",
                   "12":"trillion",
                   "15":"quadrillion",
                   "18":"quintillion"
               },
               "cardinal": {
                   "first":[1,"st"],
                   "second":[2,"nd"],
                   "third":[3,"rd"],
                   "fourth":[4,"th"],
                   "fifth":[5,"th"],
                   "sixth":[6,"th"],
                   "seventh":[7,"th"],
                   "eigth":[8,"th"],
                   "ninth":[9,"th"],
                   "tenth":[10,"th"],
                   "eleventh":[11,"th"],
                   "twelfth":[12,"th"],
                   "thirteenth":[13,"th"],
                   "fourteenth":[14,"th"],
                   "fifteenth":[15,"th"],
                   "sixteenth":[16,"th"],
                   "seventeenth":[17,"th"],
                   "eighteenth":[18,"th"],
                   "nineteenth":[19,"th"],
                   "twentyth":[20,"th"]
               },
               "pluralMultipliers":{
                   "hundreds":"100s",
                   "thousands":"1000s",
                   "millions":"1000000s",
                   "billion":"1000000000s",
                   "trillion":"1000000000000s",
                   "quadrillion":"1000000000000000s",
                   "quintillion":"1000000000000000000s"
               }
            };
 var separators=['.','-',':','+','_','?','!',',','%','D'];                     


function StrToNum(str){
    this.str=str;
}
StrToNum.prototype.parseStr=function() {
   var str=processText(this.str,1);
   str=str.slice(0,str.length-1);
   var parsedStr="",toBeParsed="",flag=0;
   var splitStr=str.split(" ");
   for(var i=0; i<splitStr.length; i++) {
      if(keywords.factors.hasOwnProperty(splitStr[i].toLowerCase())) {
        if(splitStr[i+1]!==undefined && keywords.factors.hasOwnProperty(splitStr[i+1].toLowerCase())===false || splitStr[i+1]==="hundred" || splitStr[i]==="hundred" || (splitStr[i].slice(-2)==="ty" && splitStr[i+1].slice(-2)!=="ty")){
         toBeParsed +=splitStr[i].toLowerCase()+" ";
        if(i===splitStr.length-1) {
            toBeParsed=toBeParsed.slice(0,toBeParsed.length-1);   
            parsedStr+=findNum(toBeParsed,0,1,"")+" "; 
            toBeParsed="",flag=0;
        }
         flag=1; 
        }
        else{
               toBeParsed +=splitStr[i].toLowerCase()+" ";
               parsedStr+=findNum(toBeParsed,0,1,"")+" ";
               toBeParsed="";
               flag=0;   
        }    
        }
        else if(keywords.multipliers.hasOwnProperty(splitStr[i].toLowerCase())) {
        toBeParsed+=splitStr[i].toLowerCase()+" ";
        if(i===splitStr.length-1) {  
            parsedStr +=findNum(toBeParsed,0,1,"")+" ";
            toBeParsed="",flag=0;
        }
            flag=1; 
        }
        else if(keywords.cardinal.hasOwnProperty(splitStr[i].toLowerCase())) {
        toBeParsed+=splitStr[i].toLowerCase()+" ";
        if(i===splitStr.length-1) {
            toBeParsed=toBeParsed.slice(0,toBeParsed.length-1);    
            parsedStr +=findNum(toBeParsed,0,1,"")+" ";
            toBeParsed="",flag=0;
        }
            flag=1; 
        }
        else if(keywords.pluralMultipliers.hasOwnProperty(splitStr[i].toLowerCase())){
            parsedStr +=keywords.pluralMultipliers[splitStr[i].toLowerCase()]+" ";
        }
        else if(splitStr[i]==="and" && flag===1) {
            continue;
        }
        else {
            if(flag==1) {
            toBeParsed=toBeParsed.slice(0,toBeParsed.length-1);   
            parsedStr +=findNum(toBeParsed,0,1,"")+" "+splitStr[i]+" ";
            toBeParsed="",flag=0;
            }
            else {
                parsedStr +=splitStr[i]+" ";
            }
        }    
    }
    parsedStr=parsedStr.slice(0,parsedStr.length-1);
    return parsedStr;
   }
function NumToStr(num){
    this.num=num;
}     
NumToStr.prototype.parseNum=function () {
   var splitStr=this.num.split(" ");
   var parsedStr="";
   for(var i=0; i<splitStr.length; i++){
       for(var keys in keywords.pluralMultipliers){
         if(keywords.pluralMultipliers[keys]===splitStr[i]){
             splitStr[i]=keys;
         }
       }

   }
   for(var i=0; i<splitStr.length; i++) {
       splitStr[i]=checkInBtwForNum(splitStr[i]);
       for(var keys in keywords.pluralMultipliers){
          if(splitStr[i]===keywords.pluralMultipliers[keys]){ 
            parsedStr+=keys+" ";
            splitStr[i]="";
          }
       }
      if(splitStr[i].slice(-2)==="th" || splitStr[i].slice(-2)==="st" || splitStr[i].slice(-2)==="rd" || splitStr[i].slice(-2)==="nd") {
          if(isNaN(splitStr[i].slice(0,splitStr[i].length-2))===false) { 
             parsedStr +=findStr(splitStr[i])+" ";
          }
          else{
             parsedStr +=splitStr[i]+" "; 
          }
      }
      else if(isNaN(splitStr[i])===false && splitStr[i]!=="Infinity") {
         parsedStr +=findStr(splitStr[i])+" ";
      }
      else {
          parsedStr +=splitStr[i]+" ";
      }
   }
   parsedStr=parsedStr.slice(0,parsedStr.length-1);
   return parsedStr;
}

var findNum=function (str,number,firstCall,cardinalText) {
    var splitStr=str.split(" "),flag=0,iniStr;
    if(splitStr[splitStr.length-1].slice(-2)==="th" || splitStr[splitStr.length-1].slice(-2)==="st" || splitStr[splitStr.length-1].slice(-2)==="rd"||splitStr[splitStr.length-1].slice(-2)==="nd") {
            for(var keys in keywords.cardinal) {
                if(splitStr[splitStr.length-1]===keys) {
                cardinalText=keywords.cardinal[keys][1];
                }
            }
        }
      if(firstCall){
        iniStr=str;
      }      
      for(var i=0; i<splitStr.length; i++) {
        for(var keys in keywords.multipliers) {
            if(splitStr[i]===keys) {
             flag=1; 
               if(firstCall) {
                 firstCall=0;
                 if(str.splitInTwo(keys)[1] !== " " && str.splitInTwo(keys)[1] !== ""){
                   number=Number(factor(str.splitInTwo(keys)[0]))*keywords.multipliers[keys] + findNum(str.splitInTwo(keys)[1],number,firstCall,cardinalText)+cardinalText;  
                 }
                 else{
                    number=Number(factor(str.splitInTwo(keys)[0]))*keywords.multipliers[keys]+cardinalText; 
                 }
                if(cardinalText==="") {
                   number=Number(number);
                 } 
                }
             else{
                 number +=factor(str.splitInTwo(keys)[0])*keywords.multipliers[keys] + findNum(str.splitInTwo(keys)[1],number,firstCall,cardinalText); 
              }
            break; 
            }
        }
        if(flag) {
         break;
        }
        if(i===splitStr.length-1) {
                if(!number) {
                    if(firstCall) {
                       firstCall=0;
                       number=factor(str) + cardinalText;
                       if(cardinalText==="") {
                           number=Number(number);

                       }
                    }
                    else {
                        number=factor(str);
                    }
                    
                }
      }
    }
    if(number===0){ 
       return iniStr;
    }
    return number;
}

var factor=function (str) {
    fact=0;
    var splitStr=str.split(" ");
    for(var i=0; i<splitStr.length; i++){
       for(var keys in keywords.factors) {
           if(splitStr[i]===keys) {
              if(!fact) {
                fact=keywords.factors[keys];
              }
              else {
                if(keys==="hundred") {
                 fact*=keywords.factors[keys];
                }
                else {
                 fact +=keywords.factors[keys];   
                }  
              }
           }
       }   
        if(splitStr[i].slice(-2)==="th" || splitStr[i].slice(-2)==="st" || splitStr[i].slice(-2)==="rd"||splitStr[i].slice(-2)==="nd") {
            for(var keys in keywords.cardinal){
                if(splitStr[i]===keys) {
                fact=fact + keywords.cardinal[keys][0];
                cardinalText=keywords.cardinal[keys][1];
                }
            }
        }
    }
    return fact;
}

var findStr=function(num) {
    num=String(num),cardinalText="";
    if(isNaN(Number(num.slice(-2)))) {
       if(num.slice(-4,-3)==1) {
         cardinalText=num.slice(-4);
         num=num.slice(0,this.length-4) + "00";
       }
       else {
          cardinalText=num.slice(-3);
          num=num.slice(0,this.length-3) + "0";
       }
    }
    var text="",indexing=[];
    var splitStr=num.split("");
    for(var i=splitStr.length-1; i>=0; i--) {
        indexing.push(i);
    }
   for(var i=0; i<splitStr.length; i++) {
      if(indexing[i]%3==2) {
           for(var keys in keywords.factors) {
               if(keywords.factors[keys]==splitStr[i]) {
                   text +=keys + " hundred ";
               }
           }
      }
       else if(indexing[i]%3==1) {
           if(splitStr[i]!=1) {
               for(var keys in keywords.Ty) {
                  if(keys==splitStr[i]) {
                     if(text.split(" ").slice(-2,-1)=="hundred" || text.split(" ").slice(-2,-1)=="thousand") {
                        text +="and "+keywords.Ty[keys]+" "; 
                     } 
                     else {
                        text +=keywords.Ty[keys]+" "; 
                     }                   
                  }
               }
           }
           else {
               if(splitStr[i+1]!=0) {
                 for(var keys in keywords.factors) {
                   if(keywords.factors[keys]==(splitStr[i]+splitStr[i+1])) {
                      if(text.split(" ").slice(-2,-1)=="hundred" || text.split(" ").slice(-2,-1)=="thousand") {
                        text +="and "+keys+" "; 
                        splitStr[i+1]=0;
                      } 
                      else {  
                        text +=keys+" ";
                        splitStr[i+1]=0;
                       }
                   }
                 }
               }
              else {
                  if(text.split(" ").slice(-2,-1)=="hundred" || text.split(" ").slice(-2,-1)=="thousand") {
                        text+="and ten "; 
                      }
                  else {                  
                    text +="ten ";
                  }
                }
           }          
       }
       else {
           if(splitStr[i]!=0) {
              for(var keys in keywords.factors) {
                 if(keywords.factors[keys]==splitStr[i]) {
                    if(text.split(" ").slice(-2,-1)=="hundred" || text.split(" ").slice(-2,-1)=="thousand") {
                        text +="and "+keys+" "; 
                      } 
                    else {
                        text +=keys+" ";
                    } 
                    
                 }
              }
           }
           for(var keys in keywords.append) {
             if(indexing[i]==keys) {
                 if(splitStr[i]!=0 || splitStr[i-1]!=0 || splitStr[i-2]!=0)
                   text +=keywords.append[keys]+" ";
             }
           }
       }
   }
   if(cardinalText!=="") {
      for(var keys in keywords.cardinal) {
         if(cardinalText==keywords.cardinal[keys][0] + keywords.cardinal[keys][1]) {
          if(text.split(" ").slice(-2,-1)=="hundred" || text.split(" ").slice(-2,-1)=="thousand") {   
             text +="and "+keys;
           }
          else {
             text +=keys;
          } 
         }
      }
   }
   if(text.slice(-1)==" ") { 
     text=text.slice(0,this.length-1);
   }
   return text;
}

var processText=function(str){ 
   if(arguments[1]===1){
     var pattern=/[A-z]/;
   }
   else{
     var pattern=/[0-9A-z]/;
   }
   var splitStr=str.split(" "),processedText="";
   for(var i=0; i<splitStr.length; i++){
     if(splitStr[i].contains(separators)){
        var toBeParsed=[],index=0,splitAgain=splitStr[i].split("");
        toBeParsed[index]="";  
        for(var j=0; j<splitAgain.length; j++){
          if(pattern.test(splitAgain[j]) && splitAgain[j].contains(separators)===false){
             toBeParsed[index]+=splitAgain[j];
        }
      else{
          
          toBeParsed[++index]=splitAgain[j];
          index+=1;
          toBeParsed[index]="";
      }
       }
   if(toBeParsed[toBeParsed.length-1]===""){
     toBeParsed.pop();
    }
    processedText+=toBeParsed.join(" ").toString()+" ";
     }
     else{
         processedText+=splitStr[i]+" ";
     }
   }
 return processedText;
}
var checkInBtwForNum=function(str){
    var splitStr=str.split(""),parsedStr="",toBeParsed="";
    for(var i=0;i<splitStr.length;i++){ 
      if((isNaN(splitStr[i-1])===false) && ((splitStr[i]=='s' && splitStr[i+1]=='t') || (splitStr[i]=='r' && splitStr[i+1]=='d') || (splitStr[i]=='t' && splitStr[i+1]=='h') || (splitStr[i]=='n' && splitStr[i+1]=='d'))){
              toBeParsed+=splitStr[i];
              if(i===splitStr.length-1){
               parsedStr+=findStr(toBeParsed);
              }
      }  
      else if((isNaN(splitStr[i-2])===false) && ((splitStr[i]=='t' && splitStr[i-1]=='s') || (splitStr[i]=='d' && splitStr[i-1]=='r') || (splitStr[i]=='h' && splitStr[i-1]=='t') || (splitStr[i]=='d' && splitStr[i-1]=='n'))){
              toBeParsed+=splitStr[i];
              if(i===splitStr.length-1){
               parsedStr+=findStr(toBeParsed);
              }
      }
      else if(isNaN(splitStr[i])===false){
         toBeParsed+=splitStr[i];
         if(i===splitStr.length-1){
           parsedStr+=findStr(toBeParsed);
         }
      }
      else{
          if(toBeParsed!==""){
            parsedStr+=findStr(toBeParsed)+splitStr[i];
            toBeParsed="";
          }
          else{
              parsedStr+=splitStr[i];
          }
      }
    }
    return parsedStr;
}
