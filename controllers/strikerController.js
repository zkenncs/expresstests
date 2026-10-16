import { DBgetStrikerById } from "../db.js";

async function getStrikerById(req, res) {
  const strikerId = req.params.striker_id;
  console.log(strikerId);
  const striker = await DBgetStrikerById(+strikerId);
  if (!striker) {
    res.status(404).send("Striker Not Found!");
    return;
  }

  res.send(`Success! Striker Name: ${striker.name}`);
}

export { getStrikerById };