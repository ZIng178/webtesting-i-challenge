module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairItem={
    name:item.name,
    durability:100,
    enhancement:item.enhancement
  }
  return repairItem;
}

function get(item) {
  return { ...item };
}
