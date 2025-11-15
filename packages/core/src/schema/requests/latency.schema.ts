import type {
	BooleanStringType,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
} from "./common.schema";

export type LatencySearchParams = Partial<
	StationSelectionsParams &
		ResponseFormatParams & {
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
			 * Indicates which statistical values to return.
			 * Values cannot be combined — only one option may be provided per request.
			 *
			 * - `min`: Returns the minimum value and its timestamp.
			 * - `max`: Returns the maximum value and its timestamp.
			 * - `mean`: Returns the mean (average) value along with start and end timestamps.
			 * - `median`: Returns the median value along with start and end timestamps.
			 * - `count`: Returns the number of minutes in the time span.
			 * - `stdev`: Returns the standard deviation value along with start and end timestamps.
			 * - `all`: Returns all available statistics.
			 *
			 * @example
			 * "stats=min"
			 * @example
			 * "stats=max"
			 * @example
			 * "stats=mean"
			 * @example
			 * "stats=median"
			 * @example
			 * "stats=count"
			 * @example
			 * "stats=stdev"
			 * @example
			 * "stats=all"
			 * @type {"min" | "max" | "mean" | "median" | "count" | "stdev" | "all"}
			 * @optional
			 */
			stats?: "min" | "max" | "mean" | "median" | "count" | "stdev" | "all";

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
			 * @description Returns all historical siting metadata for each station (requires `complete=1`).
			 * @example "sitinghistory=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			sitinghistory?: BooleanStringType;
		}
>;
