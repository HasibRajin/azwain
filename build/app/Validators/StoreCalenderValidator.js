"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Constant_1 = global[Symbol.for('ioc.use')]("App/Utils/Constant");
const Rules_1 = require("@adonisjs/validator/build/src/Rules");
class StoreCalenderValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            date: Validator_1.schema.date({ format: Constant_1.DATE_FORMAT }, [
                Rules_1.rules.unique({ table: 'calenders', column: 'date' }),
            ]),
            prayer_time: Validator_1.schema.object().members({
                fajr: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
                dhuhr: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
                asr: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
                maghrib: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
                isha: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
            }),
            iftar_time: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
            sehri_time: Validator_1.schema.string({}, [Rules_1.rules.regex(new RegExp(Constant_1.TIME_FORMAT))]),
        });
        this.messages = {};
    }
}
exports.default = StoreCalenderValidator;
//# sourceMappingURL=StoreCalenderValidator.js.map