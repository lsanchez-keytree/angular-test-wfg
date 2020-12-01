import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { ResponseData } from '../models/TableData';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getToken(): Observable<any> {
        return this.http.post<any>(
            `${env.API_BASE}/oauth/token`, {}, { params: env.auth }
        );
    }

    getTableData(fields: string[]): Observable<ResponseData> {
        const params = {
            fields: fields.join(',')
        }

        return this.http.get<ResponseData>(
            `${env.API_BASE}/quotes/2970161-1058-814`, { params },
        );
    }
}
