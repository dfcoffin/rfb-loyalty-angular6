import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes} from '@angular/router';
import {JhiResolvePagingParams} from 'ng-jhipster';
import {UserRouteAccessService} from 'app/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {IRfbEvent, RfbEvent} from 'app/shared/model/rfb-event.model';
import {RfbEventService} from './rfb-event.service';
import {RfbEventComponent} from './rfb-event.component';
import {RfbEventDetailComponent} from './rfb-event-detail.component';
import {RfbEventUpdateComponent} from './rfb-event-update.component';
import {RfbEventDeletePopupComponent} from './rfb-event-delete-dialog.component';

@Injectable({ providedIn: 'root' })
export class RfbEventResolve implements Resolve<IRfbEvent> {
    constructor(private service: RfbEventService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((rfbEvent: HttpResponse<RfbEvent>) => rfbEvent.body));
        }
        return of(new RfbEvent());
    }
}

export const rfbEventRoute: Routes = [
    {
        path: 'rfb-event',
        component: RfbEventComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_ORGANIZER', 'ROLE_ADMIN'],
            defaultSort: 'id,asc',
            pageTitle: 'Events'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rfb-event/:id/view',
        component: RfbEventDetailComponent,
        resolve: {
            rfbEvent: RfbEventResolve
        },
        data: {
            authorities: ['ROLE_ORGANIZER', 'ROLE_ADMIN'],
            pageTitle: 'Events'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rfb-event/new',
        component: RfbEventUpdateComponent,
        resolve: {
            rfbEvent: RfbEventResolve
        },
        data: {
            authorities: ['ROLE_ORGANIZER', 'ROLE_ADMIN'],
            pageTitle: 'Events'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rfb-event/:id/edit',
        component: RfbEventUpdateComponent,
        resolve: {
            rfbEvent: RfbEventResolve
        },
        data: {
            authorities: ['ROLE_ORGANIZER', 'ROLE_ADMIN'],
            pageTitle: 'Events'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const rfbEventPopupRoute: Routes = [
    {
        path: 'rfb-event/:id/delete',
        component: RfbEventDeletePopupComponent,
        resolve: {
            rfbEvent: RfbEventResolve
        },
        data: {
            authorities: ['ROLE_ORGANIZER', 'ROLE_ADMIN'],
            pageTitle: 'Events'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
