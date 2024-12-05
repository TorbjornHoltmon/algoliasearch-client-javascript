// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type IngestionClient = ReturnType<typeof createIngestionClient>;

import { createMemoryCache, createNullCache, createNullLogger } from '@algolia/client-common';
import { createFetchRequester } from '@algolia/requester-fetch';

import type { ClientOptions } from '@algolia/client-common';

import { createIngestionClient } from '../src/ingestionClient';

import type { Region } from '../src/ingestionClient';
import { REGIONS } from '../src/ingestionClient';

export type { Region, RegionOptions } from '../src/ingestionClient';

export { apiClientVersion, isOnDemandTrigger, isScheduleTrigger, isSubscriptionTrigger } from '../src/ingestionClient';

export * from '../model';

export function ingestionClient(
  appId: string,
  apiKey: string,
  region: Region,
  options?: ClientOptions,
): IngestionClient {
  if (!appId || typeof appId !== 'string') {
    throw new Error('`appId` is missing.');
  }

  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('`apiKey` is missing.');
  }

  if (!region || (region && (typeof region !== 'string' || !REGIONS.includes(region)))) {
    throw new Error(`\`region\` is required and must be one of the following: ${REGIONS.join(', ')}`);
  }

  return {
    ...createIngestionClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: 25000,
        read: 25000,
        write: 25000,
      },
      logger: createNullLogger(),
      algoliaAgents: [{ segment: 'Fetch' }],
      requester: createFetchRequester(),
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options,
    }),
  };
}
