import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { TableRow, RowLine, QuoteData } from './models/TableData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    headerTitle = 'Market data';
    tableTitle = 'Key data';

    fields = ['LVAL_NORM', 'CLOSE_ADJ_NORM', 'NC2_PR_NORM', 'NC2_NORM', 'VOL', 'TUR', 'PY_CLOSE', 'YTD_PR_NORM']

    rows: TableRow[] = [];

    constructor(private apiService: ApiService) {

        sessionStorage.clear();

        this.apiService.getToken().subscribe(
            data => {
                if (data.access_token) {
                    sessionStorage.setItem('token', data.access_token);
                    this.getData();
                }
            }
        );
    }

    getData() {
        this.apiService.getTableData(this.fields).subscribe(
            res => {
                const data = res.quotes[0].fields;

                let position = 0;

                let row: TableRow = { lines: [] };

                this.fields.map((field, index) => {

                    let line: RowLine;

                    const fieldValue: QuoteData = data[field];

                    line = {
                        fieldName: field,
                        value: fieldValue.v,
                        date: fieldValue.d
                    }

                    row.lines.push(line)

                    if (((index) % 2)) {
                        this.rows.push(row);
                        row = { lines: [] };
                        position++;
                    }
                });
            }
        );
    }
}
