import type {
	BooleanStringType,
	QualityControlParams,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
} from "./common.schema";

export type TimeseriesParams = Partial<
	StationSelectionsParams &
		QualityControlParams &
		ResponseFormatParams & {
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
			 * @description Restricts the response to observations within a time window (in minutes) previous to the current time.
			 * @example "within=60"
			 * @type {number}
			 * @optional
			 */
			within?: string;

			/**
			 * @description Number of days to show daily minimum and maximum values (up to 7 days). Requires `minmax` parameter.
			 * @example "minmax=7"
			 * @type {number}
			 * @optional
			 */
			minmax?: number;

			/**
			 * @description Controls whether min and max values are calculated using local or UTC days.
			 * @example "minmaxtype=local"
			 * @type {TimeZoneType} - "UTC" | "local"
			 * @optional
			 */
			minmaxtype?: TimeZoneType;

			/**
			 * @description Controls whether timestamps for min/max values are returned in local or UTC timezones.
			 * Defaults to match `minmaxtype`.
			 * @example "minmaxtimezone=UTC"
			 * @type {TimeZoneType} - "UTC" | "local"
			 * @optional
			 */
			minmaxtimezone?: TimeZoneType;

			/**
			 * @description Disable or enable use of High Frequency NOAA METAR data.
			 * @example "hfmetars=0"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			hfmetars?: BooleanStringType;

			/**
			 * @description Indicates if sensor-specific metadata should be returned for each variable.
			 * @example "sensorvars=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			sensorvars?: BooleanStringType;

			/**
			 * @description Returns the nearest percentile for the observed value.
			 * Only available for air temperature, wind speed, or wind gust.
			 * @example "value_percentile=daily_max"
			 * @type {"complete" | "daily_min" | "daily_max"}
			 * @optional
			 */
			value_percentile?: "complete" | "daily_min" | "daily_max";

			/**
			 * @description Returns all historical siting metadata for each station (requires `complete=1`).
			 * @example "sitinghistory=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			sitinghistory?: BooleanStringType;
		}
>;
