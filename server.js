const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("public"));

app.get("/",(req,res) =>{
  res.sendFile(path.resolve(__dirname,"index.html"))
})

app.listen(PORT,() =>{
  console.log(`Server running on PORT ${PORT}`);
})
