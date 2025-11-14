import type { Station, Summary, VariableUnits } from "./common.schema";

export type StatisticsResponse = {
	STATION: Partial<StatisticsStation>[];
	SUMMARY: Partial<Summary>;
	UNITS: Partial<VariableUnits>;
};

type StatisticsStation = Station & {
	STATISTICS: Array<
		Record<
			string,
			Partial<{
				max: number;
				max_time: string;
				time_period: {
					type: string;
					value: string;
					timezone: string;
				};
			}>
		>
	>;
};
