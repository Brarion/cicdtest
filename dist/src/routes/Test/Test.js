"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _controllers_1 = require("../../controllers");
const TestRouter = (0, express_1.Router)();
// Регистрация через Почту
TestRouter.route('/test').get(_controllers_1.TestController.test);
exports.default = Object.freeze(TestRouter);
