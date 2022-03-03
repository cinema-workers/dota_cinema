"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_1 = __importDefault(require("../util/database"));
const film_1 = __importDefault(require("../models/film"));
const payment_status_1 = __importDefault(require("../models/payment-status"));
const ticket_1 = __importDefault(require("../models/ticket"));
const session_1 = __importDefault(require("../models/session"));
const order_1 = __importDefault(require("../models/order"));
const user_1 = __importDefault(require("../models/user"));
const genre_1 = __importDefault(require("../models/genre"));
// const routes = require('./routes/cinema');
const app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: false }));
// app.use(routes);
order_1.default.belongsTo(user_1.default, { constraints: true, onDelete: 'CASCADE' });
order_1.default.hasOne(payment_status_1.default);
order_1.default.belongsTo(film_1.default);
order_1.default.hasMany(ticket_1.default);
film_1.default.hasMany(genre_1.default);
film_1.default.hasMany(session_1.default, { constraints: true, onDelete: 'CASCADE' });
session_1.default.hasMany(ticket_1.default, { constraints: true, onDelete: 'CASCADE' }); //каждая сессия должна иметь места сколько в зале, чтобы их при покупке билета занимали
database_1.default.sync({ force: true }).then(result => {
    console.log('here');
    app.listen(3000);
}).catch(err => {
    console.log(err);
});
// const port = 3000;
// app.use('/todos', todoRoutes);
// app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
//   res.status(500).json({message: err.message})
// })
// app.listen(3000);
//# sourceMappingURL=server.js.map