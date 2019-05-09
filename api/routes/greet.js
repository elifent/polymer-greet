const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  const greets = [
    "Polymer",  
    "Webcomponents",
    "Templates",
    "Elements",
    "Lit Elements",
    "Material Design",
    "NPM",
    "DOM Elements",
    "Shadow DOM",
    "Paper Elements",
    "New Web",
    "ES Modules"

  ];
    const i = Math.floor(Math.random() * 11) + 1; 
    res.json({
    status: true,
    data: {
      greet: greets[i]
    }
  });
  res.end();
});

module.exports = router;
