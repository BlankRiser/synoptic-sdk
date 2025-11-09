import type {
	BooleanStringType,
	QualityControlParams,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
	UnitsParams,
} from "./common.schema";

export type NearestSearchParams = Partial<
	StationSelectionsParams &
		QualityControlParams &
		ResponseFormatParams &
		UnitsParams & {
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
			 * @description Include variables with no observations.
			 * @type {BooleanStringType} - "0" | "1"
			 * @example "showemptyvars=1"
			 * @optional
			 */
			showemptyvars: BooleanStringType;

			/**
			 * @description Disable or include High Frequency METAR data (5-min interval data).
			 * @type {BooleanStringType} - "0" | "1"
			 * @example "hfmetars=0"
			 * @optional
			 */
			hfmetars: BooleanStringType;

			/**
			 * @description Include sensor-specific metadata for each variable.
			 * @type {BooleanStringType} - "0" | "1"
			 * @example "sensorvars=1"
			 * @optional
			 */
			sensorvars: BooleanStringType;

			/**
			 * @description Return all historical siting metadata.
			 * @type {BooleanStringType} - "0" | "1"
			 * Requires `complete=1`.
			 * @example "sitinghistory=1"
			 * @optional
			 */
			sitinghistory: BooleanStringType;
		}
>;
