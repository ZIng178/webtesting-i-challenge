const enhancer = require('./enhancer.js');
const {repair}=require("./enhancer")
// test away!
describe("testing the repair function",()=>{
    describe('testing durablity',()=>{
     it ('goes to 100', ()=>{
       const equipped= {
        name:"Hades",
        durability:200,
        enhancement:20
       }

       const changed={
        name:"Hades",
        durability:100,
        enhancement:20 
       }

      const repairItem=repair(equipped)

       expect(repairItem).toEqual(changed);

     })
    })
   

})
