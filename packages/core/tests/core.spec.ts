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
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
		});

		expect(synoptic).toBeInstanceOf(Synoptic);
	});
});

describe("Test /variables endpoints", () => {
	test("should have all variables fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
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
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
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
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
		});

		await synoptic.networkTypes();
	});
});

describe("Test /qctypes endpoints", () => {
	test("should have all qc types fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
		});

		const res = await synoptic.qcTypes();

		await Bun.write("./qc_types.json", JSON.stringify(res, null, 2));
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
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
		});

		await synoptic.timeseries({
			stid: "kslc",
			vars: "air_temp,wind_speed",
			recent: "30",
		});
	});
});

describe("Test /metadata endpoints", () => {
	test("should have all timeseries fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
		});

		await synoptic.metadata({
			stid: "bdvm8",
			complete: "1",
			pedon: "1",
		});
	});
});

describe("Test /nearest endpoints", () => {
	test("should have all timeseries fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
			options: {
				hooks: {
					beforeRequest: [
						(request) => {
							console.log(request);
						},
					],
				},
			},
		});

		const res = await synoptic.nearest({
			stid: "bdvm8",
			complete: "1",
		});

		await Bun.write("./_response.json", JSON.stringify(res, null, 2));
	});
});
