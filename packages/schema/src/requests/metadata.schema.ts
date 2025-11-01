import { z } from "zod";

export const metadataParamsSchema = z.object({})

export type MetadataParams = z.infer<typeof metadataParamsSchema>;