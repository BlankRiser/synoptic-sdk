import type { Station, Summary, VariableUnits } from "./common.schema";

export type PrecipitationResponse = {
	STATION: Partial<PrecipitationStation>[];
	SUMMARY: Partial<Summary>;
	UNITS: Partial<VariableUnits>;
};

type PrecipitationStation = Omit<Station, "OBSERVATIONS"> & {
	OBSERVATIONS: {
		precipitation: Array<
			Partial<{
				total: number;
				first_report: string;
				last_report: string;
				count: number;
				report_type: string;
			}>
		>;
	};
};
