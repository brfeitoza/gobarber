import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeNotificationsRepository: FakeNotificationsRepository;
let createAppointmentService: CreateAppointmentService;
let fakeCacheProvider: FakeCacheProvider;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
      fakeNotificationsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 12, 22, 12).getTime();
    });

    const appointment = await createAppointmentService.execute({
      date: new Date(2020, 12, 22, 13),
      provider_id: '1234',
      user_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234');
  });

  it('should not be able to create two appointments on the same time', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 12, 22, 12).getTime();
    });

    const appointmentDate = new Date(2020, 12, 22, 13);

    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: '1234',
      user_id: '123123',
    });

    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: '1234',
        user_id: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 12, 22, 12).getTime();
    });

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 12, 22, 11),
        user_id: 'userId',
        provider_id: 'providerId',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with yourself', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 12, 22, 12).getTime();
    });

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 12, 22, 13),
        user_id: 'providerId',
        provider_id: 'providerId',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 12, 22, 12).getTime();
    });

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 12, 23, 7),
        user_id: 'userId',
        provider_id: 'providerId',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 12, 23, 18),
        user_id: 'userId',
        provider_id: 'providerId',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});