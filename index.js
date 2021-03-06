const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const cors = require("cors");
app.use(cors());
const getHtml = require('./getHtml')
const fetch = require("node-fetch");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`API server listening on port 3000!`);
});

app.post("/temp", upload.single("data"), async function (req, res) {
  const { create } = require("ipfs-http-client");

  if (!req.file) {
      return res.status(400).json({ status: 400, message: "no file" });
  }

  const ipfs = create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
const file = await ipfs.add(req.file.buffer);
res.send(file.path)
})

app.post("/two", jsonParser, async function (req, res) {
  console.log(req.body.hashes);

 

})






app.post("/add", jsonParser, async function (req, res) {
  const { create } = require("ipfs-http-client");

  // Array1 = files van post req
  // let array1 = req.body.hashes;
  // console.log(array1)
  // let cidObject = {};

  // for (const number of array1) {
  //   let filename = number.originalname;

  //   if (!filename) {
  //     return res.status(400).json({ status: 400, message: "no file" });
  //   }

  //   const ipfs = create({
  //     host: "ipfs.infura.io",
  //     port: "5001",
  //     protocol: "https",
  //   });

  //   const file = await ipfs.add(number.buffer);

  //   cidObject[filename] = file.path;
  // }

//   const html = getHtml(cidObject)

let cidObjectDict = req.body.hashes;
let cidObject = JSON.parse(cidObjectDict)

console.log(cidObject);
  async function submitEstuary() {
      // awaitupload ipfs moet test.js zijn
      console.log(cidObject)

    const html = getHtml(cidObject)
    

      // upload to ipfs
    const ipfs = create({
      host: "ipfs.infura.io",
      port: "5001",
      protocol: "https",
    });
    const file = await ipfs.add(html);
    cidObject["index.html"] = file.path
  
    console.log(cidObject)

    for (const [key, value] of Object.entries(cidObject)) {
        fetch("https://api.estuary.tech/content/add-ipfs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
          body: JSON.stringify({ name: `${key}`, root: `${value}` }),
        })
        .then(data => {
            // console.log(data);
          })
      }
      return cidObject["index.html"];
  }

  // const estuaryData = await submitEstuary()
  console.log(await submitEstuary()+'4')
  res.send('https://ipfs.io/ipfs/'+await submitEstuary())
});
