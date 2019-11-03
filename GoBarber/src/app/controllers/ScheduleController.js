import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import User from '../models/User';
import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      whre: { id: req.userId, provider: true },
    });
    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not provider' });
    }
    const { date } = req.query;
    const parsedDate = parseISO(date);
    // 2019-09-10 00:00:00
    // 2019-09-10 23:59:59
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['nome'],
        },
      ],
      order: ['date'],
    });

    return res.json({ appointments });
  }
}
export default new ScheduleController();
