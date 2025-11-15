import type {
	BooleanStringType,
	QualityControlParams,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
} from "./common.schema";

export type QCSegmentsSearchParams = Partial<
	StationSelectionsParams &
		Pick<QualityControlParams, "qc_checks"> &
		Pick<ResponseFormatParams, "output"> & {
			/**
			 * @description
			 * Requires that the Quality Control (QC) segment start falls within the requested time span.
			 * - `1`: Only include QC segments that start **inside** the requested time range.
			 * - `0` (default): Include all QC segments regardless of where they start.
			 *
			 * @example
			 * "inside=1"
			 * @example
			 * "inside=0"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			inside?: BooleanStringType;
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
			 * @description Returns all historical siting metadata for each station (requires `complete=1`).
			 * @example "sitinghistory=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			sitinghistory?: BooleanStringType;
		}
>;
