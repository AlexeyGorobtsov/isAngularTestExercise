import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SystemComponent} from "./system.component";
import {CabinetPageComponent} from "./cabinet-page/cabinet-page.component";

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'cabinet', component: CabinetPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
