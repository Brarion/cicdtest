"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createServer_1 = __importDefault(require("./createServer"));
const server = (0, createServer_1.default)();
server.listen(8000, () => {
    console.log('server started');
});
