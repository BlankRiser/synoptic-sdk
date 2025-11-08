import type { ResponseFormatParams } from "./common.schema";

export type NetworkTypesSearchParams = Partial<
	Pick<ResponseFormatParams, "output">
> & {
	/**
	 * @description (id) — Internal SynopticLabs ID number for the network type
	 * @example "id=1,2,3,4"
	 * @type {string}
	 * @optional
	 */
	id: string;
};
