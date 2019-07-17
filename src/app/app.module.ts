import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposalComponent } from './proposal/proposal.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProposalService } from './proposal.service';


@NgModule({
  declarations: [
    AppComponent,
    ProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
