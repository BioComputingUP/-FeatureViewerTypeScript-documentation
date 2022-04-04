import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FeatureviewerComponent } from './featureviewer/featureviewer.component';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
// Import your required language in main.ts or at the root of your application
// see https://codemirror.net/mode/index.html
import 'codemirror/mode/javascript/javascript';
import { DemosComponent } from './demos/demos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureviewerComponent,
    DemosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    CodemirrorModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
