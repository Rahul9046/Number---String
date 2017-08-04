const assert=require("assert");
const main=require("../scripts/main")
describe("Converter",function(){
   it("is one hundred twenty five",function(){
        var test=main.factor("one hundred twenty five",0);
        assert.equal(test,125);
    });
     it("is one million twenty thousand five hundred forty six",function(){
        var test=main.findNum("one million twenty thousand five hundred forty six",0,0);
        assert.equal(test,1020546);
    });
});