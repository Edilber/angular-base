import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/counter/contador.component";

@NgModule({
  declarations : [
    ContadorComponent
  ],

  exports: [
    ContadorComponent
  ]
})

export class CounterModule {

}
