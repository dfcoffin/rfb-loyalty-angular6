import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RfbloyaltySharedModule} from 'app/shared';
import {
    RfbUserComponent,
    RfbUserDeleteDialogComponent,
    RfbUserDeletePopupComponent,
    RfbUserDetailComponent,
    rfbUserPopupRoute,
    rfbUserRoute,
    RfbUserUpdateComponent
} from './';

const ENTITY_STATES = [...rfbUserRoute, ...rfbUserPopupRoute];

@NgModule({
    imports: [RfbloyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RfbUserComponent,
        RfbUserDetailComponent,
        RfbUserUpdateComponent,
        RfbUserDeleteDialogComponent,
        RfbUserDeletePopupComponent
    ],
    entryComponents: [RfbUserComponent, RfbUserUpdateComponent, RfbUserDeleteDialogComponent, RfbUserDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyaltyRfbUserModule {}
