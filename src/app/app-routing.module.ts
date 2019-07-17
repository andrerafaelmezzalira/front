import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalComponent } from './proposal/proposal.component';
import { ProposalsComponent } from './proposals/proposals.component';

const routes: Routes = [
  {
    path: 'proposal',
    component: ProposalComponent
  },
  {
    path: 'proposals',
    component: ProposalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
