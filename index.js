import express from "express";
import { MongoClient } from "mongodb";
const app = express();
import dotenv from 'dotenv'
dotenv.config()

//const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
const client = await createConnection();

app.get("/", (req, res) => {
  res.send("Hello Beauty");
});

app.use(express.json());

app.get("/movies", async (req, res) => {
  const movies = await client
    .db("b30wdt")
    .collection("movies")
    .find({})
    .toArray();
  res.send(movies);
});
//delete
app.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movies = await client
    .db("b30wdt")
    .collection("movies")
    .deleteOne({ id: id });
  res.send(movies);
});

app.listen(4000, () => {
  console.log("server started");
});

app.get("/movies/:id", async function (request, response) {
  console.log(request.params); // filter | find
  const { id } = request.params;
  const movies = await client
    .db("b30wdt")
    .collection("movies")
    .findOne({ id: id });
  movies ? response.send(movies) : response.status(404).send("NO movie found");
});

//Post Data

app.post("/movies", async (request, response) => {
  const data = request.body;
  const result = await client
    .db("b30wdt")
    .collection("movies")
    .insertMany(data);
  response.send(result);
});

//put data
app.put("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log(id);
  const movie = await client
    .db("b30wdt")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateData });
  res.send(movie);
});
// app.listen(4000, () => {
//   console.log("server started");
// });
