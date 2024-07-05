"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const cors_1 = __importDefault(require("cors"));
app_1.default.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
const PORT = process.env.PORT || 3000;
app_1.default.get("/", (req, res) => {
    res.send("Server is up and running!");
});
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
