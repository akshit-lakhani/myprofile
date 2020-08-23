var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");
var cors = require("cors")
const ngun = require("nodemailer-mailgun-transport")
const nodemailer = require("nodemailer");
const path = require('path')
const express = require('express')

const app = express();

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(3000, function (err) {
  if (err) {
    console.log(err);
  }



  app.use(express.urlencoded({
    extended: false
  }));
  app.use(express.json());

  app.post('/carloan', (req, res) => {
    console.log("Server data resp : ", req.body);
    res.json({ message: "Message Received !!!" })
  })

  app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, './app/components', 'Home.js'));
  })
});

console.log("Listening at localhost:3000");