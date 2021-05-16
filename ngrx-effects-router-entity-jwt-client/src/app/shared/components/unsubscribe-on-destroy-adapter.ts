import { Injectable, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Injectable()
export abstract class UnsubscribeOnDestroyAdapter implements OnDestroy {
    subscriptions: SubSink = new SubSink();

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
