import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import * as fromRoot from '@app/state';
import * as fromLogin from '@login/state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from '@app/state';

const materials = [
    MatButtonModule
];

const NgRxModules = [
    StoreModule.forRoot(fromRoot.rootReducerMap),
    EffectsModule.forRoot([fromLogin.LoginEffects]),
    StoreDevtoolsModule.instrument({
        maxAge: 25, logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
        serializer: CustomRouterStateSerializer
    })
];
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        AppRoutingModule,
        NgRxModules,
        materials,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
