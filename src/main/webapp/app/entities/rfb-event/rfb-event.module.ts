import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RfbloyaltySharedModule} from 'app/shared';
import {
    RfbEventComponent,
    RfbEventDeleteDialogComponent,
    RfbEventDeletePopupComponent,
    RfbEventDetailComponent,
    rfbEventPopupRoute,
    rfbEventRoute,
    RfbEventUpdateComponent
} from './';

const ENTITY_STATES = [...rfbEventRoute, ...rfbEventPopupRoute];

@NgModule({
    imports: [RfbloyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RfbEventComponent,
        RfbEventDetailComponent,
        RfbEventUpdateComponent,
        RfbEventDeleteDialogComponent,
        RfbEventDeletePopupComponent
    ],
    entryComponents: [RfbEventComponent, RfbEventUpdateComponent, RfbEventDeleteDialogComponent, RfbEventDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyaltyRfbEventModule {}
