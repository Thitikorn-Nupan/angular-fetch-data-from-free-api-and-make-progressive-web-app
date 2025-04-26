import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UniversitiesTableComponent } from './components/universities-table/universities-table.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import {HttpClientModule} from "@angular/common/http";
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesTableComponent,
    MenubarComponent,
    TestAComponent,
    TestBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
