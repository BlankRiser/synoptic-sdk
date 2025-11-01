import type { LatestSearchParams } from '@devhaven/schema/requests/latest.schema';
import type { MetadataParams } from '@devhaven/schema/requests/metadata.schema';
import type { TimeseriesParams } from '@devhaven/schema/requests/timeseries.schema';
import type { LatestResponse } from '@devhaven/schema/responses/latest.schema';
import ky, { type KyInstance, type Options } from 'ky';
import { DEFAULT_CONFIG } from './constants';


/**
 * Configuration options for the Synoptic SDK
 */
export interface SynopticConfig {
    /** API authentication token */
    token: string;
    /** Base URL for the API (optional, defaults to Synoptic API) */
    baseUrl?: string;
    /** Additional ky options */
    options?: Options;
}


/**
 * Synoptic Client SDK
 * Provides methods to interact with the Synoptic API
 */
export class Synoptic {
    private client: KyInstance;
    private token: string;

    /**
     * Initialize the Synoptic SDK
     * @param config - Configuration options
     */
    constructor(config: SynopticConfig) {
        this.token = config.token;

        const baseUrl = config.baseUrl ?? DEFAULT_CONFIG.baseUrl

        this.client = ky.create({
            prefixUrl: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            ...config.options,
        });
    }

    /**
     * Get the latest observations from stations
     * @param params - Query parameters for the latest endpoint
     * @returns Promise with the API response
     */
    async latest(params: LatestSearchParams): Promise<LatestResponse> {
        const searchParams = this.buildSearchParams(params);

        return this.client.get('stations/latest', {
            searchParams,
        }).json<LatestResponse>()
    }

    /**
     * Get time series data from stations
     * @param params - Query parameters for the timeseries endpoint
     * @returns Promise with the API response
     */
    async timeseries<T>(params: TimeseriesParams): Promise<T> {
        const searchParams = this.buildSearchParams(params);

        return this.client.get('stations/timeseries', {
            searchParams,
        }).json<T>();
    }

    /**
     * Get station metadata
     * @param params - Query parameters for the metadata endpoint
     * @returns Promise with the API response
     */
    async metadata<T>(params: MetadataParams): Promise<T> {
        const searchParams = this.buildSearchParams(params);

        return this.client.get('stations/metadata', {
            searchParams,
        }).json<T>();
    }

    /**
     * Build search parameters including the token
     * @param params - User-provided parameters
     * @returns Combined parameters with token
     */
    private buildSearchParams(params: Record<string, any>): Record<string, string> {
        const searchParams: Record<string, string> = {};

        // Convert all parameters to strings and filter out undefined values
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams[key] = String(value);
            }
        });

        searchParams['token'] = this.token

        return searchParams;
    }
}


export type {
    KyInstance,
    Options as KyOptions
};
