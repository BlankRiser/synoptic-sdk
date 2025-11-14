import type {
	BooleanStringType,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
	UnitsParams,
} from "./common.schema";

export type StatisticsSearchParams = Partial<
	StationSelectionsParams &
		ResponseFormatParams &
		UnitsParams & {
			/**
			 * @description Number of minutes prior to current time to fetch data for.
			 * `recent` cannot be used when `start` and `end` are specified.
			 * @example "recent=120"
			 * @type {string}
			 */
			recent: string;

			/**
			 * @description Start time in the format YYYYmmddHHMM (UTC). `start` and `end` cannot be used when `recent` is specified.
			 * @example "start=201306011800"
			 * @type {string}
			 */
			start: string;

			/**
			 * @description End time in the format YYYYmmddHHMM (UTC). `start` and `end` cannot be used when `recent` is specified.
			 * Must be provided when `start` is specified.
			 * @example "end=201306021215"
			 * @type {string}
			 */
			end: string;

			/**
			 * @description
			 * Defines the time period represented by the returned statistics.
			 * - `day` (default): Returns daily statistics within the specified date range.
			 * - `month`: Returns monthly aggregated statistics for the specified range.
			 *
			 * For example, using `start=20250101&end=20250131&period=day` will return
			 * daily statistics for January 2025.
			 *
			 * @example
			 * "period=day"
			 * @example
			 * "period=month"
			 * @type {"day" | "month"}
			 * @optional
			 */
			period?: "day" | "month";

			/**
			 * @description
			 * Defines the type of statistic to return.
			 * - `all` (default): Returns all available statistics.
			 * - `min`: Returns the minimum value.
			 * - `max`: Returns the maximum value.
			 * - `mean`: Returns the mean (average) value.
			 * - `count`: Returns the total number of observations.
			 *
			 * @example
			 * "statistic=all"
			 * @example
			 * "statistic=min"
			 * @example
			 * "statistic=max"
			 * @example
			 * "statistic=mean"
			 * @example
			 * "statistic=count"
			 * @type {"all" | "min" | "max" | "mean" | "count"}
			 * @optional
			 */
			statistic?: "all" | "min" | "max" | "mean" | "count";

			/**
			 * @description Indicates if extended metadata should be returned for each station.
			 * @type {BooleanStringType} - "0" | "1"
			 * @example "complete=1"
			 * @optional
			 */
			complete: BooleanStringType;

			/**
			 * @description Comma-separated list of metadata fields to include.  Only works with attributes defined in the default metadata set (e.g. attributes shown via complete=1 cannot be selected)
			 * @example "fields=stid,name"
			 * @required
			 */
			fields: string;

			/**
			 * @description Indicates if the time zone of the response is in UTC or the local timezone of the station.
			 * @type {OutputFormatType} - "UTC" | "local"
			 * @example "obtimezone=local"
			 * @optional
			 */
			obtimezone: TimeZoneType;

			/**
			 * @description Include stations with no observations.
			 * @type {BooleanStringType} - "0" | "1"
			 * @example "showemptystations=1"
			 * @optional
			 */
			showemptystations: BooleanStringType;

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
