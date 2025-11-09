import type {
	BooleanStringType,
	QualityControlParams,
	ResponseFormatParams,
	StationSelectionsParams,
	UnitsParams,
} from "./common.schema";

export type MetadataParams = Partial<
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
			 * @description Include sensor-specific metadata for each variable.
			 * @type {BooleanStringType} - "0" | "1"
			 * @example "sensorvars=1"
			 * @optional
			 */
			sensorvars: BooleanStringType;

			/**
			 * @description (start, end) — Used to return station metadata for a specific period defined with start and end times.
			 * Accepted time format is `YYYYmmddHHMM` where:
			 * - `YYYY` = year
			 * - `mm` = month
			 * - `dd` = day
			 * - `HH` = hour
			 * - `MM` = minute
			 *
			 * The start parameter must be used with the end parameter.
			 * Example: `obrange=20130601,20130602`.
			 * If no end is provided, the response will contain all stations returned from start until the current time.
			 * @example "obrange=20130601,20130602"
			 * @type {string}
			 * @optional
			 */
			obrange?: string;

			/**
			 * @description (0 [default], 1) — Includes a PEDON key in the response for each station object,
			 * with a list of objects representing pedon soil analysis reports.
			 * By default, only the most recent pedon report is returned.
			 * @example "pedon=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			pedon?: BooleanStringType;

			/**
			 * @description (0 [default], 1) — Returns all historical pedon reports available for each station,
			 * as a list within the PEDON key.
			 * @example "pedonhistory=1"
			 * @type {BooleanStringType} - "0" | "1"
			 * @optional
			 */
			pedonhistory?: BooleanStringType;

			/**
			 * @description Return all historical siting metadata.
			 * @type {BooleanStringType} - "0" | "1"
			 * Requires `complete=1`.
			 * @example "sitinghistory=1"
			 * @optional
			 */
			sitinghistory: BooleanStringType;

			/**
			 * @description Comma-separated list of metadata fields to include.  Only works with attributes defined in the default metadata set (e.g. attributes shown via complete=1 cannot be selected)
			 * @example "fields=stid,name"
			 * @required
			 */
			fields: string;
		}
>;
