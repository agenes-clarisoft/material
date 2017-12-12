import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule
  ]
})
export class MdComponentsModule { }
