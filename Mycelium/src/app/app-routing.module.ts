import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerWorkspaceResolverService } from "./manager/manager-workspace-resolver.service";
import { ManagerComponent } from "./manager/manager.component";
import { StatisticsComponent } from "./manager/statistics/statistics.component";
import { WelcomeComponent } from "./manager/welcome/welcome.component";
import { WorkingEnvComponent } from "./working-env/working-env.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/manager', pathMatch: 'full' },
    { path: 'manager', component: ManagerComponent, children: [
        { path: '', component: WelcomeComponent },
        { path: ':id', component: StatisticsComponent, resolve: [ManagerWorkspaceResolverService] }
    ]},
    { path: 'working-env', component: WorkingEnvComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}