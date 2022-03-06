"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filmController_1 = require("../controllers/filmController");
const router = express_1.Router();
router.post('/', filmController_1.createFilm);
router.get('/', filmController_1.getTodos);
router.patch('/:id', filmController_1.updateTodo);
router.delete('/:id', filmController_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=film-routes.js.map