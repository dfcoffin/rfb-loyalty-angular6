import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RfbloyaltySharedModule} from 'app/shared';
import {
    RfbLocationComponent,
    RfbLocationDeleteDialogComponent,
    RfbLocationDeletePopupComponent,
    RfbLocationDetailComponent,
    rfbLocationPopupRoute,
    rfbLocationRoute,
    RfbLocationUpdateComponent
} from './';

const ENTITY_STATES = [...rfbLocationRoute, ...rfbLocationPopupRoute];

@NgModule({
    imports: [RfbloyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RfbLocationComponent,
        RfbLocationDetailComponent,
        RfbLocationUpdateComponent,
        RfbLocationDeleteDialogComponent,
        RfbLocationDeletePopupComponent
    ],
    entryComponents: [RfbLocationComponent, RfbLocationUpdateComponent, RfbLocationDeleteDialogComponent, RfbLocationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyaltyRfbLocationModule {}
