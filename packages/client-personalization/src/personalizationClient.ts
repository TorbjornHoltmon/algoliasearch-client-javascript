// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import { createAuth, createTransporter, getAlgoliaAgent } from '@algolia/client-common';
import type {
  CreateClientOptions,
  Headers,
  Host,
  QueryParameters,
  Request,
  RequestOptions,
} from '@algolia/client-common';

import type {
  CustomDeleteProps,
  CustomGetProps,
  CustomPostProps,
  CustomPutProps,
  DeleteUserProfileProps,
  GetUserTokenProfileProps,
} from '../model/clientMethodProps';
import type { DeleteUserProfileResponse } from '../model/deleteUserProfileResponse';
import type { GetUserTokenResponse } from '../model/getUserTokenResponse';
import type { PersonalizationStrategyParams } from '../model/personalizationStrategyParams';
import type { SetPersonalizationStrategyResponse } from '../model/setPersonalizationStrategyResponse';

export const apiClientVersion = '5.2.5';

export const REGIONS = ['eu', 'us'] as const;
export type Region = (typeof REGIONS)[number];

function getDefaultHosts(region: Region): Host[] {
  const url = 'personalization.{region}.algolia.com'.replace('{region}', region);

  return [{ url, accept: 'readWrite', protocol: 'https' }];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createPersonalizationClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}: CreateClientOptions & { region: Region }) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: 'Personalization',
      version: apiClientVersion,
    }),
    baseHeaders: {
      'content-type': 'text/plain',
      ...auth.headers(),
      ...options.baseHeaders,
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters,
    },
  });

  return {
    transporter,

    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,

    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache(): Promise<void> {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => undefined);
    },

    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua(): string {
      return transporter.algoliaAgent.value;
    },

    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment: string, version?: string): void {
      transporter.algoliaAgent.add({ segment, version });
    },

    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }: { apiKey: string }): void {
      transporter.baseHeaders['x-algolia-api-key'] = apiKey;
    },

    /**
     * This method allow you to send requests to the Algolia REST API.
     *
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete(
      { path, parameters }: CustomDeleteProps,
      requestOptions?: RequestOptions,
    ): Promise<Record<string, unknown>> {
      if (!path) {
        throw new Error('Parameter `path` is required when calling `customDelete`.');
      }

      const requestPath = '/{path}'.replace('{path}', path);
      const headers: Headers = {};
      const queryParameters: QueryParameters = parameters ? parameters : {};

      const request: Request = {
        method: 'DELETE',
        path: requestPath,
        queryParameters,
        headers,
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * This method allow you to send requests to the Algolia REST API.
     *
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }: CustomGetProps, requestOptions?: RequestOptions): Promise<Record<string, unknown>> {
      if (!path) {
        throw new Error('Parameter `path` is required when calling `customGet`.');
      }

      const requestPath = '/{path}'.replace('{path}', path);
      const headers: Headers = {};
      const queryParameters: QueryParameters = parameters ? parameters : {};

      const request: Request = {
        method: 'GET',
        path: requestPath,
        queryParameters,
        headers,
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * This method allow you to send requests to the Algolia REST API.
     *
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost(
      { path, parameters, body }: CustomPostProps,
      requestOptions?: RequestOptions,
    ): Promise<Record<string, unknown>> {
      if (!path) {
        throw new Error('Parameter `path` is required when calling `customPost`.');
      }

      const requestPath = '/{path}'.replace('{path}', path);
      const headers: Headers = {};
      const queryParameters: QueryParameters = parameters ? parameters : {};

      const request: Request = {
        method: 'POST',
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {},
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * This method allow you to send requests to the Algolia REST API.
     *
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut(
      { path, parameters, body }: CustomPutProps,
      requestOptions?: RequestOptions,
    ): Promise<Record<string, unknown>> {
      if (!path) {
        throw new Error('Parameter `path` is required when calling `customPut`.');
      }

      const requestPath = '/{path}'.replace('{path}', path);
      const headers: Headers = {};
      const queryParameters: QueryParameters = parameters ? parameters : {};

      const request: Request = {
        method: 'PUT',
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {},
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * Deletes a user profile.  The response includes a date and time when the user profile can safely be considered deleted.
     *
     * Required API Key ACLs:
     * - recommendation.
     *
     * @param deleteUserProfile - The deleteUserProfile object.
     * @param deleteUserProfile.userToken - Unique identifier representing a user for which to fetch the personalization profile.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteUserProfile(
      { userToken }: DeleteUserProfileProps,
      requestOptions?: RequestOptions,
    ): Promise<DeleteUserProfileResponse> {
      if (!userToken) {
        throw new Error('Parameter `userToken` is required when calling `deleteUserProfile`.');
      }

      const requestPath = '/1/profiles/{userToken}'.replace('{userToken}', encodeURIComponent(userToken));
      const headers: Headers = {};
      const queryParameters: QueryParameters = {};

      const request: Request = {
        method: 'DELETE',
        path: requestPath,
        queryParameters,
        headers,
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * Retrieves the current personalization strategy.
     *
     * Required API Key ACLs:
     * - recommendation.
     *
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getPersonalizationStrategy(requestOptions?: RequestOptions): Promise<PersonalizationStrategyParams> {
      const requestPath = '/1/strategies/personalization';
      const headers: Headers = {};
      const queryParameters: QueryParameters = {};

      const request: Request = {
        method: 'GET',
        path: requestPath,
        queryParameters,
        headers,
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * Retrieves a user profile and their affinities for different facets.
     *
     * Required API Key ACLs:
     * - recommendation.
     *
     * @param getUserTokenProfile - The getUserTokenProfile object.
     * @param getUserTokenProfile.userToken - Unique identifier representing a user for which to fetch the personalization profile.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getUserTokenProfile(
      { userToken }: GetUserTokenProfileProps,
      requestOptions?: RequestOptions,
    ): Promise<GetUserTokenResponse> {
      if (!userToken) {
        throw new Error('Parameter `userToken` is required when calling `getUserTokenProfile`.');
      }

      const requestPath = '/1/profiles/personalization/{userToken}'.replace(
        '{userToken}',
        encodeURIComponent(userToken),
      );
      const headers: Headers = {};
      const queryParameters: QueryParameters = {};

      const request: Request = {
        method: 'GET',
        path: requestPath,
        queryParameters,
        headers,
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * Creates a new personalization strategy.
     *
     * Required API Key ACLs:
     * - recommendation.
     *
     * @param personalizationStrategyParams - The personalizationStrategyParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    setPersonalizationStrategy(
      personalizationStrategyParams: PersonalizationStrategyParams,
      requestOptions?: RequestOptions,
    ): Promise<SetPersonalizationStrategyResponse> {
      if (!personalizationStrategyParams) {
        throw new Error(
          'Parameter `personalizationStrategyParams` is required when calling `setPersonalizationStrategy`.',
        );
      }

      if (!personalizationStrategyParams.eventScoring) {
        throw new Error(
          'Parameter `personalizationStrategyParams.eventScoring` is required when calling `setPersonalizationStrategy`.',
        );
      }
      if (!personalizationStrategyParams.facetScoring) {
        throw new Error(
          'Parameter `personalizationStrategyParams.facetScoring` is required when calling `setPersonalizationStrategy`.',
        );
      }
      if (!personalizationStrategyParams.personalizationImpact) {
        throw new Error(
          'Parameter `personalizationStrategyParams.personalizationImpact` is required when calling `setPersonalizationStrategy`.',
        );
      }

      const requestPath = '/1/strategies/personalization';
      const headers: Headers = {};
      const queryParameters: QueryParameters = {};

      const request: Request = {
        method: 'POST',
        path: requestPath,
        queryParameters,
        headers,
        data: personalizationStrategyParams,
      };

      return transporter.request(request, requestOptions);
    },
  };
}
