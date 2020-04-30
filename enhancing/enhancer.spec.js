const enhancer = require("./enhancer.js");
const { repair,succeed ,fail} = require("./enhancer");
// test away!
describe("testing the repair function", () => {
  describe("testing durablity", () => {
    it("goes to 100", () => {
      const equipped = {
        name: "Hades",
        durability: 200,
        enhancement: 20,
      };

      const changed = {
        name: "Hades",
        durability: 100,
        enhancement: 20,
      };

      const repairItem = repair(equipped);

      expect(repairItem).toEqual(changed);
    });
  });
});

describe("testing the succeed function",()=>{
    it(" checks if the enhancement incereases by 1 ",()=>{
        const guns={
            name:"SMG-123",
            durability:100,
            enhancement:19
        }
        const pistols={
            name:"SMG-123",
            durability:100,
            enhancement:20
        }

        const enhancedItem=succeed(guns);
        expect(enhancedItem).toEqual(pistols)
    })
})

describe("testing the succeed function",()=>{
    it(" checks if the item enhancement is 20 then the ehancement is not changed ",()=>{
        const guns={
            name:"SMG-123",
            durability:100,
            enhancement:19
        }
        const pistols={
            name:"SMG-123",
            durability:100,
            enhancement:20
        }

        const enhancedItem=succeed(guns);
        expect(enhancedItem).toEqual(pistols)
    })
})

describe("testing the fail function", ()=>{
    it("checks If the item's enhancement is less than 15, the durability of the item is decreased by 5", ()=>{
        const item={
            name:"Wangdi",
            durability:50,
            enhancement:14
        }
        const expected={
            name:"Wangdi",
            durability:45,
            enhancement:14
        }
         
    const failedItem=fail(item);
    expect(failedItem).toEqual(expected)
    })
})

describe("testing the fail function", ()=>{
    it ("checks if the item's enhancement is 15 or more, the durability of the item is decreased by 10.",()=>{
        const item={
            name:"Wangdi",
            durability:50,
            enhancement:15
        }
        const expected={
            name:"Wangdi",
            durability:40,
            enhancement:15
        }
        const failedItem=fail(item);
        expect(failedItem).toEqual(expected)
    })
})

describe("testing the fail function", ()=>{
    it ("checks if the item's enhancement level is greater than 16, the enhancement level decreases by 1",()=>{
        const item={
            name:"Wangdi",
            durability:40,
            enhancement:18
        }
        const expected={
            name:"Wangdi",
            durability:40,
            enhancement:17
        }
        const failedItem=fail(item);
        expect(failedItem).toEqual(expected)
    })
})