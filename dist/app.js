"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const routes_1 = __importDefault(require("./config/routes"));
const database_1 = __importDefault(require("./config/database"));
require("dotenv/config");
app.use(express_1.default.static('public'));
app.use(routes_1.default);
(0, database_1.default)();
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
// unhandles error
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});
//# sourceMappingURL=app.js.map