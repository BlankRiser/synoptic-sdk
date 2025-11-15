import type {
	QcSummary,
	Station,
	Summary,
	VariableUnits,
} from "./common.schema";

type NearestStation = Partial<Omit<Station, "MINMAX">>;

export type NearestResponse = {
	STATION: Partial<NearestStation>[];
	SUMMARY: Partial<Summary>;
	QC_SUMMARY: Partial<QcSummary>;
	UNITS: Partial<VariableUnits>;
};
