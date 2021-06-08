import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import {ChildModule} from '../child/child.module';
import {CarDirective} from '../../directives/car.directive';

@NgModule({
  declarations: [
    ParentComponent,
    CarDirective
  ],
  imports: [
    CommonModule,
    ChildModule,
  ],
  exports: [ParentComponent]
})
export class ParentModule { }
