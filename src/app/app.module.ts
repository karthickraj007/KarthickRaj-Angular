import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import { routeconfig } from 'src/app.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    routeconfig,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
