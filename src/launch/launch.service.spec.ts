import { Test } from '@nestjs/testing';
import { LaunchService } from './launch.service';

describe('LaunchController', () => {
  let service: LaunchService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [LaunchService],
    })
      .useMocker(() => {
        const createResul = {
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: new Date(1, 1, 1),
          id: 38,
        };

        const findByDay = {
          credit: [
            {
              id: 30,
              type: 'credit',
              description: 'Receive Door 4',
              value: 0,
              date: '2023-06-14T16:26:33.000Z',
            },
            {
              id: 33,
              type: 'credit',
              description: 'Receive Door 4',
              value: 1000000,
              date: '2023-06-14T16:32:25.000Z',
            },
            {
              id: 34,
              type: 'credit',
              description: 'Receive Door 4',
              value: 1242.5,
              date: '2023-06-14T16:32:53.000Z',
            },
            {
              id: 35,
              type: 'credit',
              description: 'Receive Door 4',
              value: 10,
              date: '2023-06-14T17:16:05.000Z',
            },
            {
              id: 36,
              type: 'credit',
              description: 'Receive Door 4',
              value: 10,
              date: '2023-06-14T17:36:29.052Z',
            },
            {
              id: 37,
              type: 'credit',
              description: 'Receive Door 4',
              value: 10,
              date: '2023-06-14T17:36:58.598Z',
            },
            {
              id: 38,
              type: 'credit',
              description: 'Receive Door 4',
              value: 10,
              date: '2023-06-15T00:28:05.000Z',
            },
          ],
          debit: [
            {
              id: 31,
              type: 'debit',
              description: 'Receive Door 4',
              value: 10,
              date: '2023-06-14T16:28:08.000Z',
            },
            {
              id: 32,
              type: 'debit',
              description: 'Receive Door 4',
              value: 1000000,
              date: '2023-06-14T16:28:28.000Z',
            },
          ],
          creditValue: 1001282.5,
          debitValue: 1000010,
          total: 1272.5,
        };

        const launchByDayResponseDebit = [
          {
            id: 31,
            type: 'debit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T16:28:08.000Z',
          },
          {
            id: 32,
            type: 'debit',
            description: 'Receive Door 4',
            value: 1000000,
            date: '2023-06-14T16:28:28.000Z',
          },
        ];

        const launchByDayResponseCredit = [
          {
            id: 30,
            type: 'credit',
            description: 'Receive Door 4',
            value: 0,
            date: '2023-06-14T16:26:33.000Z',
          },
          {
            id: 33,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1000000,
            date: '2023-06-14T16:32:25.000Z',
          },
          {
            id: 34,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1242.5,
            date: '2023-06-14T16:32:53.000Z',
          },
          {
            id: 35,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:16:05.000Z',
          },
          {
            id: 36,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:36:29.052Z',
          },
          {
            id: 37,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:36:58.598Z',
          },
          {
            id: 38,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-15T00:28:05.000Z',
          },
        ];

        const findAllresponse = [
          {
            id: 21,
            type: 'debit',
            description: 'Payment Door 1',
            value: 1232.5,
            date: '2023-06-06T13:47:06.000Z',
          },
          {
            id: 22,
            type: 'debit',
            description: 'Payment Door 2',
            value: 1232.5,
            date: '2023-06-06T13:47:09.000Z',
          },
          {
            id: 23,
            type: 'debit',
            description: 'Payment Door 3',
            value: 1232.5,
            date: '2023-06-06T13:47:13.000Z',
          },
          {
            id: 24,
            type: 'debit',
            description: 'Payment Door 4',
            value: 1232.5,
            date: '2023-06-06T13:47:17.000Z',
          },
          {
            id: 25,
            type: 'debit',
            description: 'Payment Door 5',
            value: 1232.5,
            date: '2023-06-06T13:47:20.000Z',
          },
          {
            id: 26,
            type: 'credit',
            description: 'Receive Door 1',
            value: 1232.5,
            date: '2023-06-06T13:47:35.000Z',
          },
          {
            id: 27,
            type: 'credit',
            description: 'Receive Door 2',
            value: 1232.5,
            date: '2023-06-06T13:47:40.000Z',
          },
          {
            id: 28,
            type: 'credit',
            description: 'Receive Door 3',
            value: 1232.5,
            date: '2023-06-06T13:47:43.000Z',
          },
          {
            id: 29,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1232.5,
            date: '2023-06-06T13:47:48.000Z',
          },
          {
            id: 30,
            type: 'credit',
            description: 'Receive Door 4',
            value: 0,
            date: '2023-06-14T16:26:33.000Z',
          },
          {
            id: 31,
            type: 'debit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T16:28:08.000Z',
          },
          {
            id: 32,
            type: 'debit',
            description: 'Receive Door 4',
            value: 1000000,
            date: '2023-06-14T16:28:28.000Z',
          },
          {
            id: 33,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1000000,
            date: '2023-06-14T16:32:25.000Z',
          },
          {
            id: 34,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1242.5,
            date: '2023-06-14T16:32:53.000Z',
          },
          {
            id: 35,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:16:05.000Z',
          },
          {
            id: 36,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:36:29.052Z',
          },
          {
            id: 37,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:36:58.598Z',
          },
          {
            id: 38,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-15T00:28:05.000Z',
          },
        ];

        return {
          handleLaunchCreated: jest.fn().mockResolvedValue(createResul),
          handleLaunchAll: jest.fn().mockResolvedValue(findAllresponse),
          handleLaunchByToday: jest.fn().mockResolvedValue(findByDay),
          getLauchByTypeToday: jest.fn().mockResolvedValue((type) => {
            if (type == 'debit') {
              return launchByDayResponseDebit;
            } else {
              return launchByDayResponseCredit;
            }
          }),
          getBalanceFull: jest.fn().mockResolvedValue(100),
        };
      })
      .compile();
    service = moduleRef.get<LaunchService>(LaunchService);
  });

  describe('defined Controller', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Created Launch', () => {
    it('should return object if successful', () => {
      expect(
        service.handleLaunchCreated({
          date: new Date(1, 1, 1),
          description: 'test if positive value',
          type: 'credit',
          value: 100,
        }),
      ).resolves.toEqual({
        type: 'credit',
        description: 'Receive Door 4',
        value: 10,
        date: new Date(1, 1, 1),
        id: 38,
      });
    });
  });

  describe('find All launch', () => {
    it('should return object if successful', () => {
      expect(service.handleLaunchAll()).resolves.toEqual([
        {
          id: 21,
          type: 'debit',
          description: 'Payment Door 1',
          value: 1232.5,
          date: '2023-06-06T13:47:06.000Z',
        },
        {
          id: 22,
          type: 'debit',
          description: 'Payment Door 2',
          value: 1232.5,
          date: '2023-06-06T13:47:09.000Z',
        },
        {
          id: 23,
          type: 'debit',
          description: 'Payment Door 3',
          value: 1232.5,
          date: '2023-06-06T13:47:13.000Z',
        },
        {
          id: 24,
          type: 'debit',
          description: 'Payment Door 4',
          value: 1232.5,
          date: '2023-06-06T13:47:17.000Z',
        },
        {
          id: 25,
          type: 'debit',
          description: 'Payment Door 5',
          value: 1232.5,
          date: '2023-06-06T13:47:20.000Z',
        },
        {
          id: 26,
          type: 'credit',
          description: 'Receive Door 1',
          value: 1232.5,
          date: '2023-06-06T13:47:35.000Z',
        },
        {
          id: 27,
          type: 'credit',
          description: 'Receive Door 2',
          value: 1232.5,
          date: '2023-06-06T13:47:40.000Z',
        },
        {
          id: 28,
          type: 'credit',
          description: 'Receive Door 3',
          value: 1232.5,
          date: '2023-06-06T13:47:43.000Z',
        },
        {
          id: 29,
          type: 'credit',
          description: 'Receive Door 4',
          value: 1232.5,
          date: '2023-06-06T13:47:48.000Z',
        },
        {
          id: 30,
          type: 'credit',
          description: 'Receive Door 4',
          value: 0,
          date: '2023-06-14T16:26:33.000Z',
        },
        {
          id: 31,
          type: 'debit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T16:28:08.000Z',
        },
        {
          id: 32,
          type: 'debit',
          description: 'Receive Door 4',
          value: 1000000,
          date: '2023-06-14T16:28:28.000Z',
        },
        {
          id: 33,
          type: 'credit',
          description: 'Receive Door 4',
          value: 1000000,
          date: '2023-06-14T16:32:25.000Z',
        },
        {
          id: 34,
          type: 'credit',
          description: 'Receive Door 4',
          value: 1242.5,
          date: '2023-06-14T16:32:53.000Z',
        },
        {
          id: 35,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T17:16:05.000Z',
        },
        {
          id: 36,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T17:36:29.052Z',
        },
        {
          id: 37,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T17:36:58.598Z',
        },
        {
          id: 38,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-15T00:28:05.000Z',
        },
      ]);
    });
  });

  describe('find launch by day', () => {
    it('should return object if successful', () => {
      expect(service.handleLaunchByToday()).resolves.toEqual({
        credit: [
          {
            id: 30,
            type: 'credit',
            description: 'Receive Door 4',
            value: 0,
            date: '2023-06-14T16:26:33.000Z',
          },
          {
            id: 33,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1000000,
            date: '2023-06-14T16:32:25.000Z',
          },
          {
            id: 34,
            type: 'credit',
            description: 'Receive Door 4',
            value: 1242.5,
            date: '2023-06-14T16:32:53.000Z',
          },
          {
            id: 35,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:16:05.000Z',
          },
          {
            id: 36,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:36:29.052Z',
          },
          {
            id: 37,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T17:36:58.598Z',
          },
          {
            id: 38,
            type: 'credit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-15T00:28:05.000Z',
          },
        ],
        debit: [
          {
            id: 31,
            type: 'debit',
            description: 'Receive Door 4',
            value: 10,
            date: '2023-06-14T16:28:08.000Z',
          },
          {
            id: 32,
            type: 'debit',
            description: 'Receive Door 4',
            value: 1000000,
            date: '2023-06-14T16:28:28.000Z',
          },
        ],
        creditValue: 1001282.5,
        debitValue: 1000010,
        total: 1272.5,
      });
    });
  });

  describe('get launch by type', () => {
    it('should return object if successful debit', () => {
      expect(service.getLauchByTypeToday('debit')).resolves.toEqual([
        {
          id: 31,
          type: 'debit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T16:28:08.000Z',
        },
        {
          id: 32,
          type: 'debit',
          description: 'Receive Door 4',
          value: 1000000,
          date: '2023-06-14T16:28:28.000Z',
        },
      ]);
    });

    it('should return object if successful credit', () => {
      expect(service.getLauchByTypeToday('credit')).resolves.toEqual([
        {
          id: 30,
          type: 'credit',
          description: 'Receive Door 4',
          value: 0,
          date: '2023-06-14T16:26:33.000Z',
        },
        {
          id: 33,
          type: 'credit',
          description: 'Receive Door 4',
          value: 1000000,
          date: '2023-06-14T16:32:25.000Z',
        },
        {
          id: 34,
          type: 'credit',
          description: 'Receive Door 4',
          value: 1242.5,
          date: '2023-06-14T16:32:53.000Z',
        },
        {
          id: 35,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T17:16:05.000Z',
        },
        {
          id: 36,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T17:36:29.052Z',
        },
        {
          id: 37,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-14T17:36:58.598Z',
        },
        {
          id: 38,
          type: 'credit',
          description: 'Receive Door 4',
          value: 10,
          date: '2023-06-15T00:28:05.000Z',
        },
      ]);
    });
  });

  describe('find launch by day', () => {
    it('should return object if successful', () => {
      expect(service.getBalanceFull()).resolves.toEqual(100);
    });
  });
});
