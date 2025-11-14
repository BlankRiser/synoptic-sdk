import type { Station, Summary } from "./common.schema";

export type LatencyResponse = {
	STATION: Partial<LatencyStation>[];
	SUMMARY: Partial<Omit<Summary, "QC_QUERY_TIME" | "DATA_CACHE_QUERY_TIME">>;
};

type LatencyStation = Station & {
	LATENCY: Latency;
};
type Latency = {
	date_time: string[];
	values: number[];
};
