import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalsComponent } from './proposals/proposals.component';

import { ProposalService } from './proposal.service';
import { ProposalsService } from './proposals.service';


@NgModule({
  declarations: [
    AppComponent,
    ProposalComponent,
    ProposalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProposalService, ProposalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
