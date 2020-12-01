export interface ResponseData {
    quotes?: Quote[] | null;
}
export interface Quote {
    fields: QuoteData[];
}
export interface QuoteData {
    d: Date;
    v: number;
}

export interface TableRow {
    lines: RowLine[];
}

export interface RowLine {
    fieldName: string;
    value: number;
    date: Date;
}

export const FIELD_NAME = {
    LVAL_NORM: 'Last',
    CLOSE_ADJ_NORM: 'Close',
    NC2_PR_NORM: 'Day Change %',
    NC2_NORM: 'Day Change',
    VOL: 'Volume',
    TUR: 'Turnover',
    PY_CLOSE: 'Previous year close',
    YTD_PR_NORM: 'YTD %',
};