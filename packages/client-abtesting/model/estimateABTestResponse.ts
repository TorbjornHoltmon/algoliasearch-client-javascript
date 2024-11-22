// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type EstimateABTestResponse = {
  /**
   * Estimated number of days needed to reach the sample sizes required for detecting the configured effect. This value is based on historical traffic.
   */
  durationDays?: number;

  /**
   * Sample size estimates for each variant. The first element is the control variant. Each element is the estimated number of searches required to achieve the desired statistical significance.
   */
  sampleSizes?: Array<number>;
};