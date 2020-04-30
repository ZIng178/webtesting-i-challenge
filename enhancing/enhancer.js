module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement + 1,
    };
    return newItem;
  } else if (item.enhancement===20){
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement
    }
    return newItem;
  }
}

function fail(item) {
  if (item.enhancement < 15 ) {
    const newItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement,
    };
    return newItem;
  } else if (item.enhancement >= 15 && item.enhancement <16  ) {
    const newItem = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return newItem;
  } else if (item.enhancement > 16) {
    const newItem = {
      name: item.name,
      durability: item.durability ,
      enhancement: item.enhancement - 1
    };
    return newItem;
  }
}

function repair(item) {
  const repairItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement,
  };
  return repairItem;
}

function get(item) {
  return { ...item };
}
