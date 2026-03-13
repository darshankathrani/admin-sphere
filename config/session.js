const session = require("express-session");
let MongoStore = require("connect-mongo");

module.exports = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.default.create({
    mongoUrl: process.env.MONGO_URI || "mongodb://localhost:27017/businessweb",
    collectionName: "sessions",
  }),
  cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false },
});
