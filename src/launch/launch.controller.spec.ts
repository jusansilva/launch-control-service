import { Test } from '@nestjs/testing';
import { LaunchController } from './launch.controller';

describe('LaunchController', () => {
  let controller: LaunchController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [LaunchController],
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

        return {
          handleLaunchCreated: jest.fn().mockResolvedValue(createResul),
          handleLaunchByToday: jest.fn().mockResolvedValue(findByDay),
        };
      })
      .compile();
    controller = moduleRef.get<LaunchController>(LaunchController);
  });

  describe('defined Controller', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });

  describe('Created Launch', () => {
    it('should return object if successful', () => {
      expect(
        controller.handleCreateLauch({
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

  describe('find launch by day', () => {
    it('should return object if successful', () => {
      expect(controller.handleFindbyToday()).resolves.toEqual({
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
});
