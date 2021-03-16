import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerComponent } from './manager/manager.component';
import { WorkingEnvComponent } from './working-env/working-env.component';
import { WorkspaceComponent } from './manager/workspace/workspace.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './manager/statistics/statistics.component';

import { DemoMaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    WorkingEnvComponent,
    WorkspaceComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
