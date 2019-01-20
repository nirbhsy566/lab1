import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderLogComponent } from './header/header-log/header-log.component';
import { LeftMenuComponent } from './left/left-menu/left-menu.component';
import { RightMenuComponent } from './right/right-menu/right-menu.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';

import { UperdollarPipe } from './employee/uperdollar.pipe';
import { NewdirDirective } from './employee/newdir.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLogComponent,
    LeftMenuComponent,
    RightMenuComponent,
    FooterMenuComponent,
    routingComponents,
    UperdollarPipe,
    NewdirDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
