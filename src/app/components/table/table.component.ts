import { Component, Input, OnInit } from '@angular/core';
import { FIELD_NAME, TableRow } from '../../models/TableData';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() title: string;
    @Input() rows: TableRow[];

    fieldName = FIELD_NAME;

    constructor() { }

    ngOnInit() {
    }

    getSymbol(fieldName: string): string {
        switch (fieldName) {
            case this.fieldName.NC2_PR_NORM:
            case this.fieldName.YTD_PR_NORM:
                return '%'
            default:
                return '';
        }
    }

    isDateShown = (fieldName: string) => ['LVAL_NORM', 'CLOSE_ADJ_NORM', 'PY_CLOSE'].includes(fieldName);

    setClass(fieldName: string, value: number) {
        return {
            'negative': ['NC2_PR_NORM', 'NC2_NORM', 'YTD_PR_NORM'].includes(fieldName) && value < 0,
            'positive': ['NC2_PR_NORM', 'NC2_NORM', 'YTD_PR_NORM'].includes(fieldName) && value > 0,
        }
    }

}
