const Student = require("../about");
const fs = require("fs");
const path = require("path");
const express = require('express');
const router = express.Router();
const app = express();
import about from '../views/about'


module.exports.about = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      return res.render(about);
    } else {
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

app.get('/about', (req, res) => {
  res.render('about'); // Render the 'index.ejs' file
});
