import type {
	BooleanStringType,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
	UnitsParams,
} from "./common.schema";

export type PrecipitationSearchParams = Partial<
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
			 * @description
			 * Defines the interval mode to calculate precipitation.
			 * If omitted, the default is `"totals"`.
			 * - `totals`: Returns totals for the start and end dates.
			 * - `intervals`: Returns accumulated precipitation for specified intervals (see `interval` parameter).
			 * - `last`: Returns accumulated precipitation intervals based on the end date (see `accum_hours` parameter).
			 *
			 * The returned JSON format varies significantly depending on this parameter.
			 *
			 * @example
			 * "pmode=totals"
			 * @example
			 * "pmode=intervals"
			 * @example
			 * "pmode=last"
			 * @type {"totals" | "intervals" | "last"}
			 * @optional
			 */
			pmode?: "totals" | "intervals" | "last";

			/**
			 * @description
			 * Defines a time window (in hours) to allow returned intervals that are less than and/or
			 * greater than the requested interval.
			 *
			 * Only applicable when `pmode=intervals`.
			 * This parameter can be passed as:
			 * - A single numeric value (e.g. `interval_window=0`)
			 * - Two comma-separated values defining shorter and longer allowed windows
			 *   (e.g. `interval_window=0.5,0.5`)
			 *
			 * Default: `interval_window=0.5,0.5`
			 *
			 * @example
			 * "interval_window=0"
			 * @example
			 * "interval_window=0,1"
			 * @example
			 * "interval_window=0.5,0.5"
			 * @type {string | number}
			 * @optional
			 */
			interval_window?: string | number;

			/**
			 * @description
			 * Indicates if reports from all available precipitation variables should be returned.
			 * Some networks (e.g. ASOS/AWOS) can report precipitation in multiple forms such as
			 * `precip_accum_one_hour` and `precip_accum_six_hour`.
			 *
			 * By default, the service uses the most representative and consistently reporting variable
			 * for derived precipitation.
			 *
			 * - `0`: Use the most representative variable (default)
			 * - `1`: Return reports from all available precipitation variables
			 *
			 * @example
			 * "all_reports=0"
			 * @example
			 * "all_reports=1"
			 *  @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			all_reports?: BooleanStringType;

			/**
			 * @description Returns all historical siting metadata for each station (requires `complete=1`).
			 * @example "sitinghistory=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			sitinghistory?: BooleanStringType;
		}
>;
