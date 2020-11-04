import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointmentsService: ListProviderAppointmentsService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the appointments by day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 23, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'providerId',
      user_id: 'userId',
      date: new Date(2020, 12, 23, 15, 0, 0),
    });

    const availability = await listProviderAppointmentsService.execute({
      provider_id: 'providerId',
      day: 23,
      month: 1,
      year: 2021,
    });

    expect(availability).toEqual([appointment1, appointment2]);
  });
});
