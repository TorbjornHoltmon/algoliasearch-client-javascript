// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { ClickPositionsInner } from './clickPositionsInner';

export type TopSearchWithAnalytics = {
  /**
   * Search query.
   */
  search: string;

  /**
   * Number of searches.
   */
  count: number;

  /**
   * Click-through rate, calculated as number of tracked searches with at least one click event divided by the number of tracked searches. If null, Algolia didn\'t receive any search requests with `clickAnalytics` set to true.
   */
  clickThroughRate: number | null;

  /**
   * Average position of a clicked search result in the list of search results. If null, Algolia didn\'t receive any search requests with `clickAnalytics` set to true.
   */
  averageClickPosition: number | null;

  /**
   * List of positions in the search results and clicks associated with this search.
   */
  clickPositions: ClickPositionsInner[];

  /**
   * Conversion rate, calculated as number of tracked searches with at least one conversion event divided by the number of tracked searches. If null, Algolia didn\'t receive any search requests with `clickAnalytics` set to true.
   */
  conversionRate: number | null;

  /**
   * Number of tracked searches. Tracked searches are search requests where the `clickAnalytics` parameter is true.
   */
  trackedSearchCount: number;

  /**
   * Number of clicks associated with this search.
   */
  clickCount: number;

  /**
   * Number of conversions from this search.
   */
  conversionCount: number;

  /**
   * Number of results (hits).
   */
  nbHits: number;
};
