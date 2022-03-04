import path from "path";

import express, { Application } from "express";
import bodyParser, { urlencoded } from "body-parser";
import multer from "multer";

import sequelize from "../util/database";
import Film from "../models/film";
import PaymentStatus from "../models/payment-status";
import Ticket from "../models/ticket";
import Session from "../models/session";
import Order from "../models/order";
import User from "../models/user";
import Genre from "../models/genre";

// const routes = require('./routes/cinema');

const app: Application = express();
const port = 3000;

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/svg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter }).single("image"));

app.use("/images", express.static(path.join(__dirname, "images")));
// app.use(routes);

User.hasMany(Order);
Order.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
Order.hasOne(PaymentStatus);
PaymentStatus.belongsTo(Order);
Session.hasMany(Order);
Order.belongsTo(Session);
Order.hasMany(Ticket);
Ticket.belongsTo(Order);
Film.hasMany(Genre);
Genre.belongsTo(Film);
Film.hasMany(Session, { constraints: true, onDelete: "CASCADE" });
Session.belongsTo(Film);
Ticket.belongsTo(Session);
Session.hasMany(Ticket, { constraints: true, onDelete: "CASCADE" }); //каждая сессия должна иметь места сколько в зале, чтобы их при покупке билета занимали

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log("here");

    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
// const port = 3000;

// app.use('/todos', todoRoutes);

// app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
//   res.status(500).json({message: err.message})
// })

// app.listen(3000);
