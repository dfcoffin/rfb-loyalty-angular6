import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {RfbloyaltyRfbLocationModule} from './rfb-location/rfb-location.module';
import {RfbloyaltyRfbEventModule} from './rfb-event/rfb-event.module';
import {RfbloyaltyRfbEventAttendanceModule} from './rfb-event-attendance/rfb-event-attendance.module';
import {RfbloyaltyRfbUserModule} from './rfb-user/rfb-user.module';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        RfbloyaltyRfbLocationModule,
        RfbloyaltyRfbEventModule,
        RfbloyaltyRfbEventAttendanceModule,
        RfbloyaltyRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyaltyEntityModule {}
