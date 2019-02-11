import { NgModule } from '@angular/core';

import { RhApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RhApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RhApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RhApplicationSharedCommonModule {}
