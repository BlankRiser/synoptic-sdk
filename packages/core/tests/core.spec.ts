
import { Synoptic } from '@/index';
import { describe, expect, test } from 'bun:test';

declare module "bun" {
    interface Env {
        SYNOPTIC_TOKEN: string;
    }
}

describe('Test synoptic sdk class', () => {
    test('should have core tests', async () => {
        const synoptic = new Synoptic({
            token: process.env.SYNOPTIC_TOKEN!,
        })

        expect(synoptic).toBeInstanceOf(Synoptic);

        await synoptic.latest({
            status: 'active',
            height: 1028,
            width: 907,
            bbox: "72.49485490237524,22.86460197396525,72.74594506082215,23.12667118961737",
            networkimportance: "1,2,28,153,185,206,210,239,240",
            obtimezone: "UTC",
            units: "temp|F,speed|mph,pres|mb,height|ft,precip|in,alti|inhg,fuel_moisture|%",
            qc: "on",
            qc_flags: "on",
            qc_remove_data: "off",
            qc_checks: "basic,advanced",
            complete: "1",
            sensorvars: "1",
            spacing: 37,
            vars: "air_temp",
            within: "90",
            minmax: "1",
            minmaxtype: "local",
        })
    });
});