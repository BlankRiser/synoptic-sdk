import type { LatestSearchParams } from "@devhaven/schema/requests/latest.schema";
import type { MetadataParams } from "@devhaven/schema/requests/metadata.schema";
import type { NearestSearchParams } from "@devhaven/schema/requests/nearest.schema";
import type { NetworkTypesSearchParams } from "@devhaven/schema/requests/network-types.schema";
import type { NetworksSearchParams } from "@devhaven/schema/requests/networks.schema";
import type { QcTypesSearchParams } from "@devhaven/schema/requests/qc-types.schema";
import type { TimeseriesParams } from "@devhaven/schema/requests/timeseries.schema";
import type { VariablesSearchParams } from "@devhaven/schema/requests/variables.schema";
import type { LatestResponse } from "@devhaven/schema/responses/latest.schema";
import type { MetadataResponse } from "@devhaven/schema/responses/metadata.schema";
import type { NearestResponse } from "@devhaven/schema/responses/nearest.schema";
import type { NetworkTypesResponse } from "@devhaven/schema/responses/network-types.schema";
import type { NetworkResponse } from "@devhaven/schema/responses/networks.schema";
import type { QCTypesResponse } from "@devhaven/schema/responses/qc-types.schema";
import type { TimeseriesResponse } from "@devhaven/schema/responses/timeseries.schema";
import type { VariablesResponse } from "@devhaven/schema/responses/variables.schema";
import ky, { type KyInstance, type Options } from "ky";
import { DEFAULT_CONFIG, ENDPOINTS } from "./constants";

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

		const baseUrl = config.baseUrl ?? DEFAULT_CONFIG.baseUrl;

		this.client = ky.create({
			prefixUrl: baseUrl,
			headers: {
				"Content-Type": "application/json",
			},
			...config.options,
		});
	}

	/**
	 * Get station metadata
	 * @param params - Query parameters for the metadata endpoint
	 * @returns Promise with the API response
	 */
	async metadata(params: MetadataParams): Promise<MetadataResponse> {
		const searchParams = this.buildSearchParams(params);

		return this.client
			.get(ENDPOINTS.METADATA, {
				searchParams,
			})
			.json<MetadataResponse>();
	}

	/**
	 * Get the list of available variables
	 * @param params - Query parameters for the variables endpoint
	 * @returns Promise with the API response
	 */
	async variables(params: VariablesSearchParams): Promise<VariablesResponse> {
		const searchParams = this.buildSearchParams(params);
		return this.client
			.get(ENDPOINTS.VARIABLES, {
				searchParams,
			})
			.json<VariablesResponse>();
	}

	/**
	 * Get the list of available networks
	 * @param params - Query parameters for the networks endpoint
	 * @returns Promise with the API response
	 */
	async networks(params: NetworksSearchParams): Promise<NetworkResponse> {
		const searchParams = this.buildSearchParams(params);
		return this.client
			.get(ENDPOINTS.NETWORKS, {
				searchParams,
			})
			.json<NetworkResponse>();
	}
	/**
	 * Get the list of available network types
	 * @param params - Query parameters for the network types endpoint
	 * @returns Promise with the API response
	 */
	async networkTypes(
		params?: NetworkTypesSearchParams,
	): Promise<NetworkTypesResponse> {
		const searchParams = this.buildSearchParams(params);
		return this.client
			.get(ENDPOINTS.NETWORK_TYPES, {
				searchParams,
			})
			.json<NetworkTypesResponse>();
	}
	/**
	 * Get the list of available network types
	 * @param params - Query parameters for the network types endpoint
	 * @returns Promise with the API response
	 */
	async qcTypes(params?: QcTypesSearchParams): Promise<QCTypesResponse> {
		const searchParams = this.buildSearchParams(params);
		return this.client
			.get(ENDPOINTS.QC_TYPES, {
				searchParams,
			})
			.json<QCTypesResponse>();
	}

	/**
	 * Get time series data from stations
	 * @param params - Query parameters for the timeseries endpoint
	 * @returns Promise with the API response
	 */
	async timeseries(params: TimeseriesParams): Promise<TimeseriesResponse> {
		const searchParams = this.buildSearchParams(params);

		return this.client
			.get(ENDPOINTS.TIMESERIES, {
				searchParams,
			})
			.json<TimeseriesResponse>();
	}

	/**
	 * Get the latest observations from stations
	 * @param params - Query parameters for the latest endpoint
	 * @returns Promise with the API response
	 */
	async latest(params: LatestSearchParams): Promise<LatestResponse> {
		const searchParams = this.buildSearchParams(params);
		return this.client
			.get(ENDPOINTS.LATEST, {
				searchParams,
			})
			.json<LatestResponse>();
	}
	/**
	 * Get the latest observations from stations
	 * @param params - Query parameters for the latest endpoint
	 * @returns Promise with the API response
	 */
	async nearest(params: NearestSearchParams): Promise<NearestResponse> {
		const searchParams = this.buildSearchParams(params);
		return this.client
			.get(ENDPOINTS.NEAREST, {
				searchParams,
			})
			.json<NearestResponse>();
	}

	/**
	 * Build search parameters including the token
	 * @param params - User-provided parameters
	 * @returns Combined parameters with token
	 */
	private buildSearchParams(
		params: Record<string, string | number> | undefined,
	): Record<string, string> {
		const searchParams: Record<string, string> = {};

		if (params && Object.keys(params).length > 0) {
			// Convert all parameters to strings and filter out undefined values
			Object.entries(params).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					searchParams[key] = String(value);
				}
			});
		}

		searchParams["token"] = this.token;

		return searchParams;
	}
}

export type { KyInstance, Options as KyOptions };
