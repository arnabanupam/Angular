import { Routes } from '@angular/router';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: AllTasksComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
    /*
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }*/
];
