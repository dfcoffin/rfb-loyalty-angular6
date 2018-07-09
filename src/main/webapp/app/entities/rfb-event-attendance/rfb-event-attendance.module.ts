import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RfbloyaltySharedModule} from 'app/shared';
import {
    RfbEventAttendanceComponent,
    RfbEventAttendanceDeleteDialogComponent,
    RfbEventAttendanceDeletePopupComponent,
    RfbEventAttendanceDetailComponent,
    rfbEventAttendancePopupRoute,
    rfbEventAttendanceRoute,
    RfbEventAttendanceUpdateComponent
} from './';

const ENTITY_STATES = [...rfbEventAttendanceRoute, ...rfbEventAttendancePopupRoute];

@NgModule({
    imports: [RfbloyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDetailComponent,
        RfbEventAttendanceUpdateComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendanceDeletePopupComponent
    ],
    entryComponents: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceUpdateComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendanceDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyaltyRfbEventAttendanceModule {}
