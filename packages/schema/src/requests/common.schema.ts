import z from "zod"

export const timeZoneSchema = z.union([z.literal("UTC"), z.literal("local")])
export const switchString = z.union([z.literal("on"), z.literal("off")])
export const booleanString = z.union([z.literal("0"), z.literal("1")])
export const statusString = z.union([z.literal("active"), z.literal("inactive")])
export const unitsFormat = z.union([z.literal("metric"), z.literal("english")])
export const outputFormat = z.union([z.literal("json"), z.literal("xml"), z.literal("geojson")])

export const checkData = z.union([z.literal("on"), z.literal("off"), z.literal("mark")])

export type StatusType = z.infer<typeof statusString>;
export type BooleanStringType = z.infer<typeof booleanString>;
export type OutputFormatType = z.infer<typeof outputFormat>;
export type TimeZoneType = z.infer<typeof timeZoneSchema>;
export type unitsType = z.infer<typeof unitsFormat> | (string & {})
export type SwitchType = z.infer<typeof switchString>;
export type CheckDataType = z.infer<typeof checkData>;
