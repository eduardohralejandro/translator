"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const masterRouters_1 = __importDefault(require("./routers/masterRouters"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/api', masterRouters_1.default);
const port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
