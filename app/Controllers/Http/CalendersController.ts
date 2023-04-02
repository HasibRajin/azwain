import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Calender from 'App/Models/Calender'
import StoreCalenderValidator from 'App/Validators/StoreCalenderValidator'

export default class CalendersController {
  public async index({ response }: HttpContextContract) {
    const calender = await Calender.all()
    return response.send(calender)
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(StoreCalenderValidator)
    const calender = await Calender.create(payload)
    return response.send(calender)
  }
}
