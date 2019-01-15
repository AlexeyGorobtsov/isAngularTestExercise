import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";

import { CabinetPageComponent } from './cabinet-page/cabinet-page.component';
import {SystemComponent} from "./system.component";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from "./shared/directives/dropdown.directive";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    CabinetPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective
  ]
})
export class SystemModule {}
