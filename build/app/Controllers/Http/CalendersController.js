"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calender_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Calender"));
const StoreCalenderValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreCalenderValidator"));
class CalendersController {
    async index({ response }) {
        const calender = await Calender_1.default.all();
        return response.send(calender);
    }
    async store({ request, response }) {
        const payload = await request.validate(StoreCalenderValidator_1.default);
        const calender = await Calender_1.default.create(payload);
        return response.send(calender);
    }
}
exports.default = CalendersController;
//# sourceMappingURL=CalendersController.js.map