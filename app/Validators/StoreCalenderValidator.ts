import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DATE_FORMAT, TIME_FORMAT } from 'App/Utils/Constant'
import { rules } from '@adonisjs/validator/build/src/Rules'

export default class StoreCalenderValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    date: schema.date({ format: DATE_FORMAT }, [
      rules.unique({ table: 'calenders', column: 'date' }),
    ]),
    prayer_time: schema.object().members({
      fajr: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
      dhuhr: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
      asr: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
      maghrib: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
      isha: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
    }),
    iftar_time: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
    sehri_time: schema.string({}, [rules.regex(new RegExp(TIME_FORMAT))]),
  })

  /**git
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
