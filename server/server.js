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
