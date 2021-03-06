import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '@login/login-routing.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from '@login/components/login.component';
import { LoginFormComponent } from '@login/components/login-form/login-form.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromLogin from '@login/state';

const materials = [
    MatButtonModule
]
@NgModule({
    declarations: [LoginComponent, LoginFormComponent],
    imports: [
        materials,
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        EffectsModule.forFeature([fromLogin.LoginEffects])
    ],
})
export class LoginModule {

}
