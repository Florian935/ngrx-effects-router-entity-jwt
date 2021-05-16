import { Params } from '@angular/router';

export const routerFeatureKey = 'router';

export interface RouterUrlState {
    url: string;
    params: Params;
    queryParams: Params;
}
