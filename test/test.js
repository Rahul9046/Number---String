const assert=require("assert");
const main=require("../scripts/main")
describe("Converter",function(){
   it("is one hundred twenty five",function(){
        var test=main.factor("one hundred twenty five",0);
        assert.equal(test,125);
    });
    it("should return 22",function(){
        var test=main.findNum("twenty two",0,0);
        assert.equal(test,22);
    });
    it("can parse sentences",function(){
        var test=main.parseSentence("There are three hundred thousand four hundred and twenty six people residing in a total of sixty six countries");
        assert.equal(test,"There are 300426 people residing in a total of 66 countries");
    });
});
