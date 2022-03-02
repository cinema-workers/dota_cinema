import path from 'path';

import express from 'express';
import { urlencoded } from "body-parser";

import sequelize from '../util/database';
import Film from '../models/film';
import PaymentStatus from '../models/payment-status';
import Ticket from '../models/ticket';
import Session from '../models/session';
import Order from '../models/order';
import User from '../models/user';
import Genre from '../models/genre';

// const routes = require('./routes/cinema');

const app = express();

app.use(urlencoded({ extended: false }));

// app.use(routes);

Order.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
Order.hasOne(PaymentStatus);
Order.belongsTo(Film);
Order.hasMany(Ticket);
Film.hasMany(Genre);
Film.hasMany(Session, { constraints: true, onDelete: 'CASCADE' });
Session.hasMany(Ticket, { constraints: true, onDelete: 'CASCADE' }); //каждая сессия должна иметь места сколько в зале, чтобы их при покупке билета занимали

sequelize.sync({force: true}).then(result => {
  console.log('here');
  
  app.listen(3000);
}).catch(err => {
  console.log(err);
})
// const port = 3000;

// app.use('/todos', todoRoutes);

// app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
//   res.status(500).json({message: err.message})
// })

// app.listen(3000);