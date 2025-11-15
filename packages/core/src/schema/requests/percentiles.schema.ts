import type {
	BooleanStringType,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
} from "./common.schema";

export type PercentilesSearchParams = Partial<
	Omit<StationSelectionsParams, "vars"> &
		ResponseFormatParams & {
			/**
			 * @description
			 * Specifies which variables to calculate percentile distributions for.
			 * Percentiles are only available for the following variables:
			 * - `air_temp`
			 * - `wind_speed`
			 * - `wind_gust`
			 *
			 * If omitted, all three variables will be returned.
			 * Multiple variables can be passed as a comma-separated list.
			 *
			 * @example
			 * "vars=air_temp"
			 * @example
			 * "vars=wind_speed,wind_gust"
			 * @example
			 * "vars=air_temp,wind_speed,wind_gust"
			 * @type {"air_temp" | "wind_speed" | "wind_gust"}
			 * @optional
			 */
			vars?: "air_temp" | "wind_speed" | "wind_gust";

			/**
			 * @description
			 * Defines the dataset used to calculate percentile distributions.
			 * - `complete` (default): Returns a single percentile distribution for each station,
			 *   derived from all observations in the full period-of-record.
			 * - `daily_min`: Returns a single distribution for each station derived from all
			 *   daily minimum values spanning the full period-of-record (timezone-specific).
			 * - `daily_max`: Returns a single distribution for each station derived from all
			 *   daily maximum values spanning the full period-of-record (timezone-specific).
			 * - `hourly`: Only available for `vars=air_temp`. Returns percentile distributions
			 *   for each hour of the year. Requires `start` and `end` or `recent` (in minutes),
			 *   formatted as `mmddHH` to the nearest hour.
			 *
			 * Example: `start=120100&end=121000` returns hourly percentiles for Dec 1 00 UTC
			 * through Dec 10 00 UTC across all years of record.
			 *
			 * Note: Hourly air temperature percentiles cannot be returned with other data types.
			 *
			 * @example
			 * "data=complete"
			 * @example
			 * "data=daily_min"
			 * @example
			 * "data=daily_max"
			 * @example
			 * "data=hourly"
			 * @type {"complete" | "daily_min" | "daily_max" | "hourly"}
			 * @optional
			 */
			data?: "complete" | "daily_min" | "daily_max" | "hourly";

			/**
			 * @description
			 * Specifies which percentile values to return.
			 * Can be either:
			 * - `"all"` (default): Returns all available percentiles
			 * - A single number (e.g. `90`)
			 * - A comma-separated list of numbers (e.g. `10,25,50,75,90`)
			 *
			 * Available percentiles include:
			 * `0, 0.5, 1, 1.5, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65,
			 * 70, 75, 80, 85, 90, 95, 96, 97, 98, 98.5, 99, 99.5, 100`
			 *
			 * @example
			 * "percentiles=all"
			 * @example
			 * "percentiles=90"
			 * @example
			 * "percentiles=10,25,50,75,90"
			 * @type {"all" | string | number}
			 * @optional
			 */
			percentiles?: "all" | string | number;
			/**
			 * @description A value of `1` or `0`. When set to `1`, an extended list of metadata attributes for each returned station is provided.
			 * This is useful for exploring the zones and regions in which a station resides.
			 * @example "complete=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			complete?: BooleanStringType;

			/**
			 * @description Case-insensitive comma-separated list of metadata attributes to include in the output response.
			 * Default is to include all attributes. Only works with attributes defined in the default metadata set (e.g. attributes shown via `complete=1` cannot be selected).
			 * @example "fields=stid,name"
			 * @type {string}
			 * @optional
			 */
			fields?: string;

			/**
			 * @description Indicates if the time zone of the response is in UTC or the local timezone of the station.
			 * Input times (start and end) are always UTC.
			 * @example "obtimezone=local"
			 * @type {TimeZoneType} - "UTC" | "local"
			 * @optional
			 */
			obtimezone?: TimeZoneType;

			/**
			 * @description Indicates if stations with no observations will be returned.
			 * @example "showemptystations=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			showemptystations?: BooleanStringType;

			/**
			 * @description Indicates if variables with no observations will be returned. Guarantees all keys in `SENSOR_VARIABLES` will be present in the `OBSERVATIONS` element.
			 * @example "showemptyvars=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			showemptyvars?: BooleanStringType;

			/**
			 * @description Returns all historical siting metadata for each station (requires `complete=1`).
			 * @example "sitinghistory=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			sitinghistory?: BooleanStringType;
		}
>;
