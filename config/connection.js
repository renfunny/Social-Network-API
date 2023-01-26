const { connect, connection } = require("mongoose"); //extracts those two properties from mongoose module

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";

connect(connectionString, {
  useNewUrlParser: true, //tells mongoose to use the MongoDB driver's new connection URL parser
  useUnifiedTopology: true, //tells mongoose to take advantage of the new topology engine which can improve performance and reliability of the connection to MongoDB nodes
});

module.exports = connection;
