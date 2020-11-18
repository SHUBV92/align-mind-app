const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({ extended: true })
);
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://shubv92:iloverakhi@align-mind.xukbk.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then((res) => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) =>{
        console.log("Error", err)
  })

app.get("/", (req, res) => {
  res.send("Hello my World Rakhi");
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
