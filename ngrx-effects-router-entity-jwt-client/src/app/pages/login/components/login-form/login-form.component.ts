import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICredential, Nullable } from '@shared/index';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    loginForm!: FormGroup;
    @Input() errorMessage: Nullable<string>;
    @Output() submitCredential: EventEmitter<ICredential> = new EventEmitter<ICredential>();

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildLoginForm();
    }

    private buildLoginForm(): void {
        this.loginForm = this._formBuilder.group({
            login: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onSubmitForm(): void {
        const credentials: ICredential = { ...this.loginForm.value };
        this.submitCredential.emit(credentials);
    }
}
