export type NetworkResponse = {
	MNET: Partial<Array<Mnet>>;
	SUMMARY: Partial<NetworkSummary>;
};

type Mnet = {
	ID: string;
	SHORTNAME: string;
	LONGNAME: string;
	URL: string;
	CITATION: string;
	PROGRAM: string;
	CATEGORY: string;
	LAST_OBSERVATION: string;
	REPORTING_STATIONS: number;
	ACTIVE_STATIONS: number;
	TOTAL_STATIONS: number;
	PERCENT_ACTIVE: number;
	PERCENT_REPORTING: number;
	PERIOD_CHECKED: number;
	ACTIVE_RESTRICTED: number;
	TOTAL_RESTRICTED: number;
	PERIOD_OF_RECORD: PeriodOfRecord;
};

type PeriodOfRecord = {
	start: string;
	end: string;
};

type NetworkSummary = {
	NUMBER_OF_OBJECTS: number;
	RESPONSE_CODE: number;
	RESPONSE_MESSAGE: string;
	METADATA_QUERY_TIME: string;
	METADATA_PARSE_TIME: string;
	TOTAL_METADATA_TIME: string;
	TOTAL_TIME: string;
	VERSION: string;
};
