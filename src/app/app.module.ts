import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AppComponent }             from 'src/app/app.component';
import { Child111DefaultComponent } from 'src/app/child-1-default/child-1-1-default/child-1-1-1-default/child-1-1-1-default.component';
import { Child112OnpushComponent }  from 'src/app/child-1-default/child-1-1-default/child-1-1-2-onpush/child-1-1-2-onpush.component';
import { Child11DefaultComponent }  from 'src/app/child-1-default/child-1-1-default/child-1-1-default.component';
import { Child121DefaultComponent } from 'src/app/child-1-default/child-1-2-onpush/child-1-2-1-default/child-1-2-1-default.component';
import { Child122OnpushComponent }  from 'src/app/child-1-default/child-1-2-onpush/child-1-2-2-onpush/child-1-2-2-onpush.component';
import { Child12OnpushComponent }   from 'src/app/child-1-default/child-1-2-onpush/child-1-2-onpush.component';
import { Child1DefaultComponent }   from 'src/app/child-1-default/child-1-default.component';
import { Child211DefaultComponent } from 'src/app/child-2-onpush/child-2-1-default/child-2-1-1-default/child-2-1-1-default.component';
import { Child212OnpushComponent }  from 'src/app/child-2-onpush/child-2-1-default/child-2-1-2-onpush/child-2-1-2-onpush.component';
import { Child21DefaultComponent }  from 'src/app/child-2-onpush/child-2-1-default/child-2-1-default.component';
import { Child221DefaultComponent } from 'src/app/child-2-onpush/child-2-2-onpush/child-2-2-1-default/child-2-2-1-default.component';
import { Child222OnpushComponent }  from 'src/app/child-2-onpush/child-2-2-onpush/child-2-2-2-onpush/child-2-2-2-onpush.component';
import { Child22OnpushComponent }   from 'src/app/child-2-onpush/child-2-2-onpush/child-2-2-onpush.component';
import { Child2OnpushComponent }    from 'src/app/child-2-onpush/child-2-onpush.component';
import { ImpurePipe }               from 'src/app/pipes/impure.pipe';
import { PurePipe }                 from 'src/app/pipes/pure.pipe';
import { GlobalService }            from 'src/app/services/global.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    Child1DefaultComponent,
    Child2OnpushComponent,

    Child11DefaultComponent,
    Child12OnpushComponent,
    Child21DefaultComponent,
    Child22OnpushComponent,

    Child111DefaultComponent,
    Child112OnpushComponent,
    Child121DefaultComponent,
    Child122OnpushComponent,
    Child211DefaultComponent,
    Child212OnpushComponent,
    Child221DefaultComponent,
    Child222OnpushComponent,

    ImpurePipe,
    PurePipe,
  ],
  providers: [
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
