import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [],
  declarations: [
    FooComponent,
    BarComponent,
  ],
  exports: [
    FooComponent,
    BarComponent,
  ],
})
export class FancyLibModule {}
