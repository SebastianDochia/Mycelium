import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ManagerWorkspaceResolverService } from "./manager/manager-workspace-resolver.service";
import { ManagerComponent } from "./manager/manager.component";
import { StatisticsComponent } from "./manager/statistics/statistics.component";
import { WelcomeComponent } from "./manager/welcome/welcome.component";
import { AuthGuard } from "./Util/auth.guard";
import { WorkingEnvComponent } from "./working-env/working-env.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/manager', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard], children: [
        { path: '', component: WelcomeComponent },
        { path: ':id', component: StatisticsComponent, resolve: [ManagerWorkspaceResolverService] }
    ]},
    { path: 'working-env', component: WorkingEnvComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}