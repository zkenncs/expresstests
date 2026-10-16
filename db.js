const strikers = [
  {id: 1, name: "Dubu"},
  {id: 2, name: "Juno"},
  {id: 3, name: "Drekkar"},
];

async function DBgetStrikerById(id) {
  return strikers.find(striker => striker.id === id);
}

export { DBgetStrikerById };