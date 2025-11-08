export type NetworkTypesResponse = {
	MNETCAT: Partial<MnetLabelMetadata[]>;
	SUMMARY: Partial<NetworkTypesSummary>;
};

export type MnetLabelMetadata = {
	ID: string;
	NAME: string;
	DESCRIPTION: string;
	PERIOD_OF_RECORD: PeriodOfRecord;
};

export type PeriodOfRecord = {
	start: string;
	end: string;
};

export type NetworkTypesSummary = {
	NUMBER_OF_OBJECTS: number;
	RESPONSE_CODE: number;
	RESPONSE_MESSAGE: string;
	METADATA_QUERY_TIME: string;
	METADATA_PARSE_TIME: string;
	TOTAL_METADATA_TIME: string;
	TOTAL_TIME: string;
	VERSION: string;
};
