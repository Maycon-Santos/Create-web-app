const ids = [];

function generate() {
  const newID = '_' + Math.random().toString(36).substr(2, 9);
  if(ids.indexOf(newID) + 1) return generate();
  ids.push(newID);
  return newID;
}

module.exports = {
  get newID() { return generate(); }
}