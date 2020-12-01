import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { NumberFormatPipe } from './pipes/numberFormat.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TableComponent,
        NumberFormatPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
