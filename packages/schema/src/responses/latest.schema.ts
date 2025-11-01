import type { QcSummary, Station, Summary, VariableUnits } from "./common.schema"

export type LatestResponse = {
    STATION: Partial<Station>[]
    SUMMARY: Partial<Summary>
    QC_SUMMARY: Partial<QcSummary>
    UNITS: Partial<VariableUnits>
}
