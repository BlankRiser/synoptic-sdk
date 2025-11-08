export type Station = {
	ID: string;
	STID: string;
	NAME: string;
	ELEVATION: string;
	LATITUDE: string;
	LONGITUDE: string;
	STATUS: string;
	MNET_ID: string;
	STATE: string;
	COUNTRY: string;
	TIMEZONE: string;
	ELEV_DEM: string;
	NWSZONE: string;
	NWSFIREZONE: string;
	GACC: string;
	SHORTNAME: string;
	LONGNAME: string;
	URL: string;
	PROGRAM: string;
	CITATION: string;
	SGID: string;
	COUNTY: string;
	WIMS_ID: string;
	CWA: string;
	PERIOD_OF_RECORD: PeriodOfRecord;
	PROVIDERS: Provider[];
	SITING: Siting[];
	SENSOR_VARIABLES: SensorVariables;
	UNITS: Units;
	OBSERVATIONS: Observations;
	QC_FLAGGED: boolean;
	MINMAX: Minmax;
	RESTRICTED: boolean;
	RESTRICTED_METADATA: boolean;
};

export type Units = {
	position: string;
	elevation: string;
};

export type VariableUnits = Record<string, string>;

export type PeriodOfRecord = {
	start: string;
	end: string;
};

export type Dimension = unknown;

export type Provider = {
	name: string;
	url: string;
};

export type VariableMetada = {
	position: string;
	dimension: Dimension;
	summary: string;
	PERIOD_OF_RECORD: PeriodOfRecord;
};

type WeatherVariable = string;

type DerivedValue = {
	derived_from: string[];
};

// Conditional type: if key ends with 'd', it's a DerivedValue, otherwise BaseValue
type ValueType<K extends string> = K extends `${string}d`
	? DerivedValue
	: VariableMetada;

// Single weather variable structure with index signature
type WeatherVariableData<V extends WeatherVariable> = {
	[K in `${V}_value_${string}`]: ValueType<K>;
};

export type SensorVariables = {
	[V in WeatherVariable]: WeatherVariableData<V>;
};

export type Observations = {
	string: {
		value: number;
		date_time: string;
		qc: Qc;
	};
};

export type Siting = {
	start: string;
	end: string;
	slope_cat: string;
	slope_deg: string;
	aspect_deg: string;
	aspect_card: string;
	cover: string;
	treatment: string;
	hydro_cond: string;
	curve: number;
};

export type Qc = {
	status: string;
	qc_flags: number[];
};

export type Minmax = {
	string: {
		dates: string[];
		value_min_local: number[];
		value_max_local: number[];
		datetime_min_local: string[];
		datetime_max_local: string[];
		datetime_timezone: string;
	};
};

export type Summary = {
	NUMBER_OF_OBJECTS: number;
	RESPONSE_CODE: number;
	RESPONSE_MESSAGE: string;
	METADATA_QUERY_TIME: string;
	METADATA_PARSE_TIME: string;
	TOTAL_METADATA_TIME: string;
	DATA_CACHE_QUERY_TIME: string;
	DATA_QUERY_TIME: string;
	QC_QUERY_TIME: string;
	DATA_PARSE_TIME: string;
	TOTAL_DATA_TIME: string;
	TOTAL_TIME: string;
	VERSION: string;
};

export type QcSummary = {
	QC_CHECKS_APPLIED: string[];
	TOTAL_OBSERVATIONS_FLAGGED: number;
	PERCENT_OF_TOTAL_OBSERVATIONS_FLAGGED: number;
	QC_NAMES: Record<string, string>;
	QC_SHORTNAMES: Record<string, string>;
	QC_SOURCENAMES: Record<string, string>;
};
