const enhancer = require("./enhancer.js");
const { repair,succeed } = require("./enhancer");
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
            enhancement:10
        }
        const pistols={
            name:"SMG-123",
            durability:100,
            enhancement:11
        }

        const enhancedItem=succeed(guns);
        expect(enhancedItem).toEqual(pistols)
    })
})