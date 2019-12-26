import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }            from 'src/app/app.component';
import { CdrDefaultComponent }     from 'src/app/cdr/cdr-default.component';
import { CdrOnpushComponent }      from 'src/app/cdr/cdr-onpush.component';
import { ImpurePipe }              from 'src/app/pipes/impure.pipe';
import { PurePipe }                from 'src/app/pipes/pure.pipe';
import { GlobalService }           from 'src/app/services/global.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,

    CdrDefaultComponent,
    CdrOnpushComponent,

    ImpurePipe,
    PurePipe,
  ],
  providers: [
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
