import { z } from "zod";

export const timeZoneSchema = z.union([z.literal("UTC"), z.literal("local")]);
export const switchString = z.union([z.literal("on"), z.literal("off")]);
export const booleanString = z.union([z.literal("0"), z.literal("1")]);
export const statusString = z.union([
	z.literal("active"),
	z.literal("inactive"),
]);
export const unitsFormat = z.union([z.literal("metric"), z.literal("english")]);
export const outputFormat = z.union([
	z.literal("json"),
	z.literal("xml"),
	z.literal("geojson"),
]);

export const checkData = z.union([
	z.literal("on"),
	z.literal("off"),
	z.literal("mark"),
]);

export type StatusType = z.infer<typeof statusString>;
export type BooleanStringType = z.infer<typeof booleanString>;
export type OutputFormatType = z.infer<typeof outputFormat>;
export type TimeZoneType = z.infer<typeof timeZoneSchema>;
export type unitsType = z.infer<typeof unitsFormat> | (string & {});
export type SwitchType = z.infer<typeof switchString>;
export type CheckDataType = z.infer<typeof checkData>;

export type StationSelectionsParams = {
	/**
	 * @description Single or comma-separated list of SynopticLabs station IDs.
	 * Use `!` before any value to exclude stations from the result.
	 * @example "stid=mtmet,kslc,fps,!sample"
	 * @optional
	 */
	stid: string;

	/**
	 * @description Two or three-character country abbreviations.
	 * @example "country=us,ca,mx"
	 * @optional
	 */
	country: string;

	/**
	 * @description Two-character state abbreviations.
	 * Defaults to United States (US) if `country` not provided.
	 * @example "state=ut,wy,dc"
	 * @optional
	 */
	state: string;

	/**
	 * @description National Weather Service Zone codes.
	 * @see [https://www.weather.gov/gis/publiczones](https://www.weather.gov/gis/publiczones)
	 * @example "nwszone=UT003,CA041"
	 * @optional
	 */
	nwszone: string;

	/**
	 * @description National Weather Service Fire Zones.
	 * @see [https://www.weather.gov/gis/firezones](https://www.weather.gov/gis/firezones)
	 * @example "nwsfirezone=LOX241"
	 * @optional
	 */
	nwsfirezone: string;

	/**
	 * @description County Warning Areas (CWA) identifiers.
	 * @see [https://www.weather.gov/gis/CWABounds](https://www.weather.gov/gis/CWABounds)
	 * @example "cwa=LOX"
	 * @optional
	 */
	cwa: string;

	/**
	 * @description Geographic Area Coordination Centers (GACC).
	 * @example "gacc=GB"
	 * @optional
	 */
	gacc: string;

	/**
	 * @description Sub Geographic Area Coordination Centers.
	 * @example "subgacc=EB07"
	 * @optional
	 */
	subgacc: string;

	/**
	 * @description County name(s).
	 * Use the `state` parameter to disambiguate duplicate county names.
	 * @example "county=king&state=wa"
	 * @optional
	 */
	county: string;

	/**
	 * @description Comma-separated list of sensor variables.
	 * Filters stations that sense specific variables.
	 * @see [https://demos.synopticdata.com/variables/index.html](https://demos.synopticdata.com/variables/index.html)
	 * @example "vars=wind_speed,pressure"
	 * @required
	 */
	vars: string;

	/**
	 * @description Defines how `vars` is interpreted.
	 *
	 * `or` (default): any variable match; `and`: all variables must match.
	 * @default "or"
	 * @example "varsoperator=and"
	 * @optional
	 */
	varsoperator: "and" | "or";

	/**
	 * (number|string, excludable) Comma-separated list of network IDs or short names.
	 * Use `!` to exclude networks.
	 * @example "network=153" or "network=44,251"
	 * @optional
	 */
	network: string | number;

	/**
	 * @description A radius-based station selection filter.
	 * Accepts [lat,lon,miles] or [stid,miles].
	 * @example "radius=41.5,-120.25,20"
	 * @required
	 */
	radius: string;

	/**
	 * @description Bounding box defined by [lonmin,latmin,lonmax,latmax].
	 * Coordinates are decimal degrees.
	 * @example "bbox=-120,40,-119,41"
	 * @required
	 */
	bbox: string;

	/**
	 * @description Height of the map viewport in pixels.
	 * Used only with `bbox`.
	 * @optional
	 */
	height: string;

	/**
	 * @description Width of the map viewport in pixels.
	 * Used only with `bbox`.
	 * @optional
	 */
	width: string;

	/**
	 * @description Preferred pixel spacing between stations on the map.
	 * Used only with `bbox`.
	 * @optional
	 */
	spacing: number;

	/**
	 * @description Comma-separated list of network IDs ordered by preference.
	 * Determines which networks are prioritized in map thinning.
	 * @required
	 */
	networkimportance: string;

	/**
	 * @description Returns only active or inactive stations.
	 * @type {StatusType} - "active" | "inactive"
	 * @example "status=active"
	 * @optional
	 */
	status: StatusType;
};

export type ResponseFormatParams = {
	/**
	 * @description Defines time formatting in output.
	 * Accepts valid strftime patterns or `%s` for Unix timestamps.
	 * @example "timeformat=%m/%d/%Y at %H:%M"
	 * @required
	 */
	timeformat: string;

	/**
	 * @description Response output format: `json`, `xml`, or `geojson`.
	 * @type {OutputFormatType} - "json" | "xml" | "geojson"
	 * @example "output=json"
	 * @optional
	 */
	output: OutputFormatType;
};

export type UnitsParams = {
	/**
	 * @description Defines unit format for returned data.
	 * Common values: `metric`, `english`, or custom formats like `english,speed|mph`.
	 * @type {unitsType} - "english" | "metric" | string
	 * @example "units=metric" or "units=english,speed|mph"
	 * @optional
	 */
	units: unitsType;
};

export type QualityControlParams = {
	/**
	 * @description Enables/disables quality control.
	 * @type {SwitchType} - "on" | "off"
	 * Default: `on`.
	 * @example "qc=off"
	 * @optional
	 */
	qc: SwitchType;

	/**
	 * @description Determines how failed data checks are handled:
	 * `off`, `on`, or `mark`.
	 * @type {CheckDataType} - "on" | "off" | "mark"
	 * @example "qc_remove_data=mark"
	 * @optional
	 */
	qc_remove_data: CheckDataType;

	/**
	 * @description Indicates whether data check flags are returned.
	 * Default: `off`.
	 * @type {SwitchType} - "on" | "off"
	 * @example "qc_flags=on"
	 * @optional
	 */
	qc_flags: SwitchType;

	/**
	 * @description Comma-separated list of applied data checks or sources.
	 * Examples: "qc_checks=synopticlabs,madis" or "qc_checks=sl_range_check"
	 * @required
	 */
	qc_checks: string;
};
