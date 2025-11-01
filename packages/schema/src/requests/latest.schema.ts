import { BooleanStringType, CheckDataType, OutputFormatType, StatusType, SwitchType, TimeZoneType, unitsType } from "./common.schema";

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
export type LatestSearchParams = Partial<{
    /**
     * (string, excludable) — Single or comma-separated list of SynopticLabs station IDs.
     * Use `!` before any value to exclude stations from the result.
     * @example "stid=mtmet,kslc,fps,!sample"
     * @optional
     */
    stid: string;

    /**
     * (string, excludable) — Two-character state abbreviations.
     * Defaults to United States (US) if `country` not provided.
     * @example "state=ut,wy,dc"
     * @optional
     */
    state: string;

    /**
     * (string, excludable) — Two or three-character country abbreviations.
     * @example "country=us,ca,mx"
     * @optional
     */
    country: string;

    /**
     * (string, excludable) — National Weather Service Zone codes.
     * @see [https://www.weather.gov/gis/publiczones](https://www.weather.gov/gis/publiczones)
     * @example "nwszone=UT003,CA041"
     * @optional
     */
    nwszone: string;

    /**
     * (string, excludable) — National Weather Service Fire Zones.
     * @see [https://www.weather.gov/gis/firezones](https://www.weather.gov/gis/firezones)
     * @example "nwsfirezone=LOX241"
     * @optional
     */
    nwsfirezone: string;

    /**
     * (string, excludable) — County Warning Areas (CWA) identifiers.
     * @see [https://www.weather.gov/gis/CWABounds](https://www.weather.gov/gis/CWABounds)
     * @example "cwa=LOX"
     * @optional
     */
    cwa: string;

    /**
     * (string, excludable) — Geographic Area Coordination Centers (GACC).
     * @example "gacc=GB"
     * @optional
     */
    gacc: string;

    /**
     * (string, excludable) — Sub Geographic Area Coordination Centers.
     * @example "subgacc=EB07"
     * @optional
     */
    subgacc: string;

    /**
     * (string, excludable) — County name(s).  
     * Use the `state` parameter to disambiguate duplicate county names.
     * @example "county=king&state=wa"
     * @optional
     */
    county: string;

    /**
     * (string) — Comma-separated list of sensor variables.
     * Filters stations that sense specific variables.
     * @see [https://demos.synopticdata.com/variables/index.html](https://demos.synopticdata.com/variables/index.html)
     * @example "vars=wind_speed,pressure"
     * @required
     */
    vars: string;

    /**
     * (string) — Defines how `vars` is interpreted. 
     * 
     * `or` (default): any variable match; `and`: all variables must match.
     * @default "or"
     * @example "varsoperator=and"
     * @optional
     */
    varsoperator: "and" | "or";

    /**
     * (number|string, excludable) — Comma-separated list of network IDs or short names.
     * Use `!` to exclude networks.
     * @example "network=153" or "network=44,251"
     * @optional
     */
    network: string | number;

    /**
     * (string) — A radius-based station selection filter.
     * Accepts [lat,lon,miles] or [stid,miles].
     * @example "radius=41.5,-120.25,20"
     * @required
     */
    radius: string;

    /**
     * (string) — Bounding box defined by [lonmin,latmin,lonmax,latmax].
     * Coordinates are decimal degrees.
     * @example "bbox=-120,40,-119,41"
     * @required
     */
    bbox: string;

    /**
     * (number) — Height of the map viewport in pixels.
     * Used only with `bbox`.
     * @optional
     */
    height: number;

    /**
     * (number) — Width of the map viewport in pixels.
     * Used only with `bbox`.
     * @optional
     */
    width: number;

    /**
     * (number) — Preferred pixel spacing between stations on the map.
     * Used only with `bbox`.
     * @optional
     */
    spacing: number;

    /**
     * (string) — Comma-separated list of network IDs ordered by preference.
     * Determines which networks are prioritized in map thinning.
     * @required
     */
    networkimportance: string;

    /**
     * (string) — Returns only active or inactive stations.
     * @type {StatusType} - "active" | "inactive"
     * @example "status=active"
     * @optional
     */
    status: StatusType;

    /**
     * (boolean) — When `1`, returns extended metadata for each station.
     * @type {BooleanStringType} - "0" | "1"
     * @example "complete=1"
     * @optional
     */
    complete: BooleanStringType;

    /**
     * (string) — Comma-separated list of metadata fields to include.
     * @example "fields=stid,name"
     * @required
     */
    fields: string;

    /**
     * (string) — Output time zone: `UTC` (default) or `local`.
     * @type {OutputFormatType} - "UTC" | "local" 
     * @example "obtimezone=local"
     * @optional
     */
    obtimezone: TimeZoneType;

    /**
     * (boolean) — Include stations with no observations.
     * @type {BooleanStringType} - "0" | "1"
     * @example "showemptystations=1"
     * @optional
     */
    showemptystations: BooleanStringType;

    /**
     * (boolean) — Include variables with no observations.
     * @type {BooleanStringType} - "0" | "1"
     * @example "showemptyvars=1"
     * @optional
     */
    showemptyvars: BooleanStringType

    /**
     * (string) — Defines unit format for returned data.
     * Common values: `metric`, `english`, or custom formats like `english,speed|mph`.
     * @type {unitsType} - "english" | "metric" | string 
     * @example "units=metric" or "units=english,speed|mph"
     * @optional
     */
    units: unitsType;

    /**
     * (string) — Restricts results to observations within a time window (in minutes).
     * @example "within=60"
     * @required
     */
    within: string;

    /**
     * (string) — Number of days to return min/max values (up to 7).
     * @example "minmax=3"
     * @required
     */
    minmax: string;

    /**
     * (string) — Whether min/max are calculated by `UTC` or `local` day.
     * @type {OutputFormatType} - "UTC" | "local" 
     * @example "minmaxtype=local"
     * @optional
     */
    minmaxtype: TimeZoneType;

    /**
     * (string) — Controls timezone of returned min/max timestamps.
     * @type {OutputFormatType} - "UTC" | "local" 
     * Matches `minmaxtype` by default.
     * @example "minmaxtimezone=UTC"
     * @optional
     */
    minmaxtimezone: TimeZoneType;

    /**
     * (boolean) — Disable or include High Frequency METAR data (5-min interval data).
     * @type {BooleanStringType} - "0" | "1"
     * @example "hfmetars=0"
     * @optional
     */
    hfmetars: BooleanStringType;

    /**
     * (boolean) — Include sensor-specific metadata for each variable.
     * @type {BooleanStringType} - "0" | "1"
     * @example "sensorvars=1"
     * @optional
     */
    sensorvars: BooleanStringType;

    /**
     * (boolean) — Return all historical siting metadata.
     * @type {BooleanStringType} - "0" | "1"
     * Requires `complete=1`.
     * @example "sitinghistory=1"
     * @optional
     */
    sitinghistory: BooleanStringType;

    /**
     * (string) — Returns percentile for observed value.
     * Accepted: `complete`, `daily_min`, `daily_max`.
     * @example "value_percentile=complete"
     * @optional
     */
    value_percentile: "complete" | "daily_min" | "daily_max" | string;

    /**
     * (string) — Enables/disables quality control.
     * @type {SwitchType} - "on" | "off"
     * Default: `on`.
     * @example "qc=off"
     * @optional
     */
    qc: SwitchType

    /**
     * (string) — Determines how failed data checks are handled:
     * `off`, `on`, or `mark`.
     * @type {CheckDataType} - "on" | "off" | "mark"
     * @example "qc_remove_data=mark"
     * @optional
     */
    qc_remove_data: CheckDataType;

    /**
     * (string) — Indicates whether data check flags are returned.
     * Default: `off`.
     * @type {SwitchType} - "on" | "off"
     * @example "qc_flags=on"
     * @optional
     */
    qc_flags: SwitchType

    /**
     * (string) — Comma-separated list of applied data checks or sources.
     * Examples: "qc_checks=synopticlabs,madis" or "qc_checks=sl_range_check"
     * @required
     */
    qc_checks: string;

    /**
     * (string) — Defines time formatting in output.
     * Accepts valid strftime patterns or `%s` for Unix timestamps.
     * @example "timeformat=%m/%d/%Y at %H:%M"
     * @required
     */
    timeformat: string;

    /**
     * (string) — Response output format: `json`, `xml`, or `geojson`.
     * @type {OutputFormatType} - "json" | "xml" | "geojson"
     * @example "output=json"
     * @optional
     */
    output: OutputFormatType
}>;
