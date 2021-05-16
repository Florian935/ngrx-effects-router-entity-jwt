import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '@app/state';
import * as fromLogin from '@login/state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title$: Observable<string> = this._store.pipe(select(fromApp.selectTitle));

    constructor(private _store: Store<fromApp.RootState>) {}

    ngOnInit(): void {
        this._store.dispatch(fromLogin.tryAutoConnect());
        this._store.dispatch(fromApp.initTitle());
    }
}
