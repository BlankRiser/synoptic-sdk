import type { Station, Summary, VariableUnits } from "./common.schema";

export type QCSegmentsResponse = {
	STATION: Partial<QCSegmentStation>[];
	SUMMARY: Partial<Summary>;
	UNITS: Partial<VariableUnits>;
	QC_SHORTNAMES: Record<string, string>;
	QC_SOURCENAMES: Record<string, string>;
	QC_NAMES: Record<string, string>;
};

type QCSegmentStation = Station & {
	QC: Array<
		Partial<{
			start: string;
			qc_flag: number;
			sensor: string;
			end: string;
			is_open: boolean;
		}>
	>;
};
