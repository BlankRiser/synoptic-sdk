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

describe("Test latest endpoint", () => {
	test("should have all latest fields", async () => {
		const synoptic = new Synoptic({
			token: process.env.SYNOPTIC_TOKEN,
		});

		await synoptic.latest({
			width: "233",
			timeformat: "d",
		});
	});
});

describe("Test timeseries endpoints", () => {
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

		const res = await synoptic.timeseries({
			stid: "kslc",
			vars: "air_temp,wind_speed",
			recent: "30",
		});

		console.log(res);
	});
});
