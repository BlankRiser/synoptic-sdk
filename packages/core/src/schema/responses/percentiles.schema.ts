import type { Station, Summary, VariableUnits } from "./common.schema";

export type PercentilesResponse = {
	STATION: Partial<PercentilesStation>[];
	SUMMARY: Partial<Summary>;
	UNITS: Partial<VariableUnits>;
};

type PercentilesStation = Station & {
	PERCENTILES: Array<
		Record<
			string,
			{
				timezone: string;
				percentile_data: "complete" | "daily_min" | "daily_max" | "hourly";
				percentiles: Array<{
					percentile: number;
					value: number;
				}>;
			}
		>
	>;
};
