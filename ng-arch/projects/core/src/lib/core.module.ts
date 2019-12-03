import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [CoreComponent],
  imports: [
    HttpClientModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
