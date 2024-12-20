import  { NgModule } from "@angular/core";
import  { BrowserModule } from "@angular/platform-browser";

import  { AppComponent } from "./app.component";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent, 
        ContadorComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}