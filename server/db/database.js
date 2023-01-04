import { MongoClient } from "mongodb";

const DATABASE_NAME = "FoodProject";
const DATABASE_URL = `mongodb+srv://altan:16231077@cluster0.kz5jlji.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

export const db = {
  _dbClient: null,
  connect: async function () {
    const client = await MongoClient.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this._dbClient = client;
  },
  getConnection: function () {
    if (!this._dbClient) {
      console.log("Veritabanına Bağlanılamadı");
      process.exit(1);
    }
    return this._dbClient.db(DATABASE_NAME);
  },
};
