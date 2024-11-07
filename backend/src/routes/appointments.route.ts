import { Router } from 'express';
import AppointmentsController from '@controllers/appointments.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/appointments';
  public router: Router;
  public AppointmentsController = new AppointmentsController();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.AppointmentsController.getAppointments);
    this.router.get(`${this.path}/doctor/:id`, this.AppointmentsController.getAppointmentByDoctorId);
    this.router.get(`${this.path}/patient/:id`, this.AppointmentsController.getAppointmentByPatientId);
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.AppointmentsController.createAppointment);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.AppointmentsController.updateAppointment);
    this.router.delete(`${this.path}/:id`, this.AppointmentsController.deleteAppointment);
  }
}

export default UsersRoute;
