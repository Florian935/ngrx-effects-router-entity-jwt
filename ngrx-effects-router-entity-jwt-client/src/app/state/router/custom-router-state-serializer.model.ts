import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterUrlState } from './router-url.state';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterUrlState> {

    serialize(routerState: RouterStateSnapshot): RouterUrlState {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams }
        } = routerState;

        const { params } = route;

        return { url, params, queryParams };
    }
}
