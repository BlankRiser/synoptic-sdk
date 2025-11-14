import { describe, expect, test } from "bun:test";
import { Synoptic } from "@/index";

declare module "bun" {
	interface Env {
		SYNOPTIC_TOKEN: string;
	}
}

describe("Test synoptic sdk class", () => {
	test("should have core tests", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		expect(synoptic).toBeInstanceOf(Synoptic);
	});
});

describe("Test /variables endpoints", () => {
	test("should have all variables fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.variables({
			output: "json",
		});
	});
});

describe("Test /networks endpoints", () => {
	test("should have all networks fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.networks({
			output: "json",
		});
	});
});

describe("Test /networktypes endpoints", () => {
	test("should have all network types fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.networkTypes();
	});
});

describe("Test /qctypes endpoints", () => {
	test("should have all qc types fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.qcTypes();
	});
});

describe("Test /latest endpoint", () => {
	test("should have all latest fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.latest({
			stid: "kslc",
			vars: "air_temp,wind_speed",
			within: "60",
			complete: "1",
			fields: "stid,name",
		});
	});
});

describe("Test /timeseries endpoints", () => {
	test("should have all timeseries fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.timeseries({
			stid: "kslc",
			vars: "air_temp,wind_speed",
			recent: "30",
		});
	});
});

describe("Test /metadata endpoints", () => {
	test("should have all metadata fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.metadata({
			stid: "bdvm8",
			complete: "1",
			pedon: "1",
		});
	});
});

describe("Test /nearest endpoints", () => {
	test("should have all nearest fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.nearest({
			stid: "bdvm8",
			complete: "1",
		});
	});
});

describe("Test /latency endpoints", () => {
	test("should have all latency fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.latency({
			stid: "bdvm8",
			complete: "1",
			start: "202510121200",
			end: "202510131200",
		});
	});
});

describe("Test /precipitation endpoints", () => {
	test("should have all precipitation fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		const res = await synoptic.precipitation({
			stid: "bdvm8",
			complete: "1",
			start: "202510121200",
			end: "202510131200",
			pmode: "totals",
		});

		await Bun.write(
			"precipitation_response.json",
			JSON.stringify(res, null, 2),
		);
	});
});

// describe("Test /percentiles endpoints", () => {
// 	test("should have all percentiles fields", async () => {
// 		const synoptic = new Synoptic({
// 			token: process.env.SYNOPTIC_TOKEN,
// 		});

// 		await synoptic.percentiles({
// 			stid: "bdvm8",
// 			vars: "wind_speed",
// 		});
// 	});
// });

// describe("Test /statistics endpoints", () => {
// 	test("should have all statistics fields", async () => {
// 		const synoptic = new Synoptic({
// 			token: process.env.SYNOPTIC_TOKEN,
// 		});

// 		await synoptic.statistics({
// 			stid: "bdvm8",
// 			vars: "wind_speed",
// 			period: "day",
// 			statistic: "max",
// 			start: "20020814",
// 			end: "20251114",
// 		});
// 	});
// });
