// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import { Direction } from '../model/direction';

import { OrderBy } from '../model/orderBy';

/**
 * Properties for the `customDelete` method.
 */
export type CustomDeleteProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: { [key: string]: any };
};

/**
 * Properties for the `customGet` method.
 */
export type CustomGetProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: { [key: string]: any };
};

/**
 * Properties for the `customPost` method.
 */
export type CustomPostProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: { [key: string]: any };
  /**
   * Parameters to send with the custom request.
   */
  body?: Record<string, unknown>;
};

/**
 * Properties for the `customPut` method.
 */
export type CustomPutProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: { [key: string]: any };
  /**
   * Parameters to send with the custom request.
   */
  body?: Record<string, unknown>;
};

/**
 * Properties for the `getAddToCartRate` method.
 */
export type GetAddToCartRateProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getAverageClickPosition` method.
 */
export type GetAverageClickPositionProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getClickPositions` method.
 */
export type GetClickPositionsProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getClickThroughRate` method.
 */
export type GetClickThroughRateProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getConversionRate` method.
 */
export type GetConversionRateProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getNoClickRate` method.
 */
export type GetNoClickRateProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getNoResultsRate` method.
 */
export type GetNoResultsRateProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getPurchaseRate` method.
 */
export type GetPurchaseRateProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getRevenue` method.
 */
export type GetRevenueProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getSearchesCount` method.
 */
export type GetSearchesCountProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getSearchesNoClicks` method.
 */
export type GetSearchesNoClicksProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getSearchesNoResults` method.
 */
export type GetSearchesNoResultsProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getStatus` method.
 */
export type GetStatusProps = {
  /**
   * Index name.
   */
  index: string;
};

/**
 * Properties for the `getTopCountries` method.
 */
export type GetTopCountriesProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getTopFilterAttributes` method.
 */
export type GetTopFilterAttributesProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Search query.
   */
  search?: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getTopFilterForAttribute` method.
 */
export type GetTopFilterForAttributeProps = {
  /**
   * Attribute name.
   */
  attribute: string;
  /**
   * Index name.
   */
  index: string;
  /**
   * Search query.
   */
  search?: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getTopFiltersNoResults` method.
 */
export type GetTopFiltersNoResultsProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Search query.
   */
  search?: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getTopHits` method.
 */
export type GetTopHitsProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Search query.
   */
  search?: string;
  /**
   * Whether to include metrics related to click and conversion events in the response.
   */
  clickAnalytics?: boolean;
  /**
   * Whether to include revenue-related metrics in the response.  If true, metrics related to click and conversion events are also included in the response.
   */
  revenueAnalytics?: boolean;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getTopSearches` method.
 */
export type GetTopSearchesProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Whether to include metrics related to click and conversion events in the response.
   */
  clickAnalytics?: boolean;
  /**
   * Whether to include revenue-related metrics in the response.  If true, metrics related to click and conversion events are also included in the response.
   */
  revenueAnalytics?: boolean;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Attribute by which to order the response items.  If the `clickAnalytics` parameter is false, only `searchCount` is available.
   */
  orderBy?: OrderBy;
  /**
   * Sorting direction of the results: ascending or descending.
   */
  direction?: Direction;
  /**
   * Number of items to return.
   */
  limit?: number;
  /**
   * Position of the first item to return.
   */
  offset?: number;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};

/**
 * Properties for the `getUsersCount` method.
 */
export type GetUsersCountProps = {
  /**
   * Index name.
   */
  index: string;
  /**
   * Start date of the period to analyze, in `YYYY-MM-DD` format.
   */
  startDate?: string;
  /**
   * End date of the period to analyze, in `YYYY-MM-DD` format.
   */
  endDate?: string;
  /**
   * Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  tags?: string;
};
