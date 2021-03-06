import { NgModule } from "@angular/core";
import { ChartsModule } from 'ng2-charts';

import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PAGES_ROUTES } from "./pages.routes";

//temporal
import { IncrementadorComponent } from "../componentes/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../componentes/grafico-dona/grafico-dona.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({

    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ]
})

export class PagesModule {}