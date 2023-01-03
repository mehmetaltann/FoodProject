import { MongoClient } from "mongodb";

export const exampleRoute = {
  method: "get",
  path: "hello",
  handler: async (req, res) => {
    res.send("Merhabaa !!!");
  },
};

