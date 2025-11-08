import type {
	BooleanStringType,
	QualityControlParams,
	ResponseFormatParams,
	StationSelectionsParams,
	TimeZoneType,
	UnitsParams,
} from "./common.schema";

/**
 * Represents the complete set of parameters accepted by the "Latest" endpoint.
 *
 * This interface defines all query parameters used to request the most recent
 * observation(s) from one or more stations.
 *
 * Parameters are grouped as follows:
 *
 * **1. Station Selection**
 *  - `stid`, `state`, `country`, `nwszone`, `nwsfirezone`, `cwa`, `gacc`, `subgacc`, `county`
 *
 * **2. Variable and Network Selection**
 *  - `vars`, `varsoperator`, `network`, `networkimportance`
 *
 * **3. Geospatial Filters**
 *  - `radius`, `bbox`, `height`, `width`, `spacing`
 *
 * **4. Output Filtering and Formatting**
 *  - `fields`, `obtimezone`, `showemptystations`, `showemptyvars`, `units`
 *
 * **5. Temporal Constraints**
 *  - `within`, `minmax`, `minmaxtype`, `minmaxtimezone`
 *
 * **6. Quality Control Options**
 *  - `hfmetars`, `sensorvars`, `sitinghistory`, `value_percentile`, `qc`, `qc_remove_data`, `qc_flags`, `qc_checks`
 *
 * **7. Output Format**
 *  - `timeformat`, `output`
 *
 * All parameters are passed as query strings in an HTTP GET request.
 * Some fields are optional and may accept comma-separated or negated values (e.g., `!stid`).
 * @see [/latest](https://docs.synopticdata.com/services/latest)
 *
 */
export type LatestSearchParams = Partial<
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
			 * @description Restricts results to observations within a time window (in minutes).
			 * @example "within=60"
			 * @required
			 */
			within: string;

			/**
			 * @description Number of days to return min/max values (up to 7).
			 * @example "minmax=3"
			 * @required
			 */
			minmax: string;

			/**
			 * @description Whether min/max are calculated by `UTC` or `local` day.
			 * @type {OutputFormatType} - "UTC" | "local"
			 * @example "minmaxtype=local"
			 * @optional
			 */
			minmaxtype: TimeZoneType;

			/**
			 * @description Controls timezone of returned min/max timestamps.
			 * @type {OutputFormatType} - "UTC" | "local"
			 * Matches `minmaxtype` by default.
			 * @example "minmaxtimezone=UTC"
			 * @optional
			 */
			minmaxtimezone: TimeZoneType;

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

			/**
			 * @description Returns percentile for observed value.
			 * Accepted: `complete`, `daily_min`, `daily_max`.
			 * @example "value_percentile=complete"
			 * @optional
			 */
			value_percentile: "complete" | "daily_min" | "daily_max" | string;
		}
>;
