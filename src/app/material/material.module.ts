import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
// import{MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

const Material = [
  MatButtonModule,
  // MatButtonToggleModule
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
]

@NgModule({

  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
