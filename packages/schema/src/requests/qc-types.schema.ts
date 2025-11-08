import type { ResponseFormatParams } from "./common.schema";

export type QcTypesSearchParams = Partial<
	Pick<ResponseFormatParams, "output">
> & {
	/**
	 * @description (qc id) — Single or comma-separated list of qc IDs.
	 * @example "id=1,2,3,4"
	 * @type {string}
	 * @optional
	 */
	id: string;

	/**
	 * @description (qc short name) — A QC short names.
	 * @example "shortname=sl_range_check"
	 * @type {string}
	 * @optional
	 */
	shortname: string;
};
