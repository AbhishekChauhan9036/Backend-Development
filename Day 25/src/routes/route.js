const express = require("express");
const router = express.Router();

let players = [];

router.post("/players", function (req, res) {
  let newPlayer = req.body;
  let newPlayersName = newPlayer.name;
  let isNameRepeated = false;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == newPlayersName) {
      isNameRepeated = true;
      break;
    }
  }

  if (isNameRepeated) {
    res.send("This player was already added!");
  } else {
    players.push(newPlayer);
    res.send(players);
  }
});

module.exports = router;
