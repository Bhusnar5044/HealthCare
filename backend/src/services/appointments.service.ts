import { hash } from 'bcrypt';
import { HttpException } from '@exceptions/HttpException';
import { Appointment, AppointmentData, IAppointment } from '@models/appointments.model';
import { isEmpty } from '@utils/util';

class AppointmentService {
  public appointments = Appointment;

  public async findAllAppointments(): Promise<IAppointment[]> {
    const appointments: IAppointment[] = await this.appointments.find();
    return appointments;
  }

  public async findAppointmentById(appointmentId: string): Promise<IAppointment> {
    if (isEmpty(appointmentId)) throw new HttpException(400, 'UserId is empty');

    const findAppointment: IAppointment = await this.appointments.findOne({ _id: appointmentId });
    if (!findAppointment) throw new HttpException(409, "Appointment doesn't exist");

    return findAppointment;
  }

  public async findAppointmentByPatientId(patientEmail: string): Promise<IAppointment> {
    if (isEmpty(patientEmail)) throw new HttpException(400, 'UserId is empty');

    const findAppointment: IAppointment = await this.appointments.find({ patientEmail: patientEmail });
    if (!findAppointment) throw new HttpException(409, "Appointment doesn't exist");

    return findAppointment;
  }

  public async findAppointmentByDoctorId(doctorEmail: string): Promise<IAppointment> {
    if (isEmpty(doctorEmail)) throw new HttpException(400, 'UserId is empty');

    const findAppointment: IAppointment = await this.appointments.find({ doctorEmail: doctorEmail });
    if (!findAppointment) throw new HttpException(409, "Appointment doesn't exist");

    return findAppointment;
  }
  
  public async createAppointment(appointmentData: AppointmentData): Promise<IAppointment> {
    if (isEmpty(appointmentData)) throw new HttpException(400, 'appointmentData is empty');

    const findAppointment: IAppointment = await this.appointments.findOne({ _id: appointmentData._id });
    if (findAppointment) throw new HttpException(409, `This Appointment ${appointmentData._id} already exists`);

    const createAppointmentData: IAppointment = await this.appointments.create({ ...appointmentData });

    return createAppointmentData;
  }

  public async updateAppointment(appointmentId: string, appointmentData: AppointmentData): Promise<IAppointment> {
    if (isEmpty(appointmentData)) throw new HttpException(400, 'appointmentData is empty');

    if (appointmentData._id) {
      const findAppointment: IAppointment = await this.appointments.findOne({ email: appointmentData._id });
      if (findAppointment && findAppointment._id != appointmentId) throw new HttpException(409, `This Appointment ${appointmentData._id} already exists`);
    }

    appointmentData = { ...appointmentData };

    const updateUserById: IAppointment = await this.appointments.findByIdAndUpdate(appointmentId, { appointmentData });
    if (!updateUserById) throw new HttpException(409, "Appointment doesn't exist");

    return updateUserById;
  }

  public async deleteAppointment(appointmentId: string): Promise<IAppointment> {
    const deleteAppointmentById: IAppointment = await this.appointments.findByIdAndDelete(appointmentId);
    if (!deleteAppointmentById) throw new HttpException(409, "Appointment doesn't exist");

    return deleteAppointmentById;
  }
}

export default AppointmentService;
