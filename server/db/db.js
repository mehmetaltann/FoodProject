import { MongoClient } from "mongodb";

export const DB_Name = "FoodProject";
export const DB_Adress =
  "mongodb+srv://altan:16231077@cluster0.kz5jlji.mongodb.net/FoodProject?retryWrites=true";

export const db = {
  _dbClient: null,
  connect: async function (url) {
    const client = MongoClient.connect(url, {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this._dbClient = client;
  },
  getConnection: function () {
    if (!this._dbClient) {
      console.log("You need to call .connect() first!");
      process.exit(1);
    }

    return this._dbClient.db("DB_NAME");
  },
};
