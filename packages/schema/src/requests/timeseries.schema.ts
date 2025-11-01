import { z } from "zod";

export const timeseriesSchema = z.object({})

export type TimeseriesParams = z.infer<typeof timeseriesSchema>;