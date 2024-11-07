import { Role } from '@/interfaces/users.interface';
import { Schema, model, Document, Date } from 'mongoose';

export interface AppointmentData {
  title: string;
  date: Date;
  description?: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  clientName: string;
  clientEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAppointment extends Document, AppointmentData {
}

const AppointmentSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        date: { type: Date, required: true },
        description: { type: String },
        status: {
            type: String,
            enum: ['Scheduled', 'Completed', 'Cancelled'],
            default: 'Scheduled'
        },
        patientName: { type: String, required: true },
        patientEmail: { type: String, required: true },
        doctorName: { type: String, required: true },
        doctorEmail: { type: String, required: true },
    },
    { timestamps: true }
);

export const Appointment = model<IAppointment>('Appointment', AppointmentSchema);

