import type {
	QcSummary,
	Station,
	Summary,
	VariableUnits,
} from "./common.schema";

export type TimeseriesResponse = {
	STATION: Partial<Omit<Station, "OBSERVATIONS">> &
		{
			OBSERVATIONS: TimeseriesObservations;
		}[];
	SUMMARY: Partial<Summary>;
	QC_SUMMARY: Partial<QcSummary>;
	UNITS: Partial<VariableUnits>;
};

type TimeseriesObservations = {
	[key: string]: (string | number)[];
};
