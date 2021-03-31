import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerComponent } from './manager/manager.component';
import { WorkingEnvComponent } from './working-env/working-env.component';
import { WorkspaceComponent } from './manager/workspace/workspace.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './manager/statistics/statistics.component';

import { DemoMaterialModule } from './material.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FileManagerComponent } from './working-env/file-manager/file-manager.component';
import { UserListComponent } from './working-env/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    WorkingEnvComponent,
    WorkspaceComponent,
    StatisticsComponent,
    FileManagerComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
