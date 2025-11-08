export type QCTypesResponse = {
	QCTYPES: Qctypes[];
	SUMMARY: QctypesSummary;
};

type Qctypes = {
	ID: string;
	NAME: string;
	SHORTNAME: string;
	SOURCE_ID: string;
};

type QctypesSummary = {
	NUMBER_OF_OBJECTS: number;
	RESPONSE_CODE: number;
	RESPONSE_MESSAGE: string;
	METADATA_QUERY_TIME: string;
	METADATA_PARSE_TIME: string;
	TOTAL_METADATA_TIME: string;
	TOTAL_TIME: string;
	VERSION: string;
};
