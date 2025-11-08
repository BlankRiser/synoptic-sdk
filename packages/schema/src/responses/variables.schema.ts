export type VariablesResponse = {
	VARIABLES: {
		[key: string]: VariableLabelMetadata[];
	};
	SUMMARY: VariableLabelSummary;
};

type VariableLabelMetadata = {
	vid: string;
	long_name: string;
	unit: string;
};
type VariableLabelSummary = {
	NUMBER_OF_OBJECTS: number;
	RESPONSE_CODE: number;
	RESPONSE_MESSAGE: string;
	TOTAL_METADATA_TIME: string;
	TOTAL_TIME: string;
	VERSION: string;
};
