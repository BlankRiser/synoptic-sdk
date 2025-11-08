import type { ResponseFormatParams } from "./common.schema";

export type VariablesSearchParams = Partial<
	Pick<ResponseFormatParams, "output">
>;
