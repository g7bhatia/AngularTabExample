import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsDemoComponent } from './com-impl/tabs/tabs-demo.component';
import { RouterModule }   from '@angular/router';
import { TabsModule } from './com/tabs/tabs.module';
@NgModule({
  declarations: [
    AppComponent,
    TabsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule,
  
  RouterModule.forRoot([
                        {
                          path: 'tabs',
                          component: TabsDemoComponent
                        }
                      ]),
                      ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
