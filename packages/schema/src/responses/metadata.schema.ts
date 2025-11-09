import type { Station } from "./common.schema";

type MetadataStation = Partial<
	Omit<Station, "OBSERVATIONS" | "MINMAX" | "QC_FLAGGED">
> & {
	PEDON: Pedon[];
};

export type MetadataResponse = {
	STATION: Partial<MetadataStation>[];
	SUMMARY: Partial<MetadataSummary>;
};

type Pedon = {
	START: string;
	END: string;
	PEDON_ID: string;
	SOIL_ID: number;
	SOURCE_LAB: string;
	SOURCE_PEDON: string[];
	HYDRO_SOIL_GROUP: string;
	DEPTH_RESTRICT: number;
	DEPTH_RESTRICT_MIN: number;
	SOIL_LAYERS: SoilLayers[];
};

type SoilLayers = {
	clay: number;
	sand: number;
	silt: number;
	depth: number;
	lab_texture: string;
	bulk_density: number;
	water_content_0kpa: string;
	water_content_10kpa: string;
	water_content_33kpa?: number;
	water_content_1500kpa: number;
};

type MetadataSummary = {
	NUMBER_OF_OBJECTS: number;
	RESPONSE_CODE: number;
	RESPONSE_MESSAGE: string;
	METADATA_QUERY_TIME: string;
	METADATA_PARSE_TIME: string;
	TOTAL_METADATA_TIME: string;
	TOTAL_TIME: string;
	VERSION: string;
};
