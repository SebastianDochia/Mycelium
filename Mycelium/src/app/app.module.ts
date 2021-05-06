import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DemoMaterialModule } from './material.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatisticsComponent } from './manager/statistics/statistics.component';
import { FileManagerComponent } from './working-env/file-manager/file-manager.component';
import { UserListComponent } from './working-env/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { WorkingEnvComponent } from './working-env/working-env.component';
import { WorkspaceComponent } from './manager/workspace/workspace.component';

import { JwtInterceptor } from './Util/jwt.interceptor';
import { ErrorInterceptor } from './Util/error.interceptor';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    WorkingEnvComponent,
    WorkspaceComponent,
    StatisticsComponent,
    FileManagerComponent,
    UserListComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
