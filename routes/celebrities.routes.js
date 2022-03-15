const router = require("express").Router();

// all your routes here
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", async (req, res) => {
  try {
    const allCelebrities = await Celebrity.find();
    console.log(allCelebrities);
    res.render("celebrities/celebrities", {allCelebrities});
  } catch (err) {}
});

router.get("/celebrities/create", async (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase,
    });
    res.redirect("/celebrities");
  } catch (err) {
    console.log("An error occured");
    res.render("celebrities/new-celebrity");
  }
});

module.exports = router;
