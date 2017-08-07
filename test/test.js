describe("Number<-->String converter",function(){
 describe("testing for factor",function(){
      it("non-canonical numbers",function(){
            var test1=factor("two hundred and thirty two");
            expect(test1).toBe(232);
            var test2=factor("six hundred and six");
            expect(test2).toBe(606);
            var test3=factor("nine hundred and seventeen");
            expect(test3).toBe(917);
            var test4=factor("twenty one");
            expect(test4).toBe(21);
        });
      it("cardinal numbers without append",function(){
            var test1=factor("two hundred and thirty first");
            expect(test1).toBe(231);
            var test2=factor("six hundred and sixth");
            expect(test2).toBe(606);
            var test3=factor("nine hundred and seventeenth");
            expect(test3).toBe(917);
            var test4=factor("twenty fourth");
            expect(test4).toBe(24);
        });  
  });
  describe("testing for findNum",function(){
      it("non-cardinal numbers",function(){
           var test1=findNum("one million two hundred thousand six hundred and fifty two",0,1,"");
           expect(test1).toBe(1200652);
           var test2=findNum("six million six hundred and twelve thousand six hundred and fifty two",0,1,"");
           expect(test2).toBe(6612652);
           var test3=findNum("six million twelve thousand six hundred and fifty two",0,1,"");
           expect(test3).toBe(6012652);
           var test4=findNum("twenty one quintillion eleven quadrillion nine trillion sixteen billion twelve million one hundred and twelve thousand nine hundred and ten",0,1,"");
           expect(test4).toBe(21011009016012112910);
           var test5=findNum("one thousand and sixty one",0,1,"");
           expect(test5).toBe(1061);
      });
      it("cardinal numbers",function(){
           var test1=findNum("one million two hundred thousand six hundred and fifty second",0,1,"");
           expect(test1).toBe("1200652nd");
          var test2=findNum("six million six hundred and twelve thousand six hundred and seventeenth",0,1,"");
           expect(test2).toBe("6612617th");
           var test3=findNum("six million twelve thousand six hundred and seventeenth",0,1,"");
           expect(test3).toBe("6012617th");
           var test4=findNum("twenty one million six hundred thousand and fifty sixth",0,1,"");
           expect(test4).toBe("21600056th");
           var test4=findNum("twenty first",0,1,"");
           expect(test4).toBe("21st");
      });
  }); 
 describe("testing for findStr",function(){
   it("non-cardinal numbers",function(){
     var test1=findStr("1200652");
      expect(test1).toBe("one million two hundred thousand six hundred and fifty two");
      var test2=findStr("11200616");
      expect(test2).toBe("eleven million two hundred thousand six hundred and sixteen");
      var test3=findStr("1024");
      expect(test3).toBe("one thousand and twenty four");
      var test4=findStr("610");
      expect(test4).toBe("six hundred and ten");
      var test5=findStr("106");
      expect(test5).toBe("one hundred and six");
      var test6=findStr("1000010");
      expect(test6).toBe("one million ten");
   }); 
   it("cardinal numbers",function(){
      var test1=findStr("1200652nd");
      expect(test1).toBe("one million two hundred thousand six hundred and fifty second");
      var test2=findStr("11200616th");
      expect(test2).toBe("eleven million two hundred thousand six hundred and sixteenth");
      var test2=findStr("1012th");
      expect(test2).toBe("one thousand and twelfth");
   });  
 });  
 describe("testing for parsedStr",function(){
    it("non-cardinal strings",function(){
      var test1=new StrToNum("This is twenty one").parseStr();
      expect(test1).toBe("This is 21");
      var test2=new StrToNum("There are two hundred thousand six hundred and ten classes and one million sixteen hundred students in this university").parseStr();
      expect(test2).toBe("There are 200610 classes and 1001600 students in this university");
      var test3=new StrToNum("His score is two thousand").parseStr();
      expect(test3).toBe("His score is 2000");
     });
     it("cardinal strings",function(){
      var test1=new StrToNum("This is twenty first").parseStr();
      expect(test1).toBe("This is 21st");
      var test2=new StrToNum("He came third in the class out of three hundred and sixty students").parseStr();
      expect(test2).toBe("He came 3rd in the class out of 360 students");
     });
 });
 describe("testing for parsedNum",function(){
     it("non-cardinal strings",function(){
         var test1=new NumToStr("My age is 23").parseNum();
         expect(test1).toBe("My age is twenty three");
         var test2=new NumToStr("There are 1020100015 stars in the sky").parseNum();
         expect(test2).toBe("There are one billion twenty million one hundred thousand and fifteen stars in the sky");
         var test3=new NumToStr("He had 2 eggs with 4 breads").parseNum();
         expect(test3).toBe("He had two eggs with four breads");
     });
     it("cardinal strings",function(){
         var test1=new NumToStr("This is 21st century").parseNum();
         expect(test1).toBe("This is twenty first century");
         var test2=new NumToStr("This is the 1020100015th star in the sky").parseNum();
         expect(test2).toBe("This is the one billion twenty million one hundred thousand and fifteenth star in the sky");
     });
 }); 
});
