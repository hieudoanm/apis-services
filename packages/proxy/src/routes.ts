/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
  fetchMiddlewares,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CoinsController } from './routes/coins/coins.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ForexController } from './routes/forex/forex.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TarotController } from './routes/tarot/tarot.controller';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  CoinsStats: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        total24hVolume: { dataType: 'string', required: true },
        totalMarketCap: { dataType: 'string', required: true },
        totalExchanges: { dataType: 'double', required: true },
        totalMarkets: { dataType: 'double', required: true },
        totalCoins: { dataType: 'double', required: true },
        total: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Coin: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        btcPrice: { dataType: 'string', required: true },
        coinrankingUrl: { dataType: 'string', required: true },
        lowVolume: { dataType: 'boolean', required: true },
        sparkline: {
          dataType: 'array',
          array: { dataType: 'string' },
          required: true,
        },
        rank: { dataType: 'double', required: true },
        change: { dataType: 'string', required: true },
        tier: { dataType: 'double', required: true },
        listedAt: { dataType: 'double', required: true },
        price: { dataType: 'string', required: true },
        marketCap: { dataType: 'string', required: true },
        iconUrl: { dataType: 'string', required: true },
        color: { dataType: 'string', required: true },
        name: { dataType: 'string', required: true },
        symbol: { dataType: 'string', required: true },
        uuid: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CoinsData: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        coins: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Coin' },
          required: true,
        },
        stats: { ref: 'CoinsStats', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CoinsResponse: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        data: { ref: 'CoinsData', required: true },
        status: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  OrderBy: {
    dataType: 'refEnum',
    enums: ['24hVolume', 'change', 'listedAt', 'marketCap', 'price'],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  OrderDirection: {
    dataType: 'refEnum',
    enums: ['asc', 'desc'],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Tag: {
    dataType: 'refEnum',
    enums: [
      'dao',
      'defi',
      'dex',
      'exchange',
      'gaming',
      'layer-1',
      'layer-2',
      'meme',
      'metaverse',
      'nft',
      'privacy',
      'stablecoin',
      'staking',
      'wrapped',
    ],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TimePeriod: {
    dataType: 'refEnum',
    enums: ['1h', '3h', '12h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Tier: {
    dataType: 'refEnum',
    enums: ['1', '2', '3'],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Record_string.number_': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {},
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ForexResponse: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        rates: { ref: 'Record_string.number_', required: true },
        date: { dataType: 'string', required: true },
        base: { dataType: 'string', required: true },
        timestamp: { dataType: 'double', required: true },
        success: { dataType: 'boolean', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Value: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['00'] },
        { dataType: 'enum', enums: ['01'] },
        { dataType: 'enum', enums: ['02'] },
        { dataType: 'enum', enums: ['03'] },
        { dataType: 'enum', enums: ['04'] },
        { dataType: 'enum', enums: ['05'] },
        { dataType: 'enum', enums: ['06'] },
        { dataType: 'enum', enums: ['07'] },
        { dataType: 'enum', enums: ['08'] },
        { dataType: 'enum', enums: ['09'] },
        { dataType: 'enum', enums: ['10'] },
        { dataType: 'enum', enums: ['11'] },
        { dataType: 'enum', enums: ['12'] },
        { dataType: 'enum', enums: ['13'] },
        { dataType: 'enum', enums: ['14'] },
        { dataType: 'enum', enums: ['15'] },
        { dataType: 'enum', enums: ['16'] },
        { dataType: 'enum', enums: ['17'] },
        { dataType: 'enum', enums: ['18'] },
        { dataType: 'enum', enums: ['19'] },
        { dataType: 'enum', enums: ['20'] },
        { dataType: 'enum', enums: ['21'] },
        { dataType: 'enum', enums: ['ace'] },
        { dataType: 'enum', enums: ['page'] },
        { dataType: 'enum', enums: ['knight'] },
        { dataType: 'enum', enums: ['queen'] },
        { dataType: 'enum', enums: ['king'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Type: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['major'] },
        { dataType: 'enum', enums: ['minor'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Suit: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['cups'] },
        { dataType: 'enum', enums: ['pentacles'] },
        { dataType: 'enum', enums: ['swords'] },
        { dataType: 'enum', enums: ['wands'] },
        { dataType: 'enum', enums: ['major'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Card: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        description: { dataType: 'string', required: true },
        meaningReverse: { dataType: 'string', required: true },
        meaningUp: { dataType: 'string', required: true },
        suit: { ref: 'Suit', required: true },
        type: { ref: 'Type', required: true },
        number: { dataType: 'double', required: true },
        value: { ref: 'Value', required: true },
        name: { dataType: 'string', required: true },
        id: {
          dataType: 'enum',
          enums: [
            'major-major-00',
            'major-major-01',
            'major-major-02',
            'major-major-03',
            'major-major-04',
            'major-major-05',
            'major-major-06',
            'major-major-07',
            'major-major-08',
            'major-major-09',
            'major-major-10',
            'major-major-11',
            'major-major-12',
            'major-major-13',
            'major-major-14',
            'major-major-15',
            'major-major-16',
            'major-major-17',
            'major-major-18',
            'major-major-19',
            'major-major-20',
            'major-major-21',
            'major-major-ace',
            'major-major-page',
            'major-major-knight',
            'major-major-queen',
            'major-major-king',
            'major-cups-00',
            'major-cups-01',
            'major-cups-02',
            'major-cups-03',
            'major-cups-04',
            'major-cups-05',
            'major-cups-06',
            'major-cups-07',
            'major-cups-08',
            'major-cups-09',
            'major-cups-10',
            'major-cups-11',
            'major-cups-12',
            'major-cups-13',
            'major-cups-14',
            'major-cups-15',
            'major-cups-16',
            'major-cups-17',
            'major-cups-18',
            'major-cups-19',
            'major-cups-20',
            'major-cups-21',
            'major-cups-ace',
            'major-cups-page',
            'major-cups-knight',
            'major-cups-queen',
            'major-cups-king',
            'major-pentacles-00',
            'major-pentacles-01',
            'major-pentacles-02',
            'major-pentacles-03',
            'major-pentacles-04',
            'major-pentacles-05',
            'major-pentacles-06',
            'major-pentacles-07',
            'major-pentacles-08',
            'major-pentacles-09',
            'major-pentacles-10',
            'major-pentacles-11',
            'major-pentacles-12',
            'major-pentacles-13',
            'major-pentacles-14',
            'major-pentacles-15',
            'major-pentacles-16',
            'major-pentacles-17',
            'major-pentacles-18',
            'major-pentacles-19',
            'major-pentacles-20',
            'major-pentacles-21',
            'major-pentacles-ace',
            'major-pentacles-page',
            'major-pentacles-knight',
            'major-pentacles-queen',
            'major-pentacles-king',
            'major-swords-00',
            'major-swords-01',
            'major-swords-02',
            'major-swords-03',
            'major-swords-04',
            'major-swords-05',
            'major-swords-06',
            'major-swords-07',
            'major-swords-08',
            'major-swords-09',
            'major-swords-10',
            'major-swords-11',
            'major-swords-12',
            'major-swords-13',
            'major-swords-14',
            'major-swords-15',
            'major-swords-16',
            'major-swords-17',
            'major-swords-18',
            'major-swords-19',
            'major-swords-20',
            'major-swords-21',
            'major-swords-ace',
            'major-swords-page',
            'major-swords-knight',
            'major-swords-queen',
            'major-swords-king',
            'major-wands-00',
            'major-wands-01',
            'major-wands-02',
            'major-wands-03',
            'major-wands-04',
            'major-wands-05',
            'major-wands-06',
            'major-wands-07',
            'major-wands-08',
            'major-wands-09',
            'major-wands-10',
            'major-wands-11',
            'major-wands-12',
            'major-wands-13',
            'major-wands-14',
            'major-wands-15',
            'major-wands-16',
            'major-wands-17',
            'major-wands-18',
            'major-wands-19',
            'major-wands-20',
            'major-wands-21',
            'major-wands-ace',
            'major-wands-page',
            'major-wands-knight',
            'major-wands-queen',
            'major-wands-king',
            'minor-major-00',
            'minor-major-01',
            'minor-major-02',
            'minor-major-03',
            'minor-major-04',
            'minor-major-05',
            'minor-major-06',
            'minor-major-07',
            'minor-major-08',
            'minor-major-09',
            'minor-major-10',
            'minor-major-11',
            'minor-major-12',
            'minor-major-13',
            'minor-major-14',
            'minor-major-15',
            'minor-major-16',
            'minor-major-17',
            'minor-major-18',
            'minor-major-19',
            'minor-major-20',
            'minor-major-21',
            'minor-major-ace',
            'minor-major-page',
            'minor-major-knight',
            'minor-major-queen',
            'minor-major-king',
            'minor-cups-00',
            'minor-cups-01',
            'minor-cups-02',
            'minor-cups-03',
            'minor-cups-04',
            'minor-cups-05',
            'minor-cups-06',
            'minor-cups-07',
            'minor-cups-08',
            'minor-cups-09',
            'minor-cups-10',
            'minor-cups-11',
            'minor-cups-12',
            'minor-cups-13',
            'minor-cups-14',
            'minor-cups-15',
            'minor-cups-16',
            'minor-cups-17',
            'minor-cups-18',
            'minor-cups-19',
            'minor-cups-20',
            'minor-cups-21',
            'minor-cups-ace',
            'minor-cups-page',
            'minor-cups-knight',
            'minor-cups-queen',
            'minor-cups-king',
            'minor-pentacles-00',
            'minor-pentacles-01',
            'minor-pentacles-02',
            'minor-pentacles-03',
            'minor-pentacles-04',
            'minor-pentacles-05',
            'minor-pentacles-06',
            'minor-pentacles-07',
            'minor-pentacles-08',
            'minor-pentacles-09',
            'minor-pentacles-10',
            'minor-pentacles-11',
            'minor-pentacles-12',
            'minor-pentacles-13',
            'minor-pentacles-14',
            'minor-pentacles-15',
            'minor-pentacles-16',
            'minor-pentacles-17',
            'minor-pentacles-18',
            'minor-pentacles-19',
            'minor-pentacles-20',
            'minor-pentacles-21',
            'minor-pentacles-ace',
            'minor-pentacles-page',
            'minor-pentacles-knight',
            'minor-pentacles-queen',
            'minor-pentacles-king',
            'minor-swords-00',
            'minor-swords-01',
            'minor-swords-02',
            'minor-swords-03',
            'minor-swords-04',
            'minor-swords-05',
            'minor-swords-06',
            'minor-swords-07',
            'minor-swords-08',
            'minor-swords-09',
            'minor-swords-10',
            'minor-swords-11',
            'minor-swords-12',
            'minor-swords-13',
            'minor-swords-14',
            'minor-swords-15',
            'minor-swords-16',
            'minor-swords-17',
            'minor-swords-18',
            'minor-swords-19',
            'minor-swords-20',
            'minor-swords-21',
            'minor-swords-ace',
            'minor-swords-page',
            'minor-swords-knight',
            'minor-swords-queen',
            'minor-swords-king',
            'minor-wands-00',
            'minor-wands-01',
            'minor-wands-02',
            'minor-wands-03',
            'minor-wands-04',
            'minor-wands-05',
            'minor-wands-06',
            'minor-wands-07',
            'minor-wands-08',
            'minor-wands-09',
            'minor-wands-10',
            'minor-wands-11',
            'minor-wands-12',
            'minor-wands-13',
            'minor-wands-14',
            'minor-wands-15',
            'minor-wands-16',
            'minor-wands-17',
            'minor-wands-18',
            'minor-wands-19',
            'minor-wands-20',
            'minor-wands-21',
            'minor-wands-ace',
            'minor-wands-page',
            'minor-wands-knight',
            'minor-wands-queen',
            'minor-wands-king',
          ],
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.get(
    '/api/coins',
    ...fetchMiddlewares<RequestHandler>(CoinsController),
    ...fetchMiddlewares<RequestHandler>(CoinsController.prototype.getCoins),

    function CoinsController_getCoins(request: any, response: any, next: any) {
      const args = {
        limit: { default: 100, in: 'query', name: 'limit', dataType: 'double' },
        offset: { default: 0, in: 'query', name: 'offset', dataType: 'double' },
        orderBy: {
          default: 'marketCap',
          in: 'query',
          name: 'orderBy',
          ref: 'OrderBy',
        },
        orderDirection: {
          default: 'desc',
          in: 'query',
          name: 'orderDirection',
          ref: 'OrderDirection',
        },
        tags: { default: 'layer-1', in: 'query', name: 'tags', ref: 'Tag' },
        timePeriod: {
          default: '24h',
          in: 'query',
          name: 'timePeriod',
          ref: 'TimePeriod',
        },
        tier: { default: '1', in: 'query', name: 'tier', ref: 'Tier' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new CoinsController();

        const promise = controller.getCoins.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/forex',
    ...fetchMiddlewares<RequestHandler>(ForexController),
    ...fetchMiddlewares<RequestHandler>(ForexController.prototype.getForex),

    function ForexController_getForex(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new ForexController();

        const promise = controller.getForex.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/tarot',
    ...fetchMiddlewares<RequestHandler>(TarotController),
    ...fetchMiddlewares<RequestHandler>(TarotController.prototype.getCards),

    function TarotController_getCards(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TarotController();

        const promise = controller.getCards.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/tarot/:id',
    ...fetchMiddlewares<RequestHandler>(TarotController),
    ...fetchMiddlewares<RequestHandler>(TarotController.prototype.getCard),

    function TarotController_getCard(request: any, response: any, next: any) {
      const args = {
        id: { in: 'path', name: 'id', required: true, dataType: 'string' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TarotController();

        const promise = controller.getCard.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/tarot/randomise',
    ...fetchMiddlewares<RequestHandler>(TarotController),
    ...fetchMiddlewares<RequestHandler>(TarotController.prototype.randomise),

    function TarotController_randomise(request: any, response: any, next: any) {
      const args = {
        total: { default: 1, in: 'query', name: 'total', dataType: 'double' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TarotController();

        const promise = controller.randomise.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      'getHeaders' in object && 'getStatus' in object && 'setStatus' in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    successStatus: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers);
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    response: any,
    statusCode?: number,
    data?: any,
    headers: any = {}
  ) {
    if (response.headersSent) {
      return;
    }
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (
      data &&
      typeof data.pipe === 'function' &&
      data.readable &&
      typeof data._read === 'function'
    ) {
      data.pipe(response);
    } else if (data !== null && data !== undefined) {
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    response: any
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any, response: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            'body.',
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              request.file,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              request.files,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              request.body[name],
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          }
        case 'res':
          return responder(response);
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
