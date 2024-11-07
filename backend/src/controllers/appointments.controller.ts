import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import appointmentService from '@/services/appointments.service';
import { AppointmentData, IAppointment } from '@/models/appointments.model';

class UsersController {
  public appointmentService = new appointmentService();

  public getAppointments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllAppointmentsData: IAppointment[] = await this.appointmentService.findAllAppointments();

      res.status(200).json({ data: findAllAppointmentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAppointmentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const appointmentId: string = req.params.id;
      const findOneAppointmentData: IAppointment = await this.appointmentService.findAppointmentById(appointmentId);

      res.status(200).json({ data: findOneAppointmentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getAppointmentByPatientId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patientId: string = req.params.patientEmail;
      const findOneAppointmentData: IAppointment = await this.appointmentService.findAppointmentByPatientId(patientId);

      res.status(200).json({ data: findOneAppointmentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getAppointmentByDoctorId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doctorId: string = req.params.doctorEmail;
      const findOneAppointmentData: IAppointment = await this.appointmentService.findAppointmentByDoctorId(doctorId);

      res.status(200).json({ data: findOneAppointmentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: AppointmentData = req.body;
      const createAppointmentData: IAppointment = await this.appointmentService.createAppointment(userData);

      res.status(201).json({ data: createAppointmentData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const appointmentId: string = req.params.id;
      const userData: AppointmentData = req.body;
      const updateAppointmentData: IAppointment = await this.appointmentService.updateAppointment(appointmentId, userData);

      res.status(200).json({ data: updateAppointmentData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const appointmentId: string = req.params.id;
      const deleteAppointmentData: IAppointment = await this.appointmentService.deleteAppointment(appointmentId);

      res.status(200).json({ data: deleteAppointmentData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
