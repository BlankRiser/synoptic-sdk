import type { ResponseFormatParams } from "./common.schema";

export type NetworksSearchParams = Partial<
	Pick<ResponseFormatParams, "output"> & {
		/**
		 * @description (network id) — Single or comma-separated list of network IDs.
		 * @example "id=1,2,3,4"
		 * @type {string}
		 * @optional
		 */
		id: string;

		/**
		 * @description (network short name) — Single or comma-separated list of network short names.
		 * @example "shortname=uunet,raws"
		 * @type {string}
		 * @optional
		 */
		shortname: string;

		/**
		 * @description (alphabet) — Determines the sorting order. Only valid value is "alphabet". By default, networks are sorted by ID.
		 * @example "sortby=alphabet"
		 * @type {"alphabet"}
		 * @optional
		 */
		sortby: "alphabet";
	}
>;
