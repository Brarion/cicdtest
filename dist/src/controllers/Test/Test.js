"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _services_1 = require("../../services");
const TestController = {
    test: (req, res) => {
        const result = _services_1.TestService.test();
        res.status(200).send(result);
    }
};
exports.default = Object.freeze(TestController);
