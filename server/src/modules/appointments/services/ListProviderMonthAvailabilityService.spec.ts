import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailabilityService: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailabilityService = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 11, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 13, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 15, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 21, 17, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 22, 17, 0, 0),
    });

    const availability = await listProviderMonthAvailabilityService.execute({
      provider_id: 'providerId',
      year: 2021,
      month: 1,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    );
  });
});
