const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const cors = require("cors");
app.use(cors());
const getHtml = require('./getHtml')
const fetch = require("node-fetch");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`API server listening on port 3000!`);
});

app.post("/add", upload.array("data"), async function (req, res) {
  const { create } = require("ipfs-http-client");

  // Array1 = files van post req
  let array1 = req.files;
  let cidObject = {};

  for (const number of array1) {
    let filename = number.originalname;

    if (!filename) {
      return res.status(400).json({ status: 400, message: "no file" });
    }

    const ipfs = create({
      host: "ipfs.infura.io",
      port: "5001",
      protocol: "https",
    });

    const file = await ipfs.add(number.buffer);

    cidObject[filename] = file.path;
  }

//   const html = getHtml(cidObject)


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
  


    for (const [key, value] of Object.entries(cidObject)) {
        fetch("https://api.estuary.tech/content/add-ipfs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ***REMOVED***",
          },
          body: JSON.stringify({ name: `${key}`, root: `${value}` }),
        })
        .then(data => {
            // console.log(data);
          })
      }
      return cidObject["index.html"];
  }

  const estuaryData = await submitEstuary()

  res.send(`https://ipfs.io/ipfs/${estuaryData}`)
});
