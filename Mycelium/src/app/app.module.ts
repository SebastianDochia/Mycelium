import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerComponent } from './manager/manager.component';
import { WorkingEnvComponent } from './working-env/working-env.component';
import { WorkspaceComponent } from './manager/workspace/workspace.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    WorkingEnvComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
